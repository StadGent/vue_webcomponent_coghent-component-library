import { AddFrameToStoryBoxVisiterDocument, AddStoryToBoxVisiterDocument, BoxVisiter, CreateBoxVisiterDocument, FrameInput, GetBoxVisiterByCodeDocument, StoryInput } from '@/queries';
import { provideApolloClient, useQuery, useMutation } from '@vue/apollo-composable';
import { reactive } from 'vue';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client/core';


type UseBoxVisiter = {
  create: (_storyId: string) => Promise<void>
  getByCode: (code: string) => Promise<void>
  addStoryToVisiter: (_code: string, _storyInput: StoryInput) => Promise<void>
  addFrameToStory: (_code: string, _frameInput: FrameInput) => Promise<void>
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

  return {
    create,
    getByCode,
    addStoryToVisiter,
    addFrameToStory,
  }
};

export { useBoxVisiter, boxVisiter, UseBoxVisiter }