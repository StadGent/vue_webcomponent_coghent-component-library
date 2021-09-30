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
      <img
        class="opacity-70"
        :src="replaceStringStorageApi(source[getPrevImage()])"
        v-show="source.length > 2"
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
      <img class="z-10" :src=" replaceStringStorageApi(source[selectedIndex])" />
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
      <img
        class="opacity-70"
        :src="replaceStringStorageApi(source[getNextImage()])"
        v-show="source.length > 1"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "./BaseButton.vue";
import BaseModal from "./BaseModal.vue";
import IIIFViewer from "./IIIFViewer.vue";

const key = "ywZWVMg3eFuhuS804wD6PuGBKyWsrXQF-bee2SJtqmw";

export default defineComponent({
  props: {
    source: {
      type: Array,
      required: true,
    },
  },
  components: { BaseButton, BaseModal, IIIFViewer },
  setup(props) {
    const selectedIndex = ref<number>(0);
    const nextIndex = ref<number>(0);
    const prevIndex = ref<number>(0);
    const openModal = ref<Boolean>(false);

    const nextImage = () => {
      selectedIndex.value =
        selectedIndex.value < props.source.length - 1
          ? selectedIndex.value + 1
          : 0;
    };

    const prevImage = () => {
      selectedIndex.value =
        selectedIndex.value === 0
          ? props.source.length - 1
          : selectedIndex.value - 1;
    };

    const getNextImage = () => {
      return (nextIndex.value =
        selectedIndex.value < props.source.length - 1
          ? selectedIndex.value + 1
          : 0);
    };

    const getPrevImage = () => {
      return (prevIndex.value =
        selectedIndex.value === 0
          ? props.source.length - 1
          : selectedIndex.value - 1);
    };

    const openFullscreenModal = () => {
      openModal.value = true;
    };

    const replaceStringStorageApi = (input: string) => {
      return input.replace("storage-api", "localhost");
    };

    return {
      selectedIndex,
      prevImage,
      nextImage,
      getNextImage,
      getPrevImage,
      openFullscreenModal,
      openModal,
      replaceStringStorageApi
    };
  },
});
</script>
<style scoped></style>
