<template>
  <!--Fullscreen modal-->
  <base-modal :showHeader="false" v-model:isShow="openIIIFModal" class="z-50">
    <section class="h-large flex relative w-full">
      <IIIFViewer :imageUrl="source[selectedIndex]" />
    </section>
  </base-modal>
  <!--Carousel -->
  <div class="flex items-center">
    <div class="z-0 mt-24 w-1/4 transform -translate-x-1/4">
      <lazy-load-image
        extraClass="opacity-70"
        :url="source[getPrevImage()]"
        v-if="source.length > 2"
      />
    </div>
    <div class="flex flex-col items-center w-3/4 relative">
      <base-button
        class="w-0 absolute z-20 top-0 left-0 mt-3 ml-3"
        customStyle="secondary-round"
        customIcon="fullscreen"
        :iconShown="true"
        :onClick="openFullscreenModal"
      />
      <copyright-tab
      v-if="selectedImageRightsCategory && copyrightStatement"
        class="absolute top-0 right-0 w-full h-full"
        :infotext="infotext"
        :copyrightCategory="selectedImageRightsCategory"
        :copyrightStatement="copyrightStatement"
        @openingCcmodal="openCCModal"
      />
      <lazy-load-image extraClass="z-10" :url="source[selectedIndex]" />
      <div
        class="
          flex
          items-center
          bg-text-white
          shadow
          w-min
          inline-block
          rounded-full
          p-3
          px-5
          z-20
          -mt-4
        "
        v-show="source.length > 1"
      >
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
          <path
            d="M1 6H16"
            stroke="#B65099"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 1L16 6L11 11"
            stroke="#B65099"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div
          v-for="photo in source"
          :key="photo"
          class="w-2 h-2 rounded-full bg-text-dark mx-1"
          :class="{ [`opacity-40`]: photo !== source[selectedIndex] }"
        ></div>
        <svg
          v-show="source.length > 1"
          class="cursor-pointer flex-shrink-0 ml-2"
          width="16"
          height="16"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="nextImage"
        >
          <path
            d="M1 6H16"
            stroke="#B65099"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 1L16 6L11 11"
            stroke="#B65099"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="z-0 mt-24 w-1/4 transform translate-x-1/4">
      <lazy-load-image
        extraClass="opacity-70"
        :url="source[getNextImage()]"
        v-if="source.length > 1"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, SetupContext, watch } from "vue"
import BaseButton from "./BaseButton.vue"
import BaseModal from "./BaseModal.vue"
import BaseIcon from "./BaseIcon.vue"
import IIIFViewer from "./IIIFViewer.vue"
import CopyrightTab from "./CopyrightTab.vue"
import LazyLoadImage from "./LazyLoadImage.vue"

export default defineComponent({
  props: {
    infotext: {
      type: String,
      required: true,
    },
    source: {
      type: Array,
      required: true,
    },
    mediafiles: {
      type: Array
    }
  },
  components: {
    BaseButton,
    BaseModal,
    IIIFViewer,
    BaseIcon,
    CopyrightTab,
    LazyLoadImage,
  },
  emits: ["openingCcmodal", "currentCarouselPicture"],
  setup(props, { emit }: SetupContext) {
    const selectedIndex = ref<number>(0)
    const nextIndex = ref<number>(0)
    const prevIndex = ref<number>(0)
    const openIIIFModal = ref<boolean>(false)
    const openTab = ref<boolean>(false)
    const localMediaFiles: Array<any> | undefined = props.mediafiles
    const selectedImageRightsCategory = ref<string>()
    const copyrightStatement = ref<String>()

    const getRightsCategory = (metadata: String) => {
      if (metadata && metadata.toLowerCase().includes('in copyright')){
          selectedImageRightsCategory.value = "In Copyright"
        }
        else if (metadata && metadata.toLowerCase().includes('cc')){
          selectedImageRightsCategory.value = "CC"
        }
        else{
          selectedImageRightsCategory.value = "Public Domain"
        }

    }

    if (localMediaFiles){
      copyrightStatement.value = localMediaFiles[selectedIndex.value].metadata[0].value
      getRightsCategory(localMediaFiles[selectedIndex.value].metadata[0].value)
    }

    watch(() => selectedIndex.value ,(index) =>{
      if (localMediaFiles){
        copyrightStatement.value = localMediaFiles[index].metadata[0].value
        if (copyrightStatement.value){
        getRightsCategory(copyrightStatement.value)
        }
        }
      })

    const nextImage = () => {
      selectedIndex.value =
        selectedIndex.value < props.source.length - 1
          ? selectedIndex.value + 1
          : 0
    }

    const prevImage = () => {
      selectedIndex.value =
        selectedIndex.value === 0
          ? props.source.length - 1
          : selectedIndex.value - 1
    }

    const getNextImage = () => {
      return (nextIndex.value =
        selectedIndex.value < props.source.length - 1
          ? selectedIndex.value + 1
          : 0)
    }

    const getPrevImage = () => {
      return (prevIndex.value =
        selectedIndex.value === 0
          ? props.source.length - 1
          : selectedIndex.value - 1)
    }

    const openFullscreenModal = () => {
      openIIIFModal.value = true
    }

    // const toggleCCTab = () => {
    //   openTab.value = !openTab.value
    // }

    const openCCModal = () => {
      emit("openingCcmodal", true)
    }

    return {
      selectedIndex,
      prevImage,
      nextImage,
      getNextImage,
      getPrevImage,
      openFullscreenModal,
      openIIIFModal,
      openTab,
      // toggleCCTab,
      openCCModal,
      selectedImageRightsCategory,
      copyrightStatement
    }
  },
})
</script>
<style scoped></style>
