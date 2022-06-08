import { MediaFile } from "@/queries";
import { ref } from "vue";

export type ModalState = "show" | "hide" | "loading";

export type MediaModalType = {
  state: ModalState;
  mediafile: MediaFile | undefined;
  imageUrl: string | undefined;
};

const MediaModalState = ref<MediaModalType>({
  state: "hide",
  mediafile: undefined,
  imageUrl: undefined,
});

export const useMediaModal = () => {
  const updateMediaModal = (MediaModalInput: ModalState) => {
    MediaModalState.value.state = MediaModalInput;
  };

  const setMediaModalFile = (file: any) => {
    MediaModalState.value.mediafile = file;
  };

  const setMediaModalImageUrl = (url: string) => {
    MediaModalState.value.imageUrl = url;
  };

  const closeMediaModal = () => {
    updateMediaModal("hide");
  };

  const openMediaModal = () => {
    updateMediaModal("show");
  };
  return {
    closeMediaModal,
    openMediaModal,
    setMediaModalFile,
    setMediaModalImageUrl,
    MediaModalState,
  };
};
