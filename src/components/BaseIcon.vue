<template>
  <div v-html="icons[icon]"></div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
type CustomIcon = 'storybox' | 'globe' | 'delete' | 'edit' | 'logout' | 'user' | 'close'
const icons: Record<CustomIcon, String> = {
  storybox: `<svg v-if="icon == 'verhalenbox'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.5.5h11M11.5 6.5v2h-7v-2" />
    <path  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M15.5 3.5H.5v11h15v-11z" />
  </svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
    <path  stroke-linecap="round" stroke-linejoin="round" d="M8.5 16c2.367 0 4.286-3.358 4.286-7.5 0-4.142-1.919-7.5-4.286-7.5-2.367 0-4.286 3.358-4.286 7.5 0 4.142 1.919 7.5 4.286 7.5zM1 8.5h15M8.5 1v15"/>
    <path  stroke-linecap="round" stroke-linejoin="round" d="M8.5 16c4.142 0 7.5-3.358 7.5-7.5C16 4.358 12.642 1 8.5 1 4.358 1 1 4.358 1 8.5 1 12.642 4.358 16 8.5 16z"/>
</svg>`,
  delete: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none" viewBox="0 0 16 17">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2 6v8c0 .53.21 1.04.586 1.414C2.96 15.79 3.47 16 4 16h7c.53 0 1.04-.21 1.414-.586C12.79 15.04 13 14.53 13 14V6M1 4h13M5 4V1h5v3M5 13l5-5M10 13L5 8"/>
</svg>`,
  edit: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 7.5l-4-4M6 15l-5 1 1-5L12 1l4 4L6 15z"/>
</svg>`,
  logout: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M5.5 8.5h10M11.5 4.5l4 4-4 4M8.5 15.5h-7c-.552 0-1-.448-1-1v-12c0-.552.448-1 1-1h7"/>
</svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="none" viewBox="0 0 16 18">
    <path stroke="#F6F5F1" stroke-linecap="round" stroke-linejoin="round" d="M11.182 4.333C11.182 2.493 9.757 1 8 1S4.818 2.492 4.818 4.333v1.334C4.818 7.507 6.243 9 8 9s3.182-1.492 3.182-3.333V4.333zM1 17v-2c-.001-.999.193-1.988.57-2.905.378-.917.931-1.744 1.625-2.428M12.807 9.667c.693.685 1.246 1.511 1.623 2.428.377.918.571 1.906.57 2.905v2"/>
</svg>`,
close: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 3L3 14M3 3l11 11"/>
</svg>
`
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
    return { icons }
  },
})
</script>

<style scoped>
</style>