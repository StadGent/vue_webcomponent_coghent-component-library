<template>
  <div class="grid grid-flow-col-dense auto-cols-fr">
    <span
      class="col-start-1 w-full inline-block overflow-hidden break-words"
      :class="strongLabel ? 'font-bold' : 'font-medium'"
      >{{ keyWord }}</span
    >
    <span
      v-if="type != ''"
      :class="
        keyWord == 'vervaardiger'
          ? 'col-start-2 mr-10 cursor-pointer'
          : 'col-start-2 mr-10'
      "
      >{{ type }}
    </span>
    <span v-if="type == ''" class="text-text-red col-start-2 mr-10">{{
      errorText
    }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
    },
    keyWord: {
      type: String,
      required: true,
    },
    errorText: {
      type: String,
      required: true,
    },
    strongLabel: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {},
})
</script>
