<template>
  <Modal v-model="show" :close="closeModal">
    <div class="modal w-auto h-auto bg-background-medium">
        <div class="w-auto h-auto float-right pr-5 pt-2"><base-button :onClick="closeModal" customStyle="ghost-black" :iconShown="true" customIcon="close" /></div>
        <div class="p-10 bg-background-medium"><slot></slot></div>
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
  setup(props) {
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
    }
    return { show, closeModal }
  },
})
</script>
<style scoped>
</style>