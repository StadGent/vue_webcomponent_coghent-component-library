<template>
  <div class="absolute w-11/12 bg-text-white z-20 ml-12 mt-7 p-2 shadow-xl flex justify-between h-10">
    <div class="flex items-center">
      <a ref="fullPageRef" class="mr-2 ml-2">
        <base-icon icon="monitor" class="h-4 w-4 stroke-current text-text-black" />
      </a>
      <a ref="zoomInRef" class="mr-2">
        <base-icon icon="zoomIn" class="h-4 w-4 stroke-current text-text-black" />
      </a>
      <a ref="zoomOutRef">
        <base-icon icon="zoomOut" class="h-4 w-4 stroke-current text-text-black" />
      </a>
    </div>
    <a ref="homeRef" class="text-sm mr-2 text-neutral-700">Reset view</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue'
import BaseIcon from './BaseIcon.vue'

export default defineComponent({
  name: 'ViewerToolbar',
  components: {
    BaseIcon,
  },
  props: {
    zoomIn: {
      type: Object as PropType<HTMLDivElement | string | null>,
      default: null,
    },
    zoomOut: {
      type: Object as PropType<HTMLDivElement | string | null>,
      default: null,
    },
    fullPage: {
      type: Object as PropType<HTMLDivElement | string | null>,
      default: null,
    },
    home: {
      type: Object as PropType<HTMLDivElement | string | null>,
      default: null,
    },
  },
  emits: ['update:zoomIn', 'update:zoomOut', 'update:fullPage', 'update:home'],
  setup: (_props, { emit }) => {
    const zoomInRef = ref<HTMLDivElement | undefined>(undefined)
    const zoomOutRef = ref<HTMLDivElement | undefined>(undefined)
    const fullPageRef = ref<HTMLDivElement | undefined>(undefined)
    const homeRef = ref<HTMLDivElement | undefined>(undefined)

    onMounted(() => {
      emit('update:zoomIn', zoomInRef.value)
      emit('update:zoomOut', zoomOutRef.value)
      emit('update:fullPage', fullPageRef.value)
      emit('update:home', homeRef.value)
    })

    return {
      zoomInRef,
      zoomOutRef,
      fullPageRef,
      homeRef,
    }
  },
})
</script>
