<template>
  <div
    class="tag flex items-center text-sm font-semibold cursor-pointer"
    :class="style"
  >
    <base-icon
      v-show="isSelected"
      class="flex stroke-current text-text-white ml-1 mr-2"
      :icon="icon"
    />
    {{ filter }}
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import BaseIcon from "./BaseIcon.vue"

type TagStyle = "primary" | "selected" | "loading"
const styles: Record<TagStyle, string> = {
  primary: "bg-tag-neutral text-text-dark py-2 px-4 mx-2 my-2 text-center",
  selected: "bg-tag-selected text-text-white py-2 px-4 mx-2 my-2 text-center",
  loading:
    "bg-tag-neutral text-text-dark py-2 px-4 mx-2 my-2 text-center animate-pulse",
}

export default defineComponent({
  name: "FilterTag",
  components: { BaseIcon },
  props: {
    filter: {
      type: String,
      default: "Filter",
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
      required: false,
    },
    icon: {
      type: String,
      default: "storybox",
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const style = computed(() => {
      if (props.loading) {
        return styles["loading"]
      }
      if (props.isSelected) {
        return styles["selected"]
      } else {
        return styles["primary"]
      }
    })

    return { styles, style }
  },
})
</script>
