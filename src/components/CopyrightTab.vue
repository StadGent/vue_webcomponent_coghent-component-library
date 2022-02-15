<template>
  <div>
    <div class="top-0 right-0 hidden z-30 bg-neutral-0 mt-2 rounded-full mr-3 cursor-pointer absolute lg:block">
      <div class="static">
        <div v-show="openTab" @click="openCCModal" class="flex bg-neutral-0 inline-block rounded-full items-center w-min shadow px-5 z-20 pr-8 divide-x divide-neutral-80">
          <div class="flex">
          <base-icon v-for="icon in secondaryIcons" v-bind:key="icon" class="flex mr-3 -ml-2 stroke-current text-text-dark py-2 stroke-0" :icon="icon" />
          </div>
          <!-- <div class="border-r-2 border-solid h-auto border-background-dark border-opacity-70 mr-2 invisible sm:invisible" /> -->
          <p class="text-xxs w-max mr-3 pl-3 text-accent-purple">{{infotext}}</p>
        </div>
      </div>
      <base-button
        class="absolute right-0 w-0 z-30 transform scale-90"
        :class="{ [`-mt-10`]: openTab }"
        customStyle="cc-round-black"
        :customIcon="customIcon"
        :iconShown="true"
        :onClick="toggleCCTab"
      />
    </div>

    <div class="top-0 right-0 absolute z-30 bg-neutral-0 mt-2 rounded-full mr-3 cursor-pointer lg:hidden">
      <base-button class="absolute right-0 w-0 z-30 transform scale-90" customStyle="cc-round-black" :customIcon="customIcon" :iconShown="true" :onClick="openCCModal" />
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
    mediafiles: {
      type: Array
    },
    selectedIndex: {
      type: Number
    },
  },
  components: {
    BaseIcon,
    BaseButton
  },
  emits: ['openingCcmodal'],
  setup(props, { emit }: SetupContext) {
    const openTab = ref<boolean>(false)
    const customIcon = ref<string>()
    const secondaryIcons = ref<string[]>()
    const localMediaFiles: any[] | undefined = props.mediafiles
    const selectedIndex = ref<number>(props.selectedIndex||0)
    let selectedImageRightsCategory = ref<string>()
    let copyrightStatement = ref<string>()

    const getRightsCategory = (metadata: string) => {
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

    if (localMediaFiles && selectedIndex && localMediaFiles[selectedIndex.value]){
      copyrightStatement.value = localMediaFiles[selectedIndex.value].metadata[0].value
      getRightsCategory(localMediaFiles[selectedIndex.value].metadata[0].value)
    }

    watch(() => props.selectedIndex ,(index) =>{
      if (localMediaFiles && index){
        copyrightStatement.value = localMediaFiles[index].metadata[0].value
        if (copyrightStatement.value){
        getRightsCategory(copyrightStatement.value)
        }
        }
      })

    const getCustomIconBasedOnCopyrightCategory = (category: string) => {
      const icon = category == 'In Copyright' ? 'copyrightCategoryRS' : category == 'CC' ? 'copyrightCategoryCC' : 'copyrightCategoryPDM'
      return icon
    }

    const getSecondaryCopyrightIcons = () => {
      const iconArray: string[] = []
      switch (copyrightStatement.value){
        case 'CC0':
           iconArray.push('copyrightCategoryCC', 'copyrightCategoryZero')
           break
        case 'CC BY-NC':
           iconArray.push('copyrightCategoryCC', 'copyrightCategoryBY', 'copyrightCategoryNC')
        case'CC-BY-NC-ND 4.0':
          iconArray.push('copyrightCategoryCC', 'copyrightCategoryBY', 'copyrightCategoryNC', 'copyrightCategoryND')
          break
        case'In Copyright':
          iconArray.push('copyrightCategoryIC')
          break
        case'In Copyright -  unknown rightsholder':
          iconArray.push('copyrightCategoryICUR')
          break
        case'In Copyright - non-commercial use permitted':
          iconArray.push('copyrightCategoryICNC')
          break
        case 'Public Domain Mark 1.0':
          iconArray.push('copyrightCategoryPDM')
          break
        default:
          break
      }
      return iconArray
    }

    if (selectedImageRightsCategory.value){
    customIcon.value = getCustomIconBasedOnCopyrightCategory(selectedImageRightsCategory.value)
    secondaryIcons.value = getSecondaryCopyrightIcons()
    }

     watch(() => selectedImageRightsCategory.value, (category) => {
       if (category){
         customIcon.value = getCustomIconBasedOnCopyrightCategory(category)
       }
    })

    watch(() => copyrightStatement.value, () => {
      secondaryIcons.value = getSecondaryCopyrightIcons()
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
      openCCModal,
      customIcon,
      secondaryIcons
    }
  },
})
</script>
