import { AddEntityAsRelationDocument, MetaKey, StoryboxBuildInput } from '@/queries';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { provideApolloClient, useQuery } from '@vue/apollo-composable';
import { ref } from "vue";
import { CreateStoryboxDocument, Entity, GetEntityByIdDocument, KeyValuePair, LinkStoryboxDocument, StoryboxBuild, StoryboxDocument } from "..";

export type StoryBoxType = {
  count: number;
  storyboxes: Entity[];
  activeStorybox: StoryboxBuild | null
};
export const storyboxDataIsUpdated = ref<boolean>(false)

export const StoryBoxState = ref<StoryBoxType>({ count: 0, storyboxes: [], activeStorybox: null });

export const useStorybox = (_client: ApolloClient<NormalizedCacheObject>) => {
  const apolloProvider = provideApolloClient(_client);

  const setStoryBoxes = (newStoryBoxes: Entity[]) => {
    StoryBoxState.value.storyboxes = newStoryBoxes;
  };

  const getStoryBoxById = (storyBoxId: string): Entity | undefined => {
    const storyBox = StoryBoxState.value.storyboxes.find(
      (box: Entity) => box.id == storyBoxId
    );
    return storyBox;
  };

  const addStoryBoxes = (newStoryBoxes: Entity[]): Entity[] => {
    StoryBoxState.value.storyboxes.push(...newStoryBoxes);
    return StoryBoxState.value.storyboxes;
  };

  const deleteStoryBoxes = (storyBoxIdsToDelete: string[]): Entity[] => {
    let copyStoryboxes: Array<Entity> = []
    Object.assign(copyStoryboxes, StoryBoxState.value.storyboxes)
    storyBoxIdsToDelete.forEach((storyBoxId: string) => {
      const storybox: Entity | undefined = copyStoryboxes.find(
        (storyBox: Entity) => storyBox.id == storyBoxId
      );
      if (storybox) {
        const index = copyStoryboxes.indexOf(storybox);
        copyStoryboxes.splice(index, 1);
      }
    });
    StoryBoxState.value.storyboxes = copyStoryboxes
    return StoryBoxState.value.storyboxes;
  };

  const getStoryboxes = async () => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(StoryboxDocument, {}, { fetchPolicy: 'network-only' })
    );
    const result = await fetchMore({})
    StoryBoxState.value.storyboxes = result?.data.Storybox?.results as unknown as Array<Entity>
    StoryBoxState.value.count = result?.data.Storybox?.count as number
    return StoryBoxState
  }

  const createNew = async () => {
    if (StoryBoxState.value.activeStorybox?.assetTimings) {
      const newOrderedTimings = orderTimingOfAssetsAsAssetOrder(StoryBoxState.value.activeStorybox?.assetTimings as Array<KeyValuePair>)
      StoryBoxState.value.activeStorybox ? StoryBoxState.value.activeStorybox.assetTimings = newOrderedTimings : null
    }
    const { fetchMore } = apolloProvider(() =>
      useQuery(CreateStoryboxDocument, { storyboxInfo: {} })
    );
    const frame = await fetchMore({
      variables: {
        storyboxInfo: {
          frameId: StoryBoxState.value.activeStorybox?.frameId ? StoryBoxState.value.activeStorybox?.frameId : null,
          title: StoryBoxState.value.activeStorybox?.title,
          description: StoryBoxState.value.activeStorybox?.description,
          assets: StoryBoxState.value.activeStorybox?.assets ? StoryBoxState.value.activeStorybox?.assets.map(_asset => _asset?.id) : [],
          assetTimings: StoryBoxState.value.activeStorybox?.assetTimings ? StoryBoxState.value.activeStorybox?.assetTimings : [],

        } as StoryboxBuildInput
      }
    })
    await getStoryboxes()
    return frame
  }

  const createStoryboxFromEntity = async (_entityId: string) => {
    StoryBoxState.value.activeStorybox = {} as StoryboxBuild
    StoryBoxState.value.activeStorybox.assets = []
    const entity = getStoryBoxById(_entityId)
    if (entity) {
      StoryBoxState.value.activeStorybox.title = entity.metadata.find(data => data?.key === MetaKey.Title)?.value
      StoryBoxState.value.activeStorybox.description = entity.metadata.find(data => data?.key === MetaKey.Description)?.value
      StoryBoxState.value.activeStorybox.frameId = entity.id
      await getAssets(entity.relations?.map(_relation => _relation?.key.replace(`entities/`, '')) as Array<string>)
      StoryBoxState.value.activeStorybox.assetTimings = []
      if (entity.relations) {
        let tmpAssetTimings = []
        for (const _relation of entity.relations) {
          tmpAssetTimings.push({ key: _relation?.key.replace(`entities/`, ''), value: String(_relation?.timestamp_end! - _relation?.timestamp_zoom!) } as KeyValuePair)
        }
        StoryBoxState.value.activeStorybox.assetTimings = orderTimingOfAssetsAsAssetOrder(tmpAssetTimings)
      }
    }
    return StoryBoxState.value.activeStorybox
  }

  const orderTimingOfAssetsAsAssetOrder = (_assetTimings: Array<KeyValuePair>) => {
    let orderedAssetTimings: Array<KeyValuePair> = []
    for (const _asset of StoryBoxState.value.activeStorybox?.assets!) {
      const timing = _assetTimings.find((obj: KeyValuePair) => obj.key === _asset?.id)
      orderedAssetTimings.push(timing != undefined ? timing : { key: _asset?.id, value: '1' } as KeyValuePair)
    }
    return orderedAssetTimings
  }

  const getAssets = async (_assetIds: Array<string>) => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(GetEntityByIdDocument, { id: `` })
    );
    if (_assetIds.length >= 0) {
      for (const assetId of _assetIds) {
        if (assetId) {
          const result = await fetchMore({ variables: { id: assetId } })
          const asset = result?.data?.Entity as any
          StoryBoxState.value.activeStorybox?.assets?.push(asset as Entity)
        }
      }
    }
    return StoryBoxState.value.activeStorybox?.assets
  }

  const assetToStorybox = async (_storyboxId: string, _assetId: string) => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(AddEntityAsRelationDocument, { entityId: _storyboxId, entityRelationId: _assetId })
    );
    const result = await fetchMore({ variables: { entityId: _storyboxId, entityRelationId: _assetId } })
    return result
  }

  const assetIsInStorybox = (_entity: Entity, _storyboxId: string) => {
    let result = undefined
    const storyboxEntity = getStoryBoxById(_storyboxId)
    if (storyboxEntity?.relations && storyboxEntity?.relations.length >= 0) {
      result = storyboxEntity?.relations.find(_relation => _relation?.key === _entity._key)
    }
    return result
  }

  const linkBoxCodeToUser = async (_code: string) => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(LinkStoryboxDocument, { code: _code })
    );

    const newFrame = await fetchMore({ variables: { code: _code } })

    return newFrame?.data.LinkStorybox
  }

  return {
    setStoryBoxes,
    addStoryBoxes,
    deleteStoryBoxes,
    getStoryboxes,
    createNew,
    getStoryBoxById,
    createStoryboxFromEntity,
    getAssets,
    orderTimingOfAssetsAsAssetOrder,
    assetToStorybox,
    assetIsInStorybox,
    linkBoxCodeToUser,
  };
};
