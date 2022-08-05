<template>
  <span
    class="flex max-h-12 font-bold items-center stroke-current cursor-pointer px-6"
    :class="buttonstyles[customStyle]"
    @click="onClick"
  >
    <base-icon
      v-if="iconShown && iconLeft"
      :class="
        `flex ${noMargin ? '' : 'mr-3 ml-2'} stroke-current ` +
        iconstyles[customIconStyle]
      "
      :icon="customIcon"
    />
    {{ text }}
    <base-icon
      v-if="iconShown && !iconLeft"
      :class="
        `flex ${noMargin ? '' : 'mr-3 ml-2'} stroke-current ` +
        iconstyles[customIconStyle]
      "
      :icon="customIcon"
    />
    <span
      v-if="hasBadge === true"
      class="
        ml-2
        mb-4
        invisible
        lg:visible
        w-5
        h-5
        flex
        leading-5
        justify-center
        rounded-full
        text-sm text-text-white text-bold
      "
      :class="`${badgeColor}`"
      >{{ badgeValue }}</span
    >
  </span>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "./BaseIcon.vue";
type CustomIcon =
  | "storybox"
  | "globe"
  | "info"
  | "delete"
  | "edit"
  | "logout"
  | "user"
  | "newItem"
  | "surprise"
  | "upload";
type ButtonTypes =
  | "primary"
  | "primaryUnavailable"
  | "secondary"
  | "ghost-black"
  | "ghost-purple"
  | "ghost-red"
  | "secondary-round"
  | "cc-round-black"
  | "round-white"
  | "details-black"
  | "storybox-black"
  | "storybox-red"
  | "touchtable-white-round"
  | "touchtable-green-round"
  | "touchtable-purple"
  | "touchtable-black"
  | "square-icon";
const buttonstyles: Record<ButtonTypes, string> = {
  primary: "text-text-white bg-accent-purple rounded-full shadow-lg justify-center py-3",
  primaryUnavailable:
    "text-text-white bg-text-dark opacity-50 rounded-full shadow-lg justify-center py-3 cursor-not-allowed",
  secondary:
    "text-accent-purple bg-text-white rounded-full shadow-lg justify-center py-3",
  "ghost-black": "text-text-dark py-3",
  "ghost-purple": "text-accent-purple py-3",
  "ghost-red": "text-text-red py-3",
  "secondary-round":
    "text-accent-purple bg-text-white rounded-full shadow-lg px-4 py-2",
  "cc-round-black":
    "text-text-black bg-text-white rounded-full shadow-lg stroke-3 px-2 py-2",
  "round-white": "text-text-white px-2 py-2",
  "details-black": "text-text-dark py-4",
  "storybox-black": "text-text-dark p-4",
  "storybox-red": "text-text-red p-3",
  "touchtable-white-round": "text-text-dark p-8 bg-text-white rounded-full",
  "touchtable-green-round": "text-text-white p-8 bg-accent-green rounded-full",
  "touchtable-purple": "text-accent-purple py-4",
  "touchtable-black": "text-text-dark py-4",
  "square-icon": "bg-background-dark p-2",
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
    noMargin: {
      type: Boolean,
      required: false,
      default: false,
    },
    hasBadge: {
      type: Boolean,
      default: false,
    },
    badgeColor: {
      type: String,
      default: "bg-accent-purple",
    },
    badgeValue: {
      type: String,
      default: "",
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
