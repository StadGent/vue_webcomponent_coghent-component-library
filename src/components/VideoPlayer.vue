<template>
  <video class="w-full h-full" controls controlsList="nodownload">

    <source
      :src="
        mediaFile.original_file_location
      "
      :type="mediaFile.mimetype"
    />
    <source :src="MediaFile.original_file_location" :type="MediaFile.mimetype" />

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
      default: '',
    },
  },
  setup(props) {
    return { props }
  },
})
</script>
