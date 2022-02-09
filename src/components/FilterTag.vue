<template>
<div v-if="small">
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
</div>
<div v-else>
  <div
    class="tag flex items-center text-4xl font-semibold cursor-pointer"
    :class="style"
  >
    <base-icon
      v-show="isSelected"
      class="flex stroke-current text-text-white ml-1 mr-2"
      :icon="icon"
    />
    {{ filter }}
  </div>
</div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import BaseIcon from "./BaseIcon.vue"

type TagStyle = "primary" | "selected" | "loading" | "bigPrimary" | "bigSelected" | "bigLoading"
const styles: Record<TagStyle, string> = {
  primary: "bg-tag-neutral text-text-dark py-2 px-4 mx-2 my-2 text-center",
  selected: "bg-tag-selected text-text-white py-2 px-4 mx-2 my-2 text-center",
  loading:
    "bg-tag-neutral text-text-dark py-2 px-4 mx-2 my-2 text-center animate-pulse",
    bigPrimary: "bg-tag-neutral text-text-dark py-6 px-4 mx-2 my-2 text-center",
  bigSelected: "bg-tag-selected text-text-white py-6 px-4 mx-2 my-2 text-center",
  bigLoading:
    "bg-tag-neutral text-text-dark py-6 px-4 mx-2 my-2 text-center animate-pulse",
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
    small:{
      type: Boolean,
      required: false,
      default: true,
    }
  },
  setup(props) {
    const style = computed(() => {
      if (props.loading && props.loading) {
        return styles["loading"]
      }else if(props.loading && !props.small){
        return styles["bigLoading"]
      }
      if (props.isSelected && props.small) {
        return styles["selected"]
      } else if (!props.isSelected && props.small) {
        return styles["primary"]
      }
      if (props.isSelected && !props.small) {
        return styles["bigSelected"]
      } else if (!props.isSelected && !props.small) {
        return styles["bigPrimary"]
      }
    })

    return { styles, style }
  },
})
</script>
