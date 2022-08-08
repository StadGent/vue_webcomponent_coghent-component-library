<template>
  <video
    :id="mediaFile._id"
    class="w-full h-full"
    controls
    controlsList="nodownload"
    autoplay
  >
    <source
      :src="mediafileUrl + '/' + mediaFile.transcode_filename"
      type="video/mp4"
    />
  </video>
</template>
<script lang="ts">
import { defineComponent, PropType, watch } from "vue";
import { MediaFile } from "@/queries";
import { reloadMediaAfterModalClose } from "../helpers";
import { MIMETYPES } from "../composables/mimetype";

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
    mediafileUrl: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    console.log(props.mediafileUrl + "/" + props.mediaFile.transcode_filename);
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
