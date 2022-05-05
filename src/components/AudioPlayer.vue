<template>
  <div class="flex w-full h-full justify-center items-center">
    <audio controls class="w-full" controlsList="nodownload">

      <source
        :src="
         
          mediaFile.original_file_location
        "
        :type="mediaFile.mimetype"
      />

      <source :src="MediaFile.original_file_location" :type="MediaFile.mimetype" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>
<script lang="ts">
import { MediaFileMetadata, MediaFile } from '@/queries'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'AudioPlayer',
  props: {
    mediaFile: {
      type: Array as PropType<MediaFile[]>,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>
