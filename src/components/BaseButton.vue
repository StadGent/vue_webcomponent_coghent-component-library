<template>
  <span class="flex max-h-12 font-bold items-center stroke-current cursor-pointer" :class="buttonstyles[customStyle]" @click="onClick()">
    <base-icon v-if="iconShown" class="flex mr-3 -ml-2 stroke-current" :class="iconstyles[customIconStyle]" :icon="customIcon" />
    {{ text }}
  </span>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import BaseIcon from './BaseIcon.vue'
type CustomIcon = 'storybox' | 'globe' | 'delete' | 'edit' | 'logout' | 'user'
type ButtonTypes = 'primary' | 'secondary' | 'ghost-black' | 'ghost-purple' | 'ghost-red' | 'secondary-round'
const buttonstyles: Record<ButtonTypes, String> = {
  primary: 'text-text-white bg-accent-purple rounded-full shadow-lg px-10 py-3',
  secondary: 'text-accent-purple bg-text-white rounded-full shadow-lg px-10 py-3',
  'ghost-black': 'text-text-dark py-3',
  'ghost-purple': 'text-accent-purple py-3',
  'ghost-red': 'text-text-red py-3',
  'secondary-round' : 'text-accent-purple bg-text-white rounded-full shadow-lg px-4 py-2',
}
type iconTypes = 'sm' | 'default'
const iconstyles: Record<iconTypes, String> = {
  sm: 'w-3 h-3',
  default : ''
}

export default defineComponent({
  components: { BaseIcon },
  props: {
    text: { type: String, required: false },
    onClick: {
      type: Function,
      required: true,
    },
    customStyle: {
      type: String as PropType<ButtonTypes>,
      default: 'primary',
    },
    customIconStyle: {
      type: String as PropType<iconTypes>,
        default: 'default'
    },
    customIcon: {
      type: String as PropType<CustomIcon>,
      default: 'user',
    },
    iconShown: {
      type: Boolean,
      required: true,
    },
  },
  emits: [],
  setup: (props, { emit }) => {
    return {
      buttonstyles,
      iconstyles
    }
  },
})
</script>
<style scoped>
</style>
