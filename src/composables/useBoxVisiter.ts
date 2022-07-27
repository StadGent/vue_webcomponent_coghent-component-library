import {
  AddAssetToBoxVisiterDocument,
  AddFrameToStoryBoxVisiterDocument,
  AddStoryToBoxVisiterDocument,
  AddTouchTableTimeDocument,
  BoxVisiter,
  CreateBoxVisiterDocument,
  FrameInput,
  GetBoxVisiterByCodeDocument,
  Relation,
  RelationType,
  UpdatedScannedOfBoxvisiterDocument,
} from "@/queries";
import {
  provideApolloClient,
  useQuery,
  useMutation,
} from "@vue/apollo-composable";
import { reactive, Ref, ref } from "vue";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client/core";
import {
  DeleteBoxVisiterBasketItemDocument,
  Entity,
  GetBoxVisiterRelationsByTypeDocument,
} from "..";

export type UseBoxVisiter = {
  create: (_storyId: string) => Promise<BoxVisiter>;
  getByCode: (code: string) => Promise<BoxVisiter | null>;
  getRelationsByType: (
    code: string,
    _type:
      | RelationType.Visited
      | RelationType.InBasket
      | RelationType.Stories
      | RelationType.Components
  ) => Promise<Array<Relation>>;
  addStoryToVisiter: (
    _code: string,
    _storyId: string
  ) => Promise<BoxVisiter | null>;
  addFrameToStory: (
    _code: string,
    _frameInput: FrameInput
  ) => Promise<BoxVisiter | null>;
  addAssetToBoxVisiter: (
    _code: string,
    _assetId: string,
    _type: RelationType.Visited | RelationType.Components
  ) => Promise<Array<Relation>>;
  deleteBasketItemFromBoxVisiter: (
    _code: string,
    _relationId: string
  ) => Promise<any>;
  addTouchTableTime: (_code: string) => Promise<BoxVisiter>;
  selectedStory: Ref<StorySelected | undefined>;
  setSelectedStory: (input: StorySelected) => void;
  setStartAsset: (input: Entity) => void;
  addHistoryAsset: (input: Entity) => void;
  resetBoxVisiter: () => null;
  boxVisiter: Ref<BoxVisiter | null>;
  startAsset: Ref<Entity | undefined>;
  historyAssets: Ref<Entity[]>;
  clearHistoryAssets: () => void;
  updateScannedTimesOfVisiter: (_code: string) => Promise<BoxVisiter | null>;
};

export type StorySelected = {
  id: string;
  color: string;
  title: string;
};

const selectedStory = ref<StorySelected | undefined>();
const boxVisiter = ref<BoxVisiter | null>(null);
const startAsset = ref<Entity | undefined>();
const historyAssets = ref<Entity[]>([]);

