import { ref } from "vue";
import { Entity } from "..";

export type StoryBoxType = {
  storyboxes: Entity[];
};

const StoryBoxState = ref<StoryBoxType>({ storyboxes: [] });

export const useStorybox = () => {
  const setStoryBoxes = (newStoryBoxes: Entity[]) => {
    StoryBoxState.value.storyboxes = newStoryBoxes;
  };

  const addStoryBoxes = (newStoryBoxes: Entity[]) => {
    StoryBoxState.value.storyboxes.push(...newStoryBoxes);
  };

  const deleteStoryBoxes = (storyBoxIdsToDelete: string[]) => {
    storyBoxIdsToDelete.forEach((storyBoxId: string) => {
      const storybox: Entity | undefined = StoryBoxState.value.storyboxes.find(
        (storyBox: Entity) => storyBox.id == storyBoxId
      );
      if (storybox) {
        const index = StoryBoxState.value.storyboxes.indexOf(storybox);
        StoryBoxState.value.storyboxes.splice(index, 1);
      }
    });
  };

  return { setStoryBoxes, addStoryBoxes, deleteStoryBoxes };
};
