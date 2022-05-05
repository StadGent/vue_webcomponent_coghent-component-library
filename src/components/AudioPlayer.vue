<template>
  <div class="flex w-full h-full justify-center items-center">
    <audio controls class="w-full" controlsList="nodownload">
<<<<<<< HEAD
      <source
        :src="
          'https://coghent-api-dev.inuits.dev/storage/v1/download/' +
          mediaFile.filename
        "
        :type="mediaFile.mimetype"
      />
=======
      <source :src="MediaFile.original_file_location" :type="MediaFile.mimetype" />
>>>>>>> a9ab2bf (players/viewers updated link)
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
