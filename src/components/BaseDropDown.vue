<template>
  <select name="dropdown" id="dropdown" :class="style" v-model="myDropdown">
    <option
      v-for="option in options"
      :key="option"
      :value="option"
      :selected="option === active"
    >
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from "vue";

export default defineComponent({
  props: {
    active: {
      type: Object as PropType<number | string>,
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
      type: Object as PropType<Array<string | number>>,
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
    const myDropdown = ref<number | string>(props.active);

    watch(myDropdown, (option) => {
      emit(`selected`, option);
    });
    const setNumbers = (_max = 10, _step = 1) => {
      const numbers: Array<number> = [];
      numbers.push(_step);
      while (numbers[numbers.length - 1] + _step <= _max) {
        numbers.push(numbers[numbers.length - 1] + _step);
      }
      if (numbers[numbers.length - 1] != _max) numbers.push(_max);
      options.value = numbers;
    };

    onMounted(() => {
      if (props.numberStep || props.numberMax) {
        setNumbers(props.numberMax, props.numberStep);
      }
    });
    return {
      options,
      myDropdown,
    };
  },
});
</script>
