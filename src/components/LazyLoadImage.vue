<template>
  <img
    v-show="!imageLoaded"
    :src="`data:image/svg+xml,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 ${
      width ? width : 500
    } ${height ? height : 500}&quot;%3E%3C/svg%3E`"
    :class="`${extraClass} flex w-full rounded-md shadow animate-pulse bg-background-medium`"
    @load="rendered"
  />
  <img
    v-if="url"
    v-show="imageLoaded"
    :src="imageUrl"
    :class="`${extraClass} flex w-full rounded-md shadow`"
    @load="finalImageLoaded"
    @error="setFallback"
  />
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue"
export default defineComponent({
  name: "LazyLoadImage",
  props: {
    url: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    extraClass: {
      type: String,
      required: false,
    },
    fallBackUrl: {
      type: String,
      required: false,
    },
  },
  emits: ["loaded"],
  setup: (props, { emit }) => {
    const imageLoaded = ref<boolean>(false)
    const imageUrl = ref<string | undefined>(props.url)

    const rendered = () => {
      emit("loaded")
    }

    const finalImageLoaded = () => {
      imageLoaded.value = true
      emit("loaded")
    }

    watch(
      () => props.url,
      (value: string | undefined) => {
        if (!value) {
          imageLoaded.value = false
        } else {
          imageUrl.value = value
        }
      }
    )

    const setFallback = () => {
      console.log("setFallback")
      if (props.fallBackUrl) {
        imageUrl.value = props.fallBackUrl
      }
    }

    return {
      setFallback,
      imageLoaded,
      imageUrl,
      finalImageLoaded,
      rendered,
    }
  },
})
</script>
