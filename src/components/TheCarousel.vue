<template>
  <!--Fullscreen modal-->
  <base-modal :showHeader="false" v-model:isShow="openModal" class="z-50">
    <section class="h-large flex relative w-full">
      <IIIFViewer :imageUrl="source[selectedIndex]" />
    </section>
  </base-modal>
  <!--Carousel -->
  <div class="flex items-center">
    <div class="z-0 mt-24 w-1/4 transform -translate-x-1/4">
      <img class="opacity-70" :src="source[getPrevImage()]" v-show="source.length > 2" />
    </div>
    <div class="flex flex-col items-center w-3/4 relative">
      <base-button class="w-0 absolute z-20 top-0 left-0 mt-3 ml-3" customStyle="secondary-round" customIcon="fullscreen" :iconShown="true" :onClick="openFullscreenModal" />

      <div class="top-0 right-0 absolute z-30 bg-background-light mt-3 rounded-full mr-3 cursor-pointer">
        <div class="static ">
          <div v-show="openTab" class="flex bg-background-light inline-block rounded-full items-center w-min shadow px-5 z-20 pr-8">
            <base-icon class="flex mr-3 -ml-2 stroke-current text-text-dark py-2 stroke-0" icon="creativeCommonsCC" />
            <base-icon class="flex mr-3 -ml-2 stroke-current text-text-dark py-2 stroke-0" icon="creativeCommonsBY" />
            <base-icon class="flex mr-3 -ml-2 stroke-current text-text-dark py-2 stroke-0" icon="creativeCommonsNC" />
            <base-icon class="flex mr-3 -ml-2 stroke-current text-text-dark py-2 stroke-0" icon="creativeCommonsSA" />
            <div class="border-r-2 h-auto border-background-dark border-opacity-70 mr-2 invisible sm:invisible" />
          </div>
        </div>
        <base-button class="absolute right-0 w-0 z-30" :class="{ [`-mt-10`]: openTab }" customStyle="cc-round-black" customIcon="creativeCommonsCC" :iconShown="true" :onClick="toggleCCTab" />
      </div>

      <img class="z-10" :src="source[selectedIndex]" />
      <div class="flex items-center bg-text-white shadow w-min inline-block rounded-full p-3 px-5 z-20 -mt-4" v-show="source.length > 1">
        <svg
          v-show="source.length > 1"
          class="cursor-pointer transform rotate-180 flex-shrink-0 mr-2"
          width="16"
          height="16"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="prevImage"
        >
          <path d="M1 6H16" stroke="#B65099" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11 1L16 6L11 11" stroke="#B65099" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div v-for="photo in source" :key="photo" class="w-2 h-2 rounded-full bg-text-dark mx-1" :class="{ [`opacity-40`]: photo !== source[selectedIndex] }"></div>
        <svg v-show="source.length > 1" class="cursor-pointer flex-shrink-0 ml-2" width="16" height="16" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" @click="nextImage">
          <path d="M1 6H16" stroke="#B65099" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11 1L16 6L11 11" stroke="#B65099" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="z-0 mt-24 w-1/4 transform translate-x-1/4">
      <img class="opacity-70" :src="source[getNextImage()]" v-show="source.length > 1" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseModal from './BaseModal.vue'
import BaseIcon from './BaseIcon.vue'
import IIIFViewer from './IIIFViewer.vue'

export default defineComponent({
  props: {
    source: {
      type: Array,
      required: true,
    },
  },
  components: { BaseButton, BaseModal, IIIFViewer, BaseIcon },
  setup(props) {
    const selectedIndex = ref<number>(0)
    const nextIndex = ref<number>(0)
    const prevIndex = ref<number>(0)
    const openModal = ref<boolean>(false)
    const openTab = ref<boolean>(false)

    const nextImage = () => {
      selectedIndex.value = selectedIndex.value < props.source.length - 1 ? selectedIndex.value + 1 : 0
    }

    const prevImage = () => {
      selectedIndex.value = selectedIndex.value === 0 ? props.source.length - 1 : selectedIndex.value - 1
    }

    const getNextImage = () => {
      return (nextIndex.value = selectedIndex.value < props.source.length - 1 ? selectedIndex.value + 1 : 0)
    }

    const getPrevImage = () => {
      return (prevIndex.value = selectedIndex.value === 0 ? props.source.length - 1 : selectedIndex.value - 1)
    }

    const openFullscreenModal = () => {
      openModal.value = true
    }

    const toggleCCTab = () => {
      openTab.value = !openTab.value
    }

    return {
      selectedIndex,
      prevImage,
      nextImage,
      getNextImage,
      getPrevImage,
      openFullscreenModal,
      openModal,
      openTab,
      toggleCCTab,
    }
  },
})
</script>
<style scoped></style>
