<template>
  <Modal v-model="isShow" class="w-screen h-screen" :close="closeModal">
    <div class="h-min w-9/12 bg-background-medium">
      <div v-show="showHeader" class="w-auto h-auto float-right pr-5 pt-2 bg-background-medium"><base-button :onClick="closeModal" customStyle="ghost-black" :iconShown="true" customIcon="close" /></div>
      <div class="bg-background-medium"><slot class="z-40"></slot></div>
    </div>
  </Modal>
</template>
<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import BaseButton from './BaseButton.vue'

export default defineComponent({
  components: {
    BaseButton,
  },
  props: {
    isShow: {
      type: Boolean,
      required: true,
      default: false,
    },
    showHeader: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ['update:isShow'],
  setup(props, { emit }) {
    const show = ref<Boolean>(false)
    watch(
      () => props.isShow,
      () => {
        show.value = props.isShow
      }
    )

    const closeModal = () => {
      show.value = false
      emit('update:isShow', false)
    }
    return { show, closeModal }
  },
})
</script>
<style scoped>
</style>