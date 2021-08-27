<template>
  <div class="flex flex-row items-center">
    <base-icon class="flex stroke-current text-text-dark" icon="globe" />
    <select class="bg-background-light mr-2 flex">
      <option v-for="language in languages" :key="language">{{ language }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseIcon from './BaseIcon.vue'
const languages = {
  nl: 'NL',
  en: 'EN',
}

export default defineComponent({
  name: 'LanguageSelector',
  components: { BaseIcon },
  setup() {
    return {
      languages,
    }
  },
})
</script>

<style scoped>
</style>