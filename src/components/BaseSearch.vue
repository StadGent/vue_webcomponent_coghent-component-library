<template>
  <label class="flex block my-2 text-center text-text-dark py-2 shadow-lg pl-2 pr-8 w-full min-w-48 text-neutral-700 text-xl focus:outline-none rounded-full bg-text-white">
    <span v-if="label" class="ml-1 px-4 flex items-center font-bold text-sm rounded-full bg-accent-purple text-text-white">{{ label }}</span>
    <input v-model="inputValue" v-bind="$attrs" type="text" class="w-full text-center" />
    <a @click="onClick" class="flex items-center pt-2 pb-2 cursor-pointer hover:text-accent-purple">
      <svg class="mr-2 stroke-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
          stroke="#2D242A"
          stroke-miterlimit="12"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M15.0002 15L11.2422 11.242" stroke="#2D242A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      Zoeken
    </a>
  </label>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { debounce } from 'ts-debounce'

export default defineComponent({
  name: 'SearchField',
  inheritAttrs: false,
  props: {
    label: { type: String },
    modelValue: { type: String, default: '' },
    debounce: { type: Boolean, default: false },
    debounceWait: { type: Number, default: 400 },
  },
  emits: ['update:modelValue', 'onClick'],
  setup(props, { emit }) {
    const inputValue = ref<string>(props.modelValue)
    let emitValue = (value: string) => emit('update:modelValue', value)
    if (props.debounce) {
      emitValue = debounce(emitValue, props.debounceWait)
    }

    const onClick = () => {
      console.log('onclick')
      emit('onClick')
    }

    watch(inputValue, emitValue)
    return { inputValue, onClick }
  },
})
</script>
