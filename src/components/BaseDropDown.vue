<template>
  <select name="dropdown" id="dropdown" :class="style">
    <option
      v-for="option in options"
      :key="option"
      :value="option"
      @click="setValue(option)"
      :selected="option === active"
    >
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";

export default defineComponent({
  props: {
    active: {
      type: Object as PropType<Number | String>,
      required: true,
    },
    numberMax: {
      type: Number,
      required: false,
    },
    numberStep: {
      type: Number,
      required: false,
    },
    values: {
      type: Object as PropType<Array<String | Number>>,
      default: [],
    },
    style: {
      type: String,
      required: false,
      default: "",
    },
  },
  emits: [`selected`],
  setup(props, { emit }) {
    const options = ref<Array<String | Number>>(props.values);
    const setNumbers = (_max = 10, _step = 1) => {
      const numbers: Array<number> = [];
      numbers.push(_step);
      while (numbers[numbers.length - 1] + _step <= _max) {
        numbers.push(numbers[numbers.length - 1] + _step);
      }
      if (numbers[numbers.length - 1] != _max) numbers.push(_max);
      options.value = numbers;
    };

    const setValue = (_option: number | string) => {
      emit(`selected`, _option);
    };

    onMounted(() => {
      console.log(props);
      if (props.numberStep || props.numberMax) {
        setNumbers(props.numberMax, props.numberStep);
      }
    });
    return {
      setValue,
      options,
    };
  },
});
</script>
