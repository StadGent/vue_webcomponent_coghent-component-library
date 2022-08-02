<template>
  <div class="w-9/12 flex bg-text-white" :class="styling">
    <input
      class="p-3 h-10 w-full focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
      id="js-input"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="inputValue"
      @keypress="checkIfEnter"
    />
    <div
      class="flex items-center p-2 hover:bg-neutral-50 cursor-pointer"
      v-if="icon"
      @click="submit"
    >
      <BaseIcon class="stroke-current" :icon="icon" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import BaseIcon from "./BaseIcon.vue";

export default defineComponent({
  inheritAttrs: false,
  components: { BaseIcon },
  props: {
    placeholder: {
      type: String,
    },
    icon: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    styling: {
      type: String,
      default: "",
      required: false,
    },
  },
  emits: ["submitField"],
  setup(props, { emit }) {
    const inputValue = ref<string>("");
    const submit = () => {
      emit("submitField", inputValue.value);
    };

    const checkIfEnter = (event: any) => {
      if (event.key == "Enter") {
        submit();
      }
    };

    return { submit, inputValue, checkIfEnter };
  },
});
</script>
<style scoped></style>
