<template>
  <div class="grid grid-flow-col-dense auto-cols-fr">
    <strong
      class="col-start-1 w-full inline-block overflow-hidden break-words"
      >{{ keyWord }}</strong
    ><span v-if="type != ''" class="col-start-2 mr-10">{{ type }} </span>
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
  },
  setup() {},
})
</script>
