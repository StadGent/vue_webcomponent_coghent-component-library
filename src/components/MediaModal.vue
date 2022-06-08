<template>
  <BaseModal
    :large="true"
    :modal-state="MediaModalState.state"
    custom-styles="z-50"
    @hide-modal="closeMediaModal"
    :showCloseButton="false"
  >
    <section
      v-if="MediaModalState.mediafile"
      class="h-full flex relative w-full"
    >
      <a
        class="right-2 top-2 absolute bg-neutral-0 cursor-pointer hover:bg-accent-yellow ml-2 mr-2 p-2 rounded-full shadow-xl text-accent-purple z-50 hover:text-neutral-0"
        @click="closeMediaModal"
      >
        <base-icon
          icon="close"
          class="h-5 w-5 ml-0.5 stroke-current fill-current stroke-2"
        />
      </a>
      <IIIFViewer
        v-if="MediaModalState.mediafile.mediatype.image"
        :image-url="MediaModalState.imageUrl"
        :canGoFullScreen="false"
      />
      <video-player
        v-if="MediaModalState.mediafile.mediatype.video"
        :mediaFile="MediaModalState.mediafile"
      />
      <AudioPlayer
        v-if="MediaModalState.mediafile.mediatype.audio"
        :mediaFile="MediaModalState.mediafile"
      />

      <PDFViewer
        v-if="MediaModalState.mediafile.mediatype.pdf"
        :mediaFile="MediaModalState.mediafile"
      />
    </section>
  </BaseModal>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import BaseModal from "./BaseModal.vue";
import IIIFViewer from "./IIIFViewer.vue";
import BaseIcon from "./BaseIcon.vue";
import VideoPlayer from "./VideoPlayer.vue";
import AudioPlayer from "./AudioPlayer.vue";
import PDFViewer from "./PDFViewer.vue";
import { useMediaModal } from "@/composables/useMediaModal";

export default defineComponent({
  name: "MediaModal",
  components: {
    BaseModal,
    IIIFViewer,
    BaseIcon,
    VideoPlayer,
    AudioPlayer,
    PDFViewer,
  },
  props: {},
  setup: (props) => {
    const { closeMediaModal, openMediaModal, MediaModalState } =
      useMediaModal();

    return {
      closeMediaModal,
      openMediaModal,
      MediaModalState,
    };
  },
});
</script>

<style scoped></style>
