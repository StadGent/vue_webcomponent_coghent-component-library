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
  StoryInput,
} from "@/queries";
import {
  provideApolloClient,
  useQuery,
  useMutation,
} from "@vue/apollo-composable";
import { reactive, Ref, ref } from "vue";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client/core";
import { Entity, GetBoxVisiterRelationsByTypeDocument } from "..";

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
  selectedStory: Ref<StorySelected | undefined>;
  setSelectedStory: (input: StorySelected) => void;
  setStartAsset: (input: Entity) => void;
  addHistoryAsset: (input: Entity) => void;
  resetBoxVisiter: () => null;
  getTouchTableHistory: () => Array<Relation>;
  getTouchTableBasket: () => Array<Relation>;
  boxVisiter: Ref<BoxVisiter | null>;
  startAsset: Ref<Entity | undefined>;
  historyAssets: Ref<Entity[]>;
  clearHistoryAssets: () => void;
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
    console.log({ relations });
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

  const getTouchTableHistory = () => {
    return boxVisiter.value?.relations?.filter(
      (relation: any) => relation.type == "visited"
    ) as Array<Relation>;
  };

  const getTouchTableBasket = () => {
    return boxVisiter.value?.relations?.filter(
      (relation: any) => relation.type == "inBasket"
    ) as Array<Relation>;
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
    resetBoxVisiter,
    setStartAsset,
    getTouchTableHistory,
    getTouchTableBasket,
    addHistoryAsset,
    clearHistoryAssets,
  };
};

export { useBoxVisiter, boxVisiter, startAsset, selectedStory, historyAssets };
