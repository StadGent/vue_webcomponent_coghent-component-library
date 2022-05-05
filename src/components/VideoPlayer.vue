<template>
  <video class="w-full h-full" controls controlsList="nodownload" autoplay>
    <source :src="mediaFile.original_file_location" :type="mediaFile.mimetype" />
  </video>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MediaFile } from '@/queries'
export default defineComponent({
  name: 'VideoPlayer',
  props: {
    mediaFile: {
      type: Array as PropType<MediaFile[]>,
      required: false,
      default: [],
    },
  },
  setup(props) {
    return { props }
  },
})
</script>
