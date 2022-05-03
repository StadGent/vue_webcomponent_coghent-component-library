<template>
  <video class="w-full h-full" controls controlsList="nodownload">
    <source
      :src="
        'https://api.collectie.gent/storage/v1/download/' + MediaFile?.filename
      "
      :type="MediaFile?.mimetype"
    />
  </video>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MediaFile } from "@/queries";
export default defineComponent({
  name: "VideoPlayer",
  props: {
    MediaFile: {
      type: Array as PropType<MediaFile[]>,
      required: false,
      default: "",
    },
  },
  setup(props) {
    return { props };
  },
});
</script>
