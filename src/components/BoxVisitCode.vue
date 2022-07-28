<template>
  <section
    class="flex w-full justify-center align-center text-md md:text-3xl font-bold"
  >
    <div
      v-for="(number, index) in codeNumberArray"
      :key="index"
      class="p-2 md:p-6 number-container mx-1 md:mx-3 flex justify-center items-center rounded-md md:rounded-xl"
    >
      <p>{{ number }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  name: "BoxVisitCode",
  components: {},
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    const codeNumberArray = ref<Array<number>>([]);

    watch(
      () => props.code,
      (code) => {
        if (code) {
          const numberArray = props.code.split("").map((number) => {
            return Number(number);
          });
          codeNumberArray.value = numberArray;
        }
      },
      { immediate: true }
    );

    return {
      codeNumberArray,
    };
  },
});
</script>

<style scoped>
.number-container {
  background-color: #f0ede6;
}
</style>
