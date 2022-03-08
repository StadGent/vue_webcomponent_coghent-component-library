<template>
  <transition>
    <aside
      v-show="overlayState === 'show' || overlayState === 'loading'"
      class="bg-background-light z-50 w-screen h-screen relative"
    >
      <slot></slot>
    </aside>
  </transition>
</template>

<script lang="ts">
import { ModalState } from "@/types";
import { defineComponent, PropType, ref, toRefs, watch } from "vue";

type Alignment = "top" | "left" | "right";

export default defineComponent({
  name: "BaseOverlay",
  components: {},
  props: {
    alignment: {
      type: String as PropType<Alignment>,
      default: "top",
      required: false,
    },
    overlayState: {
      type: String as PropType<ModalState>,
      required: true,
      default: "hide",
    },
  },
  setup(props) {
    const { overlayState } = toRefs(props);

    watch(overlayState, (value: ModalState) => {
      if (value == "show" || value == "loading") {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    });
  },
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
}
</style>
