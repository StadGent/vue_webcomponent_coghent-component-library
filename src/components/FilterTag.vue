<template>
  <div
    class="tag flex items-center text-sm font-semibold"
    :class="style"
    @click="selectFilter()"
  >
    <base-icon
      v-show="tagSelected"
      class="flex stroke-current text-text-white ml-1 mr-2"
      :icon="icon"
    />
    {{ filter }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseIcon from "./BaseIcon.vue";

type TagStyle = "primary" | "selected";
const styles: Record<TagStyle, string> = {
  primary: "bg-tag-neutral text-text-dark py-2 px-4 mx-2 my-2 text-center",
  selected: "bg-tag-selected text-text-white py-2 px-4 mx-2 my-2 text-center",
};

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
  },
  emits: ["update:isSelected"],
  setup(props, { emit }) {
    let tagSelected = ref(props.isSelected);
    let style = ref(styles["primary"]);

    const toggleTagStyle = () => {
      if (tagSelected.value) style.value = styles["selected"];
      else style.value = styles["primary"];
    };

    const selectFilter = () => {
      tagSelected.value = !tagSelected.value;
      toggleTagStyle();
      emit("update:isSelected", tagSelected.value);
    };

    toggleTagStyle();

    return { selectFilter, tagSelected, styles, style };
  },
});
</script>
