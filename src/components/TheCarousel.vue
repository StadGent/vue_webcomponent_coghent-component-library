<template>
  <!--Fullscreen modal-->
  <base-modal
    :modalState="openIIIFModal"
    :large="true"
    class="z-50"
    @hide-modal="closeFullscreenModal"
  >
    <section class="h-large flex relative w-full">
      <a
        @click="closeFullscreenModal"
        class="
          right-2
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
          icon="close"
          class="h-5 w-5 ml-0.5 stroke-current fill-current stroke-2"
        />
      </a>

      <IIIFViewer
        v-if="mediafiles[selectedIndex].mediatype.image"
        :canGoFullScreen="isTouch ? false : true"
        :imageUrl="source[selectedIndex].infoJson"
      />

      <VideoPlayer
        class="pb-6"
        v-if="mediafiles[selectedIndex].mediatype.video"
        :mediaFile="mediafiles[selectedIndex]"
      />
      <AudioPlayer
        v-if="
          mediafiles[selectedIndex].mediatype.audio ||
          mediafiles[selectedIndex].filename.includes('.wav' || '.mp3')
        "
        :mediaFile="mediafiles[selectedIndex]"
      />
      <PDFViewer
        v-if="mediafiles[selectedIndex].mediatype.pdf"
        :mediaFile="mediafiles[selectedIndex]"
      />
    </section>
  </base-modal>
  <!--Carousel -->
  <div class="flex items-center">
    <div class="z-0 mt-24 w-1/4 transform -translate-x-1/4">
      <lazy-load-image
        extraClass="opacity-70"
        :url="source[getPrevImage()].imageUrl"
        :fallBackUrl="source[getPrevImage()].fallBackUrl"
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
        class="absolute top-0 right-0 w-full h-full"
        :infotext="infotext"
        :mediafiles="mediafiles"
        :selectedIndex="selectedIndex"
        @openingCcmodal="openCCModal"
        :showMoreInfo="!isTouch"
      />
      <lazy-load-image
        extraClass="z-10"
        :url="source[selectedIndex].imageUrl"
        :fallBackUrl="source[selectedIndex].fallBackUrl"
      />
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
          :class="{
            [`opacity-40`]: photo.imageUrl !== source[selectedIndex].imageUrl,
          }"
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
        :url="source[getNextImage()].imageUrl"
        :fallBackUrl="source[getNextImage()].fallBackUrl"
        v-if="source.length > 1"
      />
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  ref,
  SetupContext,
  watch,
} from "vue";
import BaseButton from "./BaseButton.vue";
import BaseModal from "./BaseModal.vue";
import BaseIcon from "./BaseIcon.vue";
import IIIFViewer from "./IIIFViewer.vue";
import CopyrightTab from "./CopyrightTab.vue";
import LazyLoadImage from "./LazyLoadImage.vue";
import { ImageSource, ModalState } from "@/types";
import VideoPlayer from "./VideoPlayer.vue";
import AudioPlayer from "./AudioPlayer.vue";
import PDFViewer from "./PDFViewer.vue";

export default defineComponent({
  props: {
    infotext: {
      type: String,
      required: true,
    },
    source: {
      type: Array as PropType<ImageSource[]>,
      required: true,
    },
    mediafiles: {
      type: Array,
    },
    isTouch: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  components: {
    BaseButton,
    BaseModal,
    IIIFViewer,
    BaseIcon,
    CopyrightTab,
    LazyLoadImage,
    VideoPlayer,
    AudioPlayer,
    PDFViewer,
  },
  emits: ["openingCcmodal", "currentCarouselPicture"],
  setup(props, { emit }: SetupContext) {
    const selectedIndex = ref<number>(0);
    const nextIndex = ref<number>(0);
    const prevIndex = ref<number>(0);
    const openIIIFModal = ref<ModalState>("hide");
    const openTab = ref<boolean>(false);

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
      openIIIFModal.value = "show";
    };

    const closeFullscreenModal = () => {
      openIIIFModal.value = "hide";
    };

    // const toggleCCTab = () => {
    //   openTab.value = !openTab.value
    // }

    const openCCModal = () => {
      emit("openingCcmodal", true);
    };

    return {
      selectedIndex,
      prevImage,
      nextImage,
      getNextImage,
      getPrevImage,
      openFullscreenModal,
      closeFullscreenModal,
      openIIIFModal,
      openTab,
      // toggleCCTab,
      openCCModal,
    };
  },
});
</script>
<style scoped></style>
