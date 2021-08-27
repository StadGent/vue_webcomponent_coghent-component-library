<template>
  <span class="flex py-3 px-2 mx-2 font-bold items-center stroke-current cursor-pointer" :class="buttonstyles[customStyle]" @click="onClick()">
    <base-icon v-if="iconShown" class="flex mr-2 stroke-current" icon="storybox" />
    {{ text }}
  </span>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import BaseIcon from './BaseIcon.vue'
type ButtonTypes = 'primary' | 'secundary' | 'ghost-black' | 'ghost-purple'
const buttonstyles: Record<ButtonTypes, String> = {
  primary: 'text-text-white bg-accent-purple rounded-full shadow-lg px-10',
  secundary: 'text-accent-purple bg-text-white rounded-full shadow-lg px-10',
  'ghost-black': 'text-text-dark',
  'ghost-purple': 'text-accent-purple',
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
    customIcon: {
      type: String,
      default: 'storybox',
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
    }
  },
})
</script>
<style scoped>
</style>
