<template>
  <span class="m-0 p-0 grid grid-cols-2">
    <slot> </slot>
    <span
      class="
        w-5
        h-5
        flex
        leading-5
        justify-center
        rounded-full
        text-sm text-text-white text-bold
      "
      :class="`bg-${color} ${custom}`"
      >{{ value }}</span
    >
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: `accent-purple`,
    },
    custom: {
      type: String,
      required: false,
    },
  },
  setup() {},
});
</script>
