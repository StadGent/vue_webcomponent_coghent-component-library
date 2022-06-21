<template>
  <!--Fullscreen modal-->
  <media-modal />
  <!--Carousel -->

  <div class="flex items-center">
    <div class="z-0 mt-24 w-1/4 transform -translate-x-1/4">
      <lazy-load-image
        extraClass="opacity-70"
        :url="source[getPrevImage()].imageUrl"
        :fallBackUrl="source[getPrevImage()].fallBackUrl"
        v-if="source.length > 2"
        :noImageUrl="
          source[selectedIndex].mediaType.audio ? audioUrl : noImageUrl
        "
      />
    </div>

    <div class="flex flex-col items-center relative">
      <base-button
        class="w-0 absolute z-20 top-0 left-0 mt-3 ml-3"
        customStyle="secondary-round"
        customIcon="fullscreen"
        :iconShown="true"
        :onClick="openMediaModal"
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
        :noImageUrl="
          source[selectedIndex].mediaType.audio ? audioUrl : noImageUrl
        "
        :onClick="openMediaModal"
      />

      <div
        class="flex items-center bg-text-white shadow w-min inline-block rounded-full p-3 px-5 z-20 -mt-4"
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
          v-show="source.length <= 10"
          :key="photo"
          class="w-2 h-2 rounded-full bg-text-dark mx-1"
          :class="{
            [`opacity-40`]: photo.imageUrl !== source[selectedIndex].imageUrl,
          }"
        ></div>

        <div v-show="source.length > 10">
          {{ `${selectedIndex + 1}/${source.length}` }}
        </div>

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
        :noImageUrl="
          source[selectedIndex].mediaType.audio ? audioUrl : noImageUrl
        "
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
import CopyrightTab from "./CopyrightTab.vue";
import LazyLoadImage from "./LazyLoadImage.vue";
import MediaModal from "./MediaModal.vue";
import { useMediaModal } from "@/composables/useMediaModal";
import { ImageSource, ModalState } from "@/types";
import { useIIIF } from "../composables/useIIIF";

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
    BaseIcon,
    CopyrightTab,
    LazyLoadImage,
    MediaModal,
  },
  emits: ["openingCcmodal", "currentCarouselPicture"],
  setup(props, { emit }: SetupContext) {
    const selectedIndex = ref<number>(0);
    const nextIndex = ref<number>(0);
    const prevIndex = ref<number>(0);
    const openIIIFModal = ref<ModalState>("hide");
    const openTab = ref<boolean>(false);
    const { noImageUrl, audioUrl } = useIIIF("");
    const { setMediaModalImageUrl, setMediaModalFile, openMediaModal } =
      useMediaModal();

    watch(
      () => selectedIndex.value,
      (index) => {
        setMediaModalImageUrl(props.source[index].infoJson);
        if (props.mediafiles) {
          setMediaModalFile(props.mediafiles[index]);
        }
      },
      { immediate: true }
    );

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
      openIIIFModal,
      openTab,
      openMediaModal,
      // toggleCCTab,
      openCCModal,
      noImageUrl,
      audioUrl,
    };
  },
});
</script>

<style scoped></style>
