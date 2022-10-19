<template>
  <div
    v-show="modalState === 'small'"
    :class="`fixed right-0 top-0 ${customZIndex ? customZIndex : 'z-40'}`"
  >
    <!-- Advise -->
    <div
      :class="
        'fixed right-0 top-0 rounded-bl-lg bg-neutral-0 shadow-2xl w-full sm:w-1/2 xl:w-1/4 max-w-[450px] overflow-hidden ' +
        customStyles
      "
    >
      <slot name="small"></slot>
    </div>
  </div>
  <div
    v-show="modalState === 'show' || modalState === 'loading'"
    :class="
      modalState === 'small'
        ? `fixed inset-0 m-4 w-64 h-64 ${customZIndex ? customZIndex : 'z-40'}`
        : `fixed inset-0 m-4 ${customZIndex ? customZIndex : 'z-40'}`
    "
  >
    <div
      class="flex items-end justify-center sm:mt-0 text-center sm:block sm:p-0 h-full sm:h-4/5"
    >
      <div
        class="fixed inset-0 bg-neutral-80 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        @click="hideModal"
        v-show="modalState !== 'small' && showCloseButton"
      ></div>
      <span
        class="hidden sm:inline-block sm:align-middle h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        :class="`inline-block align-bottom bg-neutral-0 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:w-11/12 ${
          !large && 'sm:max-w-4xl'
        } ${large && 'h-full'} ${scroll && 'overflow-y-auto'} ${customStyles}`"
      >
        <base-icon
          v-show="showCloseButton"
          class="fixed top-3 right-3 text-text-black stroke-current fill-current stroke-1 cursor-pointer z-40"
          icon="close"
          @click="hideModal"
        />

        <div class="bg-neutral-0 h-full">
          <div class="h-full">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ModalState } from "@/types";
import { defineComponent, PropType, toRefs, watch } from "vue";
import BaseIcon from "./BaseIcon.vue";

export default defineComponent({
  name: "Modal",
  components: { BaseIcon },
  props: {
    modalState: {
      type: String as PropType<ModalState>,
      required: true,
      default: "hide",
    },
    large: {
      type: Boolean,
      required: false,
      default: false,
    },
    scroll: {
      type: Boolean,
      required: false,
      default: false,
    },
    showCloseButton: {
      type: Boolean,
      required: false,
      default: true,
    },
    customStyles: {
      type: String,
      required: false,
      default: "",
    },
    customZIndex: {
      type: String,
      required: false,
    },
  },
  emits: ["update:modalState", "hideModal", "showModal"],
  setup(props, { emit }) {
    const hideModal: () => void = () => {
      emit("update:modalState", "hide");
      emit("hideModal", "hide");
    };

    const { modalState } = toRefs(props);

    watch(modalState, (value: ModalState) => {
      if (value == "show" || value == "loading") {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        hideModal();
      }
    });

    const growModal: () => void = () => {
      emit("showModal", "show");
    };

    return {
      hideModal,
      growModal,
    };
  },
});
</script>

<style scoped>
.h-screen-90 {
  height: 90vh;
}
</style>
