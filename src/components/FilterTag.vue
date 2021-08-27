<template>
  <div :class="style" @click="selectFilter()">
    <span class="text-sm font-semibold">
      <span v-show="tagSelected" class="ml-1 mr-2">🗸</span>
      <!-- <base-icon icon="storybox" /> -->
      {{ filter }}</span
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// import BaseIcon from './BaseIcon.vue';

type TagStyle = "primary" | "selected";
const styles: Record<TagStyle, string> = {
  primary: "bg-tag-neutral text-text-dark py-1 px-4 mx-2 text-center",
  selected: "bg-tag-selected text-text-white py-1 px-4 mx-2 text-center",
};

export default defineComponent({
  name: "FilterTag",
  // components: { BaseIcon },
  props: {
    filter: {
      type: String,
      default: "Filter",
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: ["update:selected"],
  setup(props, { emit }) {
    let tagSelected = ref(props.selected);
    let style = ref(styles["primary"]);

    const toggleTagStyle = () => {
      if (tagSelected.value) style.value = styles["selected"];
      else style.value = styles["primary"];
    };

    const selectFilter = () => {
      tagSelected.value = !tagSelected.value;
      toggleTagStyle();
      emit("update:selected", tagSelected.value);
    };
    return { selectFilter, tagSelected, styles, style };
  },
});
</script>
