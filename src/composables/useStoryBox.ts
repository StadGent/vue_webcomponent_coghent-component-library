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

  return { setStoryBoxes, getStoryBoxById, addStoryBoxes, deleteStoryBoxes };
};
