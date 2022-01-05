<template>
<div class="flex w-max-full overflow-x-scroll pb-10 no-scrollbar">
    <div v-for="(tab, index) in tabNames" :key="index" @click="setSelectedIndex(index)" class="w-auto flex flex-col items-center pr-10 cursor-pointer">
        <h3 :class="selectedIndex == index ? 'font-bold whitespace-nowrap' : 'whitespace-nowrap'">{{tab}}</h3>
        <div v-show="selectedIndex == index" class="w-3 h-3 rounded-full bg-accent-purple"></div>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  props: {
    tabNames: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const selectedIndex = ref<number>(0)

    const setSelectedIndex = (index: number) => {
        selectedIndex.value = index
        console.log(selectedIndex.value)
      }

      return {
          setSelectedIndex,
          selectedIndex
      }
  },
})
</script>

<style>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
