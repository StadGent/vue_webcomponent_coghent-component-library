<template>
  <div class="flex w-full h-full justify-center object-top">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex flex-col items-center"
    >
      <div class="flex flex-row items-center">
        <div :class="getLineStyle(index, true)" class="lineMin h-0.5"></div>
        <div
          :class="getOuterCircleStyle(index)"
          class="rounded-full flex justify-center items-center"
        >
          <div
            :class="getInnerCircleStyle(index)"
            class="rounded-full flex justify-center items-center"
          >
            <base-icon
              v-if="showCheckIcon(index)"
              icon="check"
              class="stroke-current text-text-white m-1"
            />
          </div>
        </div>
        <div :class="getLineStyle(index, false)" class="lineMin h-0.5"></div>
      </div>
      <h3
        v-if="showTitles === true"
        class="
          maxStep
          mt-2
          font-bold
          text-base text-accent-purple
          flex
          text-center
        "
      >
        {{ step }}
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../components/BaseIcon.vue";

const stepStyle = {
  inner: {
    todo: "bg-text-black w-4 h-4",
    done: "bg-accent-purple w-6 h-6",
    inprogress: "bg-text-white w-3 h-3",
  },
  outer: {
    inprogress: "bg-accent-purple w-6 h-6",
  },
  line: {
    todo: "bg-text-black",
    done: "bg-accent-purple",
  },
};

type StepStatus = "todo" | "inProgress" | "done";

export default defineComponent({
  components: {
    BaseIcon,
  },
  props: {
    steps: {
      type: Object as PropType<Array<String>>,
      required: true,
      default: [],
    },
    showTitles: {
      type: Boolean,
      required: false,
      default: true,
    },
    currentStep: {
      type: Number,
      required: true,
      default: 1,
    },
    currentStatus: {
      type: String as PropType<StepStatus>,
      required: true,
      default: "todo",
    },
  },
  setup(props) {
    const getInnerCircleStyle = (_index: number) => {
      const step = _index + 1;
      let style: string = stepStyle.inner.todo;
      if (step === props.currentStep) {
        if (props.currentStatus === "done") {
          style = stepStyle.inner.done;
        } else if (props.currentStatus === "inProgress")
          style = stepStyle.inner.inprogress;
      }
      if (step < props.currentStep) {
        style = stepStyle.inner.done;
      }
      return style;
    };

    const getOuterCircleStyle = (_index: number) => {
      const step = _index + 1;
      let style: string = "invisble";
      step === props.currentStep && props.currentStatus === "inProgress"
        ? (style = stepStyle.outer.inprogress)
        : null;

      return style;
    };

    const getLineStyle = (_index: number, _isLeft: boolean) => {
      const step = _index + 1;
      let style: string = stepStyle.line.todo;
      if (step <= props.currentStep) style = stepStyle.line.done;
      if (step === props.currentStep && props.currentStatus === "todo")
        style = stepStyle.line.todo;

      return style;
    };

    const showCheckIcon = (_index: number) => {
      let show = false;
      const step = _index + 1;
      if (step === props.currentStep && props.currentStatus === "done")
        show = true;
      if (step < props.currentStep) show = true;
      return show;
    };

    return {
      stepStyle,
      getInnerCircleStyle,
      getLineStyle,
      showCheckIcon,
      getOuterCircleStyle,
    };
  },
});
</script>

<style scoped>
.lineMin {
  min-width: 4rem;
}
.maxStep {
  max-width: 9.5rem;
}
</style>
