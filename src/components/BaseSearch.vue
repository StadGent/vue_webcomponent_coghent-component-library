<template>
  <label
    class="
      flex
      block
      my-2
      text-center text-text-dark
      py-2
      shadow-lg
      pl-2
      pr-8
      w-full
      min-w-48
      text-neutral-700 text-xl
      focus:outline-none
      rounded-full
      bg-text-white
    "
  >
    <span
      v-if="label"
      class="
        ml-1
        px-4
        items-center
        font-bold
        text-sm
        rounded-full
        bg-accent-purple
        text-text-white
        hidden
        sm:flex
      "
      >{{ label }}</span
    >
    <input
      v-model="inputValue"
      v-bind="$attrs"
      type="text"
      class="w-full text-center"
    />
    <a
      @click="onClick"
      class="
        flex
        items-center
        pt-2
        pb-2
        cursor-pointer
        hover:text-accent-purple
        search-button
        justify-center
      "
    >
      <svg
        v-if="!loading"
        class="mr-2 stroke-current float-right sm:float-none"
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
          stroke="#2D242A"
          stroke-miterlimit="12"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.0002 15L11.2422 11.242"
          stroke="#2D242A"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p v-if="!loading" class="hidden sm:flex">{{ searchLabel }}</p>
      <svg
        v-if="loading"
        class="animate-spin -ml-1 mr-3 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </a>
  </label>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import { debounce } from "ts-debounce"

export default defineComponent({
  name: "SearchField",
  inheritAttrs: false,
  props: {
    label: { type: String },
    searchLabel: { type: String },
    modelValue: { type: String, default: "" },
    debounce: { type: Boolean, default: false },
    debounceWait: { type: Number, default: 400 },
    loading: { type: Boolean, default: false },
  },
  emits: ["update:modelValue", "onClick"],
  setup(props, { emit }) {
    const inputValue = ref<string>(props.modelValue)
    let emitValue = (value: string) => emit("update:modelValue", value)
    if (props.debounce) {
      emitValue = debounce(emitValue, props.debounceWait)
    }

    const onClick = () => {
      emit("onClick")
    }

    watch(
      () => props.modelValue,
      (value) => {
        inputValue.value = value
      }
    )

    watch(inputValue, emitValue)
    return { inputValue, onClick }
  },
})
</script>

<style scoped>
.search-button {
  min-width: 10rem;
}
</style>
