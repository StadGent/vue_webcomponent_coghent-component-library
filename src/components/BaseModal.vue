<template>
  <Modal v-model="isShow" :close="closeModal">
    <div class="h-auto w-9/12 bg-background-dark">
        <div class="w-auto h-auto float-right pr-5 pt-2 bg-background-dark"><base-button :onClick="closeModal" customStyle="ghost-black" :iconShown="true" customIcon="close" /></div>
        <div class="bg-background-dark"><slot></slot></div>
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
      default: false
    },
  },
  emits: ['update:isShow'],
  setup(props, { emit }) {
    const show = ref<Boolean>(false)
    watch(
      () => props.isShow,
      () => {
        show.value = props.isShow
        console.log('modal exe', show.value)
        
      }
    )

    const closeModal = () => {
      show.value = false
      console.log('Closed', show.value)
      emit('update:isShow', false)
    }
    return { show, closeModal }
  },
})
</script>
<style scoped>
</style>