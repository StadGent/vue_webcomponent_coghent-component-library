<template>
  <div class="flex w-full h-full justify-center items-center">
    <audio
      :id="mediaFile._id"
      controls
      class="w-full"
      controlsList="nodownload"
    >
      <source
        :src="mediaFile.original_file_location"
        :type="mediaFile.mimetype"
      />

      Your browser does not support the audio element.
    </audio>
  </div>
</template>
<script lang="ts">
import { MediaFileMetadata, MediaFile } from "@/queries";
import { defineComponent, PropType, watch } from "vue";

export default defineComponent({
  name: "AudioPlayer",
  props: {
    mediaFile: {
      type: Object as PropType<MediaFile>,
      required: true,
    },
    modalState: {
      type: String,
    },
  },
  setup(props) {
    watch(
      () => props.modalState,
      (modalState) => {
        if (modalState == "hide") {
          const player = document.getElementById(
            props.mediaFile._id
          ) as HTMLVideoElement;
          if (player) {
            player.pause();
          }
        }
      }
    );
    return {};
  },
});
</script>
