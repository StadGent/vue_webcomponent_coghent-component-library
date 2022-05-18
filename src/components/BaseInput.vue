<template>
  <input
    class="
      p-3
      h-10
      w-9/12
      mr-5
      bg-text-white
      focus:outline-none
      focus:ring-2
      focus:ring-accent-yellow
      focus:border-transparent
    "
    :class="styling"
    :ref="ref"
    :placeholder="placeholder"
    :disabled="disabled"
    v-model="modelValue"
  />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ref: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
    styling: {
      type: String,
      default: "",
      required: false,
    },
  },
  emits: ["update:modelValue", "onClick"],
  setup(props, { emit }) {
    const onClick = () => {
      console.log("onclick");
      emit("onClick");
    };

    return { onClick };
  },
});
</script>
<style scoped>
</style>
