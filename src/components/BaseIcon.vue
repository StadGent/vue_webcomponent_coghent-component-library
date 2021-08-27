<template>
<div v-html="icons[icon]"></div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
type CustomIcon = 'storybox' | 'globe'
const icons: Record<CustomIcon, String> = {
  storybox: `<svg v-if="icon == 'verhalenbox'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.5.5h11M11.5 6.5v2h-7v-2" />
    <path  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M15.5 3.5H.5v11h15v-11z" />
  </svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
    <path  stroke-linecap="round" stroke-linejoin="round" d="M8.5 16c2.367 0 4.286-3.358 4.286-7.5 0-4.142-1.919-7.5-4.286-7.5-2.367 0-4.286 3.358-4.286 7.5 0 4.142 1.919 7.5 4.286 7.5zM1 8.5h15M8.5 1v15"/>
    <path  stroke-linecap="round" stroke-linejoin="round" d="M8.5 16c4.142 0 7.5-3.358 7.5-7.5C16 4.358 12.642 1 8.5 1 4.358 1 1 4.358 1 8.5 1 12.642 4.358 16 8.5 16z"/>
</svg>`,
}

export default defineComponent({
  props: {
    icon: {
      type: String as PropType<CustomIcon>,
      default: 'storybox',
      required: true,
    },
  },
  setup() {
    return{icons}
  },
})
</script>

<style scoped>
</style>