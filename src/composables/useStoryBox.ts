import {
  AddEntityAsRelationDocument,
  MetaKey,
  StoryboxBuildInput,
  GetStoryByIdDocument,
  LinkFrameToVisiterDocument,
  GetvisiterOfEntityDocument,
  CreateStoryboxDocument,
  Entity,
  GetEntityByIdDocument,
  KeyValuePair,
  LinkStoryboxDocument,
  RelationType,
  StoryboxBuild,
  StoryboxDocument,
  PublishStoryboxDocument,
  Relation,
  CreateSubtitlesForUploadDocument,
  GetEntitiesDocument,
} from "@/queries";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { parse } from "@intlify/message-resolver";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { ref, watch } from "vue";

export type StoryBoxType = {
  count: number;
  storyboxes: Entity[];
  activeStorybox: StoryboxBuild | null;
};

export const StoryBoxState = ref<StoryBoxType>({
  count: 0,
  storyboxes: [],
  activeStorybox: null,
});

export const useStorybox = (_client: ApolloClient<NormalizedCacheObject>) => {
  const apolloProvider = provideApolloClient(_client);

  const refreshGetStoryboxesWhenEmpty = async () => {
    if (
      StoryBoxState.value.storyboxes === undefined ||
      StoryBoxState.value.storyboxes.length <= 0
    ) {
      await getStoryboxes();
    }
  };

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
    let copyStoryboxes: Array<Entity> = [];
    Object.assign(copyStoryboxes, StoryBoxState.value.storyboxes);
    storyBoxIdsToDelete.forEach((storyBoxId: string) => {
      const storybox: Entity | undefined = copyStoryboxes.find(
        (storyBox: Entity) => storyBox.id == storyBoxId
      );
      if (storybox) {
        const index = copyStoryboxes.indexOf(storybox);
        copyStoryboxes.splice(index, 1);
      }
    });
    StoryBoxState.value.storyboxes = copyStoryboxes;
    return StoryBoxState.value.storyboxes;
  };

  const correctAssetRelationsForStoryboxes = async (
    _storyboxes: Array<Entity>
  ): Promise<Array<Entity>> => {
    const updatedStoryboxes: Array<Entity> = [];
    return new Promise((resolve, reject) => {
      for (const storybox of _storyboxes) {
        let tmpStorybox: Entity = {
          id: "",
          object_id: "",
          type: "",
          metadata: [],
          metadataByLabel: [],
          title: [],
          scopeNote: [],
          collections: [],
        };
        Object.assign(tmpStorybox, storybox);
        if (storybox.relations) {
          const components = storybox.relations.filter(
            (_relation) => _relation?.type == RelationType.Components
          );
          tmpStorybox.relations = components;
        }
        updatedStoryboxes.push(tmpStorybox);
      }
      resolve(updatedStoryboxes);
    });
  };

  const getStoryboxes = async () => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(StoryboxDocument, {}, { fetchPolicy: "network-only" })
    );
    const result = await fetchMore({});
    StoryBoxState.value.storyboxes = result?.data.Storybox
      ?.results as unknown as Array<Entity>;
    return StoryBoxState;
  };

  const createNew = async () => {
    if (StoryBoxState.value.activeStorybox?.assetTimings) {
      const newOrderedTimings = orderTimingOfAssetsAsAssetOrder(
        StoryBoxState.value.activeStorybox?.assetTimings as Array<KeyValuePair>
      );
      StoryBoxState.value.activeStorybox
        ? (StoryBoxState.value.activeStorybox.assetTimings = newOrderedTimings)
        : null;
    }
    const { fetchMore } = apolloProvider(() =>
      useQuery(CreateStoryboxDocument, { storyboxInfo: {} })
    );
    const frame = await fetchMore({
      variables: {
        storyboxInfo: {
          frameId: StoryBoxState.value.activeStorybox?.frameId || null,
          title: StoryBoxState.value.activeStorybox?.title,
          description: StoryBoxState.value.activeStorybox?.description,
          assets: StoryBoxState.value.activeStorybox?.assets
            ? StoryBoxState.value.activeStorybox?.assets.map(
                (_asset) => _asset?.id
              )
            : [],
          assetTimings: StoryBoxState.value.activeStorybox?.assetTimings || [],
          assetDescriptions:
            StoryBoxState.value.activeStorybox?.assetDescriptions || [],
        } as StoryboxBuildInput,
      },
    });
    generateSubtitles(StoryBoxState.value.activeStorybox?.frameId);
    return frame;
  };

  const createStoryboxFromEntity = async (_entityId: string) => {
    const entity = getStoryBoxById(_entityId);
    if (entity) {
      StoryBoxState.value.activeStorybox = {} as StoryboxBuild;
      StoryBoxState.value.activeStorybox.assets = [];
      StoryBoxState.value.activeStorybox.title = entity.metadata.find(
        (data) => data?.key === MetaKey.Title
      )?.value;
      StoryBoxState.value.activeStorybox.description = entity.metadata.find(
        (data) => data?.key === MetaKey.Description
      )?.value;
      StoryBoxState.value.activeStorybox.frameId = entity.id;

      await getAssets(
        entity.relations?.map((_relation) =>
          _relation?.type === RelationType.Components
            ? _relation?.key.replace(`entities/`, "")
            : null
        ) as Array<string>
      );
      StoryBoxState.value.activeStorybox.assetTimings = [];
      if (entity.relations) {
        if (entity.relations) {
          const timingsKeyValue = parseKeyValuePairsFromRelations(
            entity.relations as Relation[],
            "timings"
          );
          const descriptionsKeyValue = parseKeyValuePairsFromRelations(
            entity.relations as Relation[],
            "description"
          );
          StoryBoxState.value.activeStorybox.assetTimings =
            orderTimingOfAssetsAsAssetOrder(timingsKeyValue);
          StoryBoxState.value.activeStorybox.assetDescriptions =
            descriptionsKeyValue;
        }
      }
    }
    return StoryBoxState.value.activeStorybox;
  };

  const parseKeyValuePairsFromRelations = (
    _relations: Relation[],
    _storyboxRelationType: "timings" | "description"
  ): KeyValuePair[] => {
    let keyValuePairs = [];
    for (const _relation of _relations) {
      const value =
        _storyboxRelationType == "timings"
          ? String(
              _relation?.timestamp_end! - _relation?.timestamp_zoom! != 0
                ? _relation?.timestamp_end! - _relation?.timestamp_zoom!
                : 5
            )
          : _relation.value || "";
      keyValuePairs.push({
        key: _relation?.key.replace(`entities/`, ""),
        value,
      } as KeyValuePair);
    }
    return keyValuePairs;
  };

  const orderTimingOfAssetsAsAssetOrder = (
    _assetTimings: Array<KeyValuePair>
  ) => {
    let orderedAssetTimings: Array<KeyValuePair> = [];
    for (const _asset of StoryBoxState.value.activeStorybox?.assets!) {
      const timing = _assetTimings.find(
        (obj: KeyValuePair) => obj.key === _asset?.id
      );
      orderedAssetTimings.push(
        timing != undefined
          ? timing
          : ({ key: _asset?.id, value: "1" } as KeyValuePair)
      );
    }
    return orderedAssetTimings;
  };

  const getAssets = async (_assetIds: Array<string>) => {
    _assetIds = _assetIds.filter((_id) => _id !== null);
    const { fetchMore } = apolloProvider(() =>
      useQuery(GetEntityByIdDocument, { id: `` })
    );
    if (_assetIds.length >= 0) {
      for (const assetId of _assetIds) {
        if (assetId) {
          try {
            const result = await fetchMore({ variables: { id: assetId } });
            const asset = result?.data?.Entity as any;
            asset && asset.type === "asset"
              ? StoryBoxState.value.activeStorybox?.assets?.push(
                  asset as Entity
                )
              : null;
          } catch (e) {
            console.log("Error getting assets: " + e);
          }
        }
      }
    }
    return StoryBoxState.value.activeStorybox?.assets;
  };

  const assetToStorybox = async (_storyboxId: string, _assetId: string) => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(AddEntityAsRelationDocument, {
        entityId: _storyboxId,
        entityRelationId: _assetId,
      })
    );
    const result = await fetchMore({
      variables: { entityId: _storyboxId, entityRelationId: _assetId },
    });
    return result;
  };

  const assetIsInStorybox = (_entity: Entity, _storyboxId: string) => {
    let result = undefined;
    const storyboxEntity = getStoryBoxById(_storyboxId);
    if (storyboxEntity?.relations && storyboxEntity?.relations.length >= 0) {
      result = storyboxEntity?.relations.find(
        (_relation) => _relation?.key === `entities/${_entity.id}`
      );
    }
    return result;
  };

  const linkBoxCodeToUser = async (_code: string) => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(LinkStoryboxDocument, { code: _code })
    );

    const newFrame = await fetchMore({ variables: { code: _code } });

    return newFrame?.data.LinkStorybox;
  };

  watch(
    () => StoryBoxState.value.storyboxes.length,
    (storyboxAmount) => {
      StoryBoxState.value.count = storyboxAmount;
    }
  );

  const getStoryData = async (_storyId: string) => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(GetStoryByIdDocument, { id: _storyId })
    );

    const story = await fetchMore({ variables: { id: _storyId } });
    return story?.data.GetStoryById ? story?.data.GetStoryById : null;
  };

  const getStoryboxAssetAmount = (_id: string): number => {
    let count = 0;
    const foundBox = StoryBoxState.value.storyboxes.find(
      (_box) => _box.id === _id
    );
    if (foundBox && foundBox.relations) {
      const components = foundBox.relations?.filter(
        (_relation) => _relation?.type == RelationType.Components
      );
      count = components.length;
    }
    return count;
  };

  const publishStorybox = async (_frameId: string) => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(PublishStoryboxDocument, { frameId: _frameId })
    );

    const visiter = await fetchMore({ variables: { frameId: _frameId } });
    return visiter?.data.PublishStorybox;
  };

  const getVisiterFromFrame = async (_frameId: string) => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(GetvisiterOfEntityDocument, { id: _frameId })
    );
    const visiter = await fetchMore({ variables: { id: _frameId } });
    return visiter?.data.GetvisiterOfEntity;
  };

  const generateSubtitles = async (_frameId: string | undefined) => {
    if (_frameId) {
      try {
        const { fetchMore } = provideApolloClient(_client)(() =>
          useQuery(CreateSubtitlesForUploadDocument, { frameId: _frameId })
        );
        const result = await fetchMore({ variables: { frameId: _frameId } });
        return result;
      } catch (e) {
        console.log(e);
        return "Error during subtitle generation: " + e;
      }
    }
  };

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
    getStoryData,
    getStoryboxAssetAmount,
    publishStorybox,
    getVisiterFromFrame,
    refreshGetStoryboxesWhenEmpty,
    generateSubtitles,
  };
};
