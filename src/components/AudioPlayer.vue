<template>
  <div class="flex w-full flex-col h-full justify-center items-center">
    <audio-thumbnail class="h-1/4" />
    <audio
      :id="mediaFile._id"
      controls
      class="w-full absolute bottom-0"
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
import { reloadMediaAfterModalClose } from "../helpers";
import AudioThumbnail from "./AudioThumbnail.vue";

export default defineComponent({
  components: { AudioThumbnail },
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
          reloadMediaAfterModalClose(props.mediaFile._id);
        }
      }
    );
    return {};
  },
});
</script>
