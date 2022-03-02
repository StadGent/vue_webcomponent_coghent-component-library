<template>
  <span
    class="flex max-h-12 font-bold items-center stroke-current cursor-pointer"
    :class="buttonstyles[customStyle]"
    @click="onClick"
  >
    <base-icon
      v-if="iconShown && iconLeft"
      class="flex mr-3 -ml-2 stroke-current"
      :class="iconstyles[customIconStyle]"
      :icon="customIcon"
    />
    {{ text }}
    <base-icon
      v-if="iconShown && !iconLeft"
      class="flex ml-2 -mr-2 stroke-current"
      :class="iconstyles[customIconStyle]"
      :icon="customIcon"
    />
  </span>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import BaseIcon from "./BaseIcon.vue";
type CustomIcon =
  | "storybox"
  | "globe"
  | "delete"
  | "edit"
  | "logout"
  | "user"
  | "surprise";
type ButtonTypes =
  | "primary"
  | "secondary"
  | "ghost-black"
  | "ghost-purple"
  | "ghost-red"
  | "secondary-round"
  | "cc-round-black"
  | "round-white"
  | "details-black"
  | "touchtable-white-round"
  | "touchtable-green-round"
  | "touchtable-purple"
  | "touchtable-black";
const buttonstyles: Record<ButtonTypes, string> = {
  primary: "text-text-white bg-accent-purple rounded-full shadow-lg px-10 py-3",
  secondary:
    "text-accent-purple bg-text-white rounded-full shadow-lg px-10 py-3",
  "ghost-black": "text-text-dark py-3",
  "ghost-purple": "text-accent-purple py-3",
  "ghost-red": "text-text-red py-3",
  "secondary-round":
    "text-accent-purple bg-text-white rounded-full shadow-lg px-4 py-2",
  "cc-round-black":
    "text-text-black bg-text-white rounded-full shadow-lg px-4 pr-6 py-2 stroke-0",
  "round-white": "text-text-white px-2 py-2",
  "details-black": "text-text-dark py-3",
  "touchtable-white-round":
    "text-text-dark px-10 py-10 bg-text-white rounded-full",
  "touchtable-green-round":
    "text-text-white px-10 py-10 bg-accent-green rounded-full",
  "touchtable-purple": "text-accent-purple py-4",
  "touchtable-black": "text-text-dark py-4",
};
type iconTypes = "sm" | "default";
const iconstyles: Record<iconTypes, string> = {
  sm: "w-3 h-3",
  default: "",
};

export default defineComponent({
  components: { BaseIcon },
  props: {
    text: { type: String, required: false },
    onClick: {
      type: Function,
      required: false,
    },
    customStyle: {
      type: String as PropType<ButtonTypes>,
      default: "primary",
    },
    customIconStyle: {
      type: String as PropType<iconTypes>,
      default: "default",
    },
    customIcon: {
      type: String as PropType<CustomIcon>,
      default: "user",
    },
    iconShown: {
      type: Boolean,
      required: true,
    },
    iconLeft: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: [],
  setup: (props, { emit }) => {
    return {
      buttonstyles,
      iconstyles,
    };
  },
});
</script>
<style scoped></style>