const useBoxVisiter = (
  _client: ApolloClient<NormalizedCacheObject>
): UseBoxVisiter => {
  const apolloProvider = provideApolloClient(_client);

  const create = async (_storyId: string) => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(CreateBoxVisiterDocument, { storyId: _storyId })
    );
    const created = await fetchMore({
      variables: {
        storyId: _storyId,
      },
    });
    return created?.data.CreateBoxVisiter as BoxVisiter;
  };
  const getByCode = async (_code: string) => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(GetBoxVisiterByCodeDocument, { code: _code })
    );
    const visiter = await fetchMore({ variables: { code: _code } });
    boxVisiter.value = visiter?.data.BoxVisiterByCode as BoxVisiter;
    return boxVisiter.value;
  };
  const getRelationsByType = async (
    _code: string,
    _type:
      | RelationType.Visited
      | RelationType.InBasket
      | RelationType.Stories
      | RelationType.Components
  ) => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(GetBoxVisiterRelationsByTypeDocument, {
        code: _code,
        type: _type,
      })
    );
    const relations = await fetchMore({
      variables: { code: _code, type: _type },
    });
    return relations?.data.BoxVisiterRelationsByType as Array<Relation>;
  };
  const addStoryToVisiter = async (_code: string, _storyId: string) => {
    const { mutate } = apolloProvider(() =>
      useMutation(AddStoryToBoxVisiterDocument)
    );
    const updated = await mutate({ code: _code, storyId: _storyId });
    boxVisiter.value = updated?.data?.AddStoryToBoxVisiter as BoxVisiter;
    return boxVisiter.value;
  };
  const addFrameToStory = async (_code: string, _frameInput: FrameInput) => {
    const { mutate } = apolloProvider(() =>
      useMutation(AddFrameToStoryBoxVisiterDocument)
    );
    const updated = await mutate({ code: _code, frameInput: _frameInput });
    boxVisiter.value = updated?.data?.AddFrameToStoryBoxVisiter as BoxVisiter;
    return boxVisiter.value;
  };

  const _updateBoxVisiterRelations = (updatedRelations: Relation[]) => {
    if (boxVisiter.value) {
      const boxVisiterClone = { ...boxVisiter.value };
      boxVisiterClone.relations = updatedRelations;
      boxVisiter.value = boxVisiterClone;
    }
  };

  const _updateStoryboxBasket = (updatedRelations: Relation[]) => {
    if (boxVisiter.value) {
      const boxVisiterClone = JSON.parse(JSON.stringify(boxVisiter.value));
      if (boxVisiterClone.storyboxes && boxVisiterClone.storyboxes[0]) {
        boxVisiterClone.storyboxes[0].relations = updatedRelations;
        boxVisiter.value = boxVisiterClone;
      }
    }
  };

  const addAssetToBoxVisiter = async (
    _code: string,
    _assetId: string,
    _type: RelationType.Visited | RelationType.Components
  ) => {
    let relations: Array<Relation>;
    const { mutate } = apolloProvider(() =>
      useMutation(AddAssetToBoxVisiterDocument)
    );
    const updated = await mutate({
      code: _code,
      assetId: _assetId,
      type: _type,
    });
    relations = updated?.data?.AddAssetToBoxVisiter as Array<Relation>;
    if (_type == RelationType.Visited) {
      _updateBoxVisiterRelations(relations);
    } else {
      _updateStoryboxBasket(relations);
    }
    return relations;
  };

  const deleteBasketItemFromBoxVisiter = async (
    _code: string,
    _relationId: string
  ) => {
    let relations;
    const { mutate } = apolloProvider(() =>
      useMutation(DeleteBoxVisiterBasketItemDocument)
    );
    const deleted = await mutate({ code: _code, relationId: _relationId });
    relations = deleted?.data?.DeleteBoxVisiterBasketItem as Relation[];
    _updateStoryboxBasket(relations);
    return relations;
  };

  const addTouchTableTime = async (_code: string): Promise<BoxVisiter> => {
    const { mutate } = apolloProvider(() =>
      useMutation(AddTouchTableTimeDocument)
    );
    const result = await mutate({ code: _code });
    const updatedBoxVisiter = result?.data?.AddTouchTableTime as BoxVisiter;
    console.log(updatedBoxVisiter);
    return updatedBoxVisiter;
  };

  const resetBoxVisiter = () => {
    boxVisiter.value = null;
    startAsset.value = undefined;
    historyAssets.value = [];
    return boxVisiter.value;
  };

  const setSelectedStory = (input: StorySelected) => {
    selectedStory.value = input;
  };

  const setStartAsset = (input: Entity) => {
    startAsset.value = input;
  };

  const addHistoryAsset = (input: Entity) => {
    historyAssets.value.unshift(input);
  };

  const clearHistoryAssets = () => {
    historyAssets.value = [];
  };

  const updateScannedTimesOfVisiter = async (
    _code: string
  ): Promise<BoxVisiter | null> => {
    const { mutate } = apolloProvider(() =>
      useMutation(UpdatedScannedOfBoxvisiterDocument)
    );
    const visiter = await mutate({ code: _code });
    return visiter?.data?.UpdatedScannedOfBoxvisiter as BoxVisiter | null;
  };

  return {
    create,
    getByCode,
    boxVisiter,
    getRelationsByType,
    addStoryToVisiter,
    addFrameToStory,
    selectedStory,
    startAsset,
    historyAssets,
    setSelectedStory,
    addAssetToBoxVisiter,
    addTouchTableTime,
    resetBoxVisiter,
    setStartAsset,
    addHistoryAsset,
    clearHistoryAssets,
    deleteBasketItemFromBoxVisiter,
    updateScannedTimesOfVisiter,
  };
};

export { useBoxVisiter, boxVisiter, startAsset, selectedStory, historyAssets };
