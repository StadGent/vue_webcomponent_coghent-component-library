import {
  AddAssetToBoxVisiterDocument,
  AddFrameToStoryBoxVisiterDocument,
  AddStoryToBoxVisiterDocument,
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
  DeleteRelationFromBoxVisiterDocument,
  Entity,
  GetBoxVisiterRelationsByTypeDocument,
} from "..";

export type UseBoxVisiter = {
  create: (_storyId: string) => Promise<BoxVisiter>;
  getByCode: (code: string) => Promise<BoxVisiter | null>;
  getRelationsByType: (
    code: string,
    _type: RelationType.Visited | RelationType.InBasket | RelationType.Stories
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
    _type: RelationType.Visited | RelationType.InBasket
  ) => Promise<Array<Relation>>;
  deleteRelationFromBoxVisiter: (
    _code: string,
    _relationId: string
  ) => Promise<any>;
  selectedStory: Ref<StorySelected | undefined>;
  setSelectedStory: (input: StorySelected) => void;
  setStartAsset: (input: Entity) => void;
  addHistoryAsset: (input: Entity) => void;
  resetBoxVisiter: () => null;
  boxVisiter: Ref<BoxVisiter | null>;
  startAsset: Ref<Entity | undefined>;
  historyAssets: Ref<Entity[]>;
  clearHistoryAssets: () => void;
  updateScannedTimesOfVisiter: (_code: string) => Promise<BoxVisiter | null>
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
    _type: RelationType.Visited | RelationType.InBasket | RelationType.Stories
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

  const addAssetToBoxVisiter = async (
    _code: string,
    _assetId: string,
    _type: RelationType.Visited | RelationType.InBasket
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
    _updateBoxVisiterRelations(relations);
    return relations;
  };

  const deleteRelationFromBoxVisiter = async (
    _code: string,
    _relationId: string
  ) => {
    let relations;
    const { mutate } = apolloProvider(() =>
      useMutation(DeleteRelationFromBoxVisiterDocument)
    );
    const deleted = await mutate({ code: _code, relationId: _relationId });
    relations = deleted?.data?.DeleteBoxVisiterRelation as Relation[];
    _updateBoxVisiterRelations(relations);
    return relations;
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

  const updateScannedTimesOfVisiter = async (_code: string): Promise<BoxVisiter | null> => {
    const { mutate } = apolloProvider(() =>
      useMutation(UpdatedScannedOfBoxvisiterDocument)
    );
    const visiter = await mutate({ code: _code });
    return visiter?.data?.UpdatedScannedOfBoxvisiter as BoxVisiter | null
  }

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
    resetBoxVisiter,
    setStartAsset,
    addHistoryAsset,
    clearHistoryAssets,
    deleteRelationFromBoxVisiter,
    updateScannedTimesOfVisiter,
  };
};

export { useBoxVisiter, boxVisiter, startAsset, selectedStory, historyAssets };
