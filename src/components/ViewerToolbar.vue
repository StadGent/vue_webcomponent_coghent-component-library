<template>
  <a
    v-if="canGoFullScreen"
    ref="fullPageRef"
    class="
      left-2
      top-2
      absolute
      bg-neutral-0
      cursor-pointer
      hover:bg-accent-yellow
      ml-2
      mr-2
      p-2
      rounded-full
      shadow-xl
      text-accent-purple
      z-50
      hover:text-neutral-0
    "
  >
    <base-icon
      icon="monitor"
      class="h-5 w-5 stroke-current fill-current stroke-2"
    />
  </a>
  <a
    ref="zoomInRef"
    class="
      left-2
      top-second
      absolute
      bg-neutral-0
      cursor-pointer
      hover:bg-accent-yellow
      ml-2
      mr-2
      p-2
      rounded-full
      shadow-xl
      text-accent-purple
      z-50
      hover:text-neutral-0
    "
  >
    <base-icon
      icon="zoomIn"
      class="h-5 w-5 stroke-current fill-current stroke-1"
    />
  </a>
  <a
    ref="zoomOutRef"
    class="
      left-2
      top-third
      absolute
      bg-neutral-0
      cursor-pointer
      hover:bg-accent-yellow
      ml-2
      mr-2
      p-2
      rounded-full
      shadow-xl
      text-accent-purple
      z-50
      hover:text-neutral-0
    "
  >
    <base-icon
      icon="zoomOut"
      class="h-5 w-5 stroke-current fill-current stroke-2"
    />
  </a>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from "vue";
import BaseIcon from "./BaseIcon.vue";

export default defineComponent({
  name: "ViewerToolbar",
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
    canGoFullScreen: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: ["update:zoomIn", "update:zoomOut", "update:fullPage", "update:home"],
  setup: (_props, { emit }) => {
    const zoomInRef = ref<HTMLDivElement | undefined>(undefined);
    const zoomOutRef = ref<HTMLDivElement | undefined>(undefined);
    const fullPageRef = ref<HTMLDivElement | undefined>(undefined);
    const homeRef = ref<HTMLDivElement | undefined>(undefined);

    console.log(_props.canGoFullScreen);

    onMounted(() => {
      emit("update:zoomIn", zoomInRef.value);
      emit("update:zoomOut", zoomOutRef.value);
      emit("update:fullPage", fullPageRef.value);
      emit("update:home", homeRef.value);
    });

    return {
      zoomInRef,
      zoomOutRef,
      fullPageRef,
      homeRef,
    };
  },
});
</script>
<style lang="style" scoped>
a.absolute{
  position: absolute!important;
}
.top-second{
  top: 52px;
}
.top-third{
  top: 96px;
}
</style>
