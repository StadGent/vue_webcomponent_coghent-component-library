<template>
  <div>
    <div class="top-0 right-0 hidden z-30 bg-background-light mt-2 rounded-full mr-3 cursor-pointer absolute lg:block">
      <div class="static">
        <div v-show="openTab" @click="openCCModal" class="flex bg-background-light inline-block rounded-full items-center w-min shadow px-5 z-20 pr-8 divide-x divide-neutral-80">
          <div class="flex">
          <base-icon class="flex mr-3 -ml-2 stroke-current text-text-dark py-2 stroke-0" icon="creativeCommonsCC" />
          <base-icon class="flex mr-3 -ml-2 stroke-current text-text-dark py-2 stroke-0" icon="creativeCommonsBY" />
          <base-icon class="flex mr-3 -ml-2 stroke-current text-text-dark py-2 stroke-0" icon="creativeCommonsNC" />
          <base-icon class="flex mr-3 -ml-2 stroke-current text-text-dark py-2 stroke-0" icon="creativeCommonsSA" />
          </div>
          <!-- <div class="border-r-2 border-solid h-auto border-background-dark border-opacity-70 mr-2 invisible sm:invisible" /> -->
          <p class="text-xxs w-max mr-3 pl-3 text-accent-purple">{{infotext}}</p>
        </div>
      </div>
      <base-button
        class="absolute right-0 w-0 z-30 transform scale-90"
        :class="{ [`-mt-10`]: openTab }"
        customStyle="cc-round-black"
        :customIcon="copyrightCategory == 'In Copyright' ? 'copyrightCategoryRS' : copyrightCategory == 'CC' ? 'copyrightCategoryCC' : 'copyrightCategoryPDM'"
        :iconShown="true"
        :onClick="toggleCCTab"
      />
    </div>

    <div class="top-0 right-0 absolute z-30 bg-background-light mt-2 rounded-full mr-3 cursor-pointer lg:hidden">
      <base-button class="absolute right-0 w-0 z-30 transform scale-90" customStyle="cc-round-black" :customIcon="copyrightCategory == 'In Copyright' ? 'copyrightCategoryRS' : copyrightCategory == 'CC' ? 'copyrightCategoryCC' : 'copyrightCategoryPDM'" :iconShown="true" :onClick="openCCModal" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, SetupContext, watch } from 'vue'
import BaseIcon from './BaseIcon.vue'
import BaseButton from './BaseButton.vue'

export default defineComponent({
  props:{
    infotext:{
      type: String,
      required: true
    },
    copyrightCategory: {
      type: String,
      required: true
    }
  },
  components: {
    BaseIcon,
    BaseButton
  },
  emits: ['openingCcmodal'],
  setup(props, { emit }: SetupContext) {
    const openTab = ref<boolean>(false)

    watch(() => props.copyrightCategory, (category: String) => {
      console.log(category)
    })

    const toggleCCTab = () => {
      openTab.value = !openTab.value
    }

    const openCCModal = () => {
      emit('openingCcmodal', true)
      openTab.value = false;
    }

    return {
      toggleCCTab,
      openTab,
      openCCModal
    }
  },
})
</script>
