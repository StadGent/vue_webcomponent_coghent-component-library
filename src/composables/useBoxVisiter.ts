import { AddAssetToBoxVisiterDocument, AddFrameToStoryBoxVisiterDocument, AddStoryToBoxVisiterDocument, BoxVisiter, CreateBoxVisiterDocument, FrameInput, GetBoxVisiterByCodeDocument, RelationType, StoryInput } from '@/queries';
import { provideApolloClient, useQuery, useMutation } from '@vue/apollo-composable';
import { reactive } from 'vue';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client/core';
import { GetBoxVisiterRelationsByTypeDocument } from '..';


type UseBoxVisiter = {
  create: (_storyId: string) => Promise<void>
  getByCode: (code: string) => Promise<void>
  getRelationsByType: (code: string, _type: RelationType.Visited | RelationType.InBasket) => Promise<void>
  addStoryToVisiter: (_code: string, _storyInput: StoryInput) => Promise<void>
  addFrameToStory: (_code: string, _frameInput: FrameInput) => Promise<void>
  addAssetToBoxVisiter: (_code: string, _assetId: string, _type: RelationType.Visited | RelationType.InBasket) => Promise<void>
}

const boxVisiter = reactive<BoxVisiter>({} as BoxVisiter)

const useBoxVisiter = (_client: ApolloClient<NormalizedCacheObject>): UseBoxVisiter => {
  const apolloProvider = provideApolloClient(_client)

  const create = async (_storyId: string) => {
    const { onResult } = apolloProvider(() => useQuery(CreateBoxVisiterDocument, { storyId: _storyId }))
    onResult((value) => {
      Object.assign(boxVisiter, value.data.CreateBoxVisiter)
      Promise.resolve()
    })
  }
  const getByCode = async (_code: string) => {
    const { onResult } = apolloProvider(() => useQuery(GetBoxVisiterByCodeDocument, { code: _code }, {}))
    onResult((value) => {
      Object.assign(boxVisiter, value.data.BoxVisiterByCode)
      Promise.resolve()
    })
  }
  const getRelationsByType = async (_code: string, _type: RelationType.Visited | RelationType.InBasket) => {
    const { onResult } = apolloProvider(() => useQuery(GetBoxVisiterRelationsByTypeDocument, { code: _code, type: _type }, {}))
    onResult((value) => {
      Object.assign(boxVisiter, value.data.BoxVisiterRelationsByType)
      Promise.resolve()
    })
  }
  const addStoryToVisiter = async (_code: string, _storyInput: StoryInput) => {
    const { mutate, onDone } = apolloProvider(() => useMutation(AddStoryToBoxVisiterDocument))
    mutate({ code: _code, story: _storyInput })
    onDone((value) => {
      Object.assign(boxVisiter, value.data?.AddStoryToBoxVisiter)
      Promise.resolve()
    })
  }
  const addFrameToStory = async (_code: string, _frameInput: FrameInput) => {
    const { mutate, onDone } = apolloProvider(() => useMutation(AddFrameToStoryBoxVisiterDocument))
    mutate({ code: _code, frameInput: _frameInput })
    onDone((value) => {
      Object.assign(boxVisiter, value.data?.AddFrameToStoryBoxVisiter)
      Promise.resolve()
    })
  }
  const addAssetToBoxVisiter = async (_code: string, _assetId: string, _type: RelationType.Visited | RelationType.InBasket) => {
    const { mutate, onDone } = apolloProvider(() => useMutation(AddAssetToBoxVisiterDocument))
    mutate({ code: _code, assetId: _assetId, type: _type })
    onDone((value) => {
      Object.assign(boxVisiter, value.data?.AddAssetToBoxVisiter)
      Promise.resolve()
    })
  }

  return {
    create,
    getByCode,
    getRelationsByType,
    addStoryToVisiter,
    addFrameToStory,
    addAssetToBoxVisiter,
  }
};

export { useBoxVisiter, boxVisiter, UseBoxVisiter }