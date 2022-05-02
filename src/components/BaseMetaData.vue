<template>
  <div class="grid grid-flow-col-dense auto-cols-fr">
    <span
      class="col-start-1 w-full inline-block overflow-hidden break-word"
      :class="strongLabel ? 'font-bold' : 'font-medium'"
      >{{ keyWord }}</span
    >
    <span
      v-if="type"
      :class="
        clickable
          ? 'col-start-2 mr-10 cursor-pointer underline break-word'
          : 'col-start-2 mr-10 break-word'
      "
      >{{ type }}
    </span>
    <span v-if="!type" class="text-text-red col-start-2 mr-10 break-word">{{
      errorText
    }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

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
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {},
});
</script>

<style>
.break-word {
  word-wrap: break-word;
}
</style>
