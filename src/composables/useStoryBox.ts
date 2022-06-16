import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { ref } from "vue";
import {
  CreateStoryboxDocument,
  Entity,
  StoryboxBuild,
  StoryboxDocument,
} from "..";

export type StoryBoxType = {
  count: number;
  storyboxes: Entity[];
};

export const StoryBoxState = ref<StoryBoxType>({ count: 0, storyboxes: [] });

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
    storyBoxIdsToDelete.forEach((storyBoxId: string) => {
      const storybox: Entity | undefined = StoryBoxState.value.storyboxes.find(
        (storyBox: Entity) => storyBox.id == storyBoxId
      );
      if (storybox) {
        const index = StoryBoxState.value.storyboxes.indexOf(storybox);
        StoryBoxState.value.storyboxes.splice(index, 1);
      }
    });
    return StoryBoxState.value.storyboxes;
  };

  const getStoryboxes = async () => {
    const { fetchMore } = apolloProvider(() => useQuery(StoryboxDocument));
    const result = await fetchMore({});
    StoryBoxState.value.storyboxes = result?.data.Storybox
      ?.results as Array<Entity>;
    StoryBoxState.value.count = result?.data.Storybox?.count as number;
    return StoryBoxState;
  };

  const createNew = async (_storyboxInfo: StoryboxBuild) => {
    const { fetchMore } = apolloProvider(() =>
      useQuery(CreateStoryboxDocument, { storyboxInfo: {} })
    );
    const frame = await fetchMore({
      variables: { storyboxInfo: _storyboxInfo },
    });
    await getStoryboxes();
    return frame;
  };

  return {
    setStoryBoxes,
    addStoryBoxes,
    deleteStoryBoxes,
    getStoryboxes,
    createNew,
    getStoryBoxById,
  };
};
