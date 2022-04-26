<template>
  <div class="w-max">
    <div
      class="
        top-1
        right-0
        hidden
        z-30
        bg-neutral-0
        mt-2
        rounded-full
        mr-3
        cursor-pointer
        absolute
        lg:block
      "
    >
      <div class="static w-full">
        <div
          v-show="openTab"
          @click="openCCModal"
          class="
            w-full
            bg-neutral-0
            inline-block
            rounded-md
            items-center
            w-min
            shadow
            p-4
            z-20
            pr-8
            divide-y divide-neutral-80
          "
        >
          <div v-if="copyrightInfo" class="text-xxs">
            <div v-if="copyrightInfo.rights" class="pb-2">
              <h5 class="font-bold">Licentie</h5>
              <p>{{ copyrightInfo.rights }}</p>
            </div>
            <div v-if="copyrightInfo.source" class="pb-2">
              <h5 class="font-bold">Rechtenhouder</h5>
              <p>{{ copyrightInfo.source }}</p>
            </div>
            <div v-if="copyrightInfo.photographer" class="pb-2">
              <h5 class="font-bold">Fotograaf</h5>
              <p>{{ copyrightInfo.photographer }}</p>
            </div>
          </div>
          <!-- <div class="border-r-2 border-solid h-auto border-background-dark border-opacity-70 mr-2 invisible sm:invisible" /> -->
          <p v-if="showMoreInfo" class="text-xxs w-full text-accent-purple">
            {{ infotext }}
          </p>
        </div>
      </div>
      <base-button
        class="absolute flex items-center justify-center right-0 top-0 z-30"
        customStyle="cc-round-black"
        customIcon="info"
        :iconShown="true"
        :onClick="toggleCCTab"
        :noMargin="true"
      />
    </div>

    <div
      class="
        top-0
        right-0
        absolute
        z-30
        mt-2
        mr-3
        bg-neutral-0
        rounded-full
        cursor-pointer
        lg:hidden
      "
    >
      <base-button
        class="absolute flex items-center justify-center right-0 z-30"
        customStyle="cc-round-black"
        customIcon="info"
        :iconShown="true"
        :noMargin="true"
        :onClick="openCCModal"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, SetupContext, watch } from "vue";
import BaseIcon from "./BaseIcon.vue";
import BaseButton from "./BaseButton.vue";

type CopyrightTabInfo = {
  rights: string;
  source: string;
  publicationStatus: string;
};

export default defineComponent({
  props: {
    infotext: {
      type: String,
      required: true,
    },
    mediafiles: {
      type: Array,
    },
    selectedIndex: {
      type: Number,
    },
    showMoreInfo: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  components: {
    BaseIcon,
    BaseButton,
  },
  emits: ["openingCcmodal"],
  setup(props, { emit }: SetupContext) {
    const openTab = ref<boolean>(false);
    const secondaryIcons = ref<string[]>();
    const localMediaFiles: any[] | undefined = props.mediafiles;
    const selectedIndex = ref<number>(props.selectedIndex || 0);
    const copyrightInfo = ref<CopyrightTabInfo>();

    const createObjectFromInfo = (info: any[]): CopyrightTabInfo => {
      const tabInfoObject = {
        rights: info.find((infoItem: any) => infoItem.key == "rights")?.value,
        source: info.find((infoItem: any) => infoItem.key == "source")?.value,
        publicationStatus: info.find(
          (infoItem: any) => infoItem.key == "publication_status"
        )?.value,
        photographer: info.find(
          (infoItem: any) => infoItem.key == "photographer"
        )?.value,
      };
      return tabInfoObject as CopyrightTabInfo;
    };

    watch(
      () => selectedIndex.value,
      (index) => {
        if (localMediaFiles && index != undefined) {
          const infoObject = createObjectFromInfo(
            localMediaFiles[index].metadata
          );
          console.log({ infoObject });
          copyrightInfo.value = infoObject;
        }
      },
      { immediate: true }
    );

    const toggleCCTab = () => {
      openTab.value = !openTab.value;
    };

    const openCCModal = () => {
      emit("openingCcmodal", true);
      openTab.value = false;
    };

    return {
      toggleCCTab,
      openTab,
      openCCModal,
      secondaryIcons,
      copyrightInfo,
    };
  },
});
</script>
