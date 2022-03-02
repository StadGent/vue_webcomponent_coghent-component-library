<template>
  <div :class="sideStrip ? 'flex flex-row-reverse' : ''">
    <div :class="backgroundColor + ' w-full h-14 flex items-center justify-between overflow-hidden'" v-show="large && !sideStrip">
      <div :class="roundsColor + ' rounded-full w-4 h-4 flex-shrink-0 shadow-inner 2xl:ml-10 lg:ml-6 md:ml-6 sm:ml-4 ml-10'"></div>
      <div :class="roundsColor + ' rounded-full w-9 h-4 flex-shrink-0 shadow-inner 2xl:ml-4 ml-4'"></div>
      <div :class="roundsColor + ' rounded-full w-4 h-4 flex-shrink-0 shadow-inner 2xl:ml-24 sm:ml-16 ml-16 ring-8 ' + ringColor"></div>
      <div :class="roundsColor + ' rounded-full w-9 h-4 flex-shrink-0 shadow-inner 2xl:ml-24 ml-12 sm:ml-16'"></div>
      <div :class="roundsColor + ' rounded-full w-4 h-4 flex-shrink-0 shadow-inner 2xl:ml-4 ml-6'"></div>
      <div :class="roundsColor + ' rounded-full w-9 h-4 flex-shrink-0 shadow-inner 2xl:ml-24 lg:ml-16 md:ml-8 ml-24'"></div>
      <div :class="roundsColor + ' rounded-full w-9 h-4 flex-shrink-0 shadow-inner 2xl:ml-4 ml-4'"></div>
      <div :class="roundsColor + ' rounded-full w-4 h-4 flex-shrink-0 shadow-inner 2xl:ml-4 ml-4'"></div>
      <div :class="roundsColor + ' rounded-full w-9 h-4 flex-shrink-0 shadow-inner 2xl:ml-24 xl:ml-16 ml-24 mr-2'"></div>
    </div>
    <div :class="backgroundColor + ' h-full w-14 flex flex-col items-center justify-between overflow-hidden'" v-show="sideStrip && large">
      <div :class="roundsColor + ' rounded-full w-4 h-4 flex-shrink-0 shadow-inner 2xl:mb-10 lg:mb-6 md:mb-6 sm:mb-4 mb-10 mt-4'"></div>
      <div :class="roundsColor + ' rounded-full w-4 h-9 flex-shrink-0 shadow-inner 2xl:mb-4 mb-4'"></div>
      <div :class="roundsColor + ' rounded-full w-4 h-4 flex-shrink-0 shadow-inner 2xl:mb-24 sm:mb-16 mb-16 ring-8 ' + ringColor"></div>
      <div :class="roundsColor + ' rounded-full w-4 h-9 flex-shrink-0 shadow-inner 2xl:mb-24 mb-12 sm:mb-16'"></div>
      <div :class="roundsColor + ' rounded-full w-4 h-4 flex-shrink-0 shadow-inner 2xl:mb-4 mb-6'"></div>
      <div :class="roundsColor + ' rounded-full w-4 h-9 flex-shrink-0 shadow-inner 2xl:mb-24 lg:mb-16 md:mb-8 mb-24'"></div>
      <div :class="roundsColor + ' rounded-full w-4 h-9 flex-shrink-0 shadow-inner 2xl:mb-4 mb-4'"></div>
      <div :class="roundsColor + ' rounded-full w-4 h-4 flex-shrink-0 shadow-inner 2xl:mb-4 mb-4'"></div>
      <div :class="roundsColor + ' rounded-full w-4 h-9 flex-shrink-0 shadow-inner 2xl:mb-24 xl:mb-16 mb-24'"></div>
    </div>
    <div class="w-10/12 h-auto bg-accent-green" v-show="!large">
      <div class="h-12 items-center flex overflow-hidden">
        <div :class="roundsColor + ' rounded-full w-9 h-4 flex-shrink-0 shadow-inner ml-4'"></div>
        <div :class="roundsColor + ' rounded-full w-4 h-4 flex-shrink-0 shadow-inner 2xl:ml-4 ml-4'"></div>
        <div :class="roundsColor + ' rounded-full w-4 h-4 flex-shrink-0 shadow-inner 2xl:ml-4 lg:ml-10 ml-4'"></div>
        <div :class="roundsColor + ' rounded-full w-4 h-4 flex-shrink-0 shadow-inner 2xl:ml-16 xl:ml-12 md:ml-6 ml-20'"></div>
        <div :class="roundsColor + ' rounded-full w-9 h-4 flex-shrink-0 shadow-inner 2xl:ml-20 xl:ml-16 ml-20'"></div>
        <div :class="roundsColor + ' rounded-full w-9 h-4 flex-shrink-0 shadow-inner 2xl:ml-4 ml-4'"></div>
      </div>
    </div>
    <div
      class="p-5"
      :class="{
        [`bg-accent-green w-10/12`]: !large,
        [`${backgroundColor} w-full`]: large,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    large: {
      type: Boolean,
      required: true,
      default: true,
    },
    reverseColors:{
      type: Boolean,
      required: false,
    },
    sideStrip: {
      type: Boolean,
      required: false,
    },
    backgroundColor: {
      type: String,
      required: false,
    },
    ringColor: {
      type: String,
      required: false,
    },
    roundsColor: {
      type: String,
      required: false,
    }
  },
  setup(props) {
    const bgColor = props.backgroundColor?props.backgroundColor: 'bg-background-medium'
    const ringColor = props.ringColor?props.ringColor: 'ring-accent-green'
    const backgroundColor = !props.reverseColors ? bgColor : 'bg-text-white'
    const roundsColor = props.roundsColor ? props.roundsColor : !props.reverseColors ? 'bg-text-white' : bgColor

    return {
      backgroundColor,
      roundsColor,
      ringColor
    }
  },
});
</script>
<style scoped></style>
