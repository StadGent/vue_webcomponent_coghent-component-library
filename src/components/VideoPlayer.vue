<template>
  <video
    :id="mediaFile._id"
    class="w-full h-full"
    controls
    controlsList="nodownload"
    autoplay
  >
    <source
      :src="mediaFile.original_file_location"
      :type="mediaFile.mimetype"
    />
  </video>
</template>
<script lang="ts">
import { defineComponent, PropType, watch } from "vue";
import { MediaFile } from "@/queries";
import { reloadMediaAfterModalClose } from "../helpers";

export default defineComponent({
  name: "VideoPlayer",
  props: {
    mediaFile: {
      type: Object as PropType<MediaFile>,
      required: false,
      default: [],
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
  },
});
</script>
