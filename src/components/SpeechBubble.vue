<template>
  <div
    :class="`w-full flex ${
      alignment == 'Left' ? 'justify-start' : 'justify-end'
    }`"
  >
    <div
      :class="
        alignment == 'Left'
          ? `speech half left ${color} rounded-md my-5 w-full md:w-3/4`
          : `speech half right ${color} rounded-md my-5 w-full md:w-3/4`
      "
    >
      <div v-if="alignment == 'Left'" class="flex">
        <div class="w-1/3 p-4 flex justify-center items-center rounded-md">
          <div class="rounded-full bg-neutral-0 w-20 h-20"></div>
        </div>
        <div class="w-2/3 bg-background-light p-4 rounded-r-md">
          <div class="w-full sm:flex sm:justify-between font-bold text-xs">
            <p>{{ cardDetails.name }}</p>
            <p>{{ cardDetails.date }}</p>
          </div>
          <div class="w-full my-2 bottomline">
            <q>{{ cardDetails.content }}</q>
          </div>
        </div>
      </div>
      <div v-else class="flex">
        <div class="w-2/3 bg-background-light p-4 rounded-l-md">
          <div class="w-full sm:flex sm:justify-between font-bold text-xs">
            <p>{{ cardDetails.name }}</p>
            <p>{{ cardDetails.date }}</p>
          </div>
          <div class="w-full my-2 bottomline">
            <q>{{ cardDetails.content }}</q>
          </div>
        </div>
        <div class="w-1/3 p-4 flex justify-center items-center rounded-md">
          <div class="rounded-full bg-neutral-0 w-20 h-20"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import baseIcon from "../components/BaseIcon.vue";

type Alignment = "Left" | "Right";

export type testimonyCard = {
  id: string;
  name: string;
  date: string;
  content: string;
  likes: number;
};

export default defineComponent({
  name: "SpeechBubble",
  components: { baseIcon },
  props: {
    cardDetails: {
      type: Object as PropType<testimonyCard>,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "#02a77f",
    },
    alignment: {
      type: String as PropType<Alignment>,
      required: false,
      default: "Left",
    },
  },
  emits: ["receivedLike"],
  setup(props, { emit }) {
    const root = document.documentElement;
    root.style.setProperty("--bubble-color", props.color);

    const submitLike = () => {
      emit("receivedLike", props.cardDetails);
    };

    return {
      submitLike,
    };
  },
});
</script>

<style scoped>
.speech {
  position: relative;
  background-color: var(--bubble-color);
}

.speech::after {
  content: "";
  border: 20px solid transparent;
  position: absolute;
}

.half.speech.left::after {
  border-left-color: var(--bubble-color);
  bottom: -20px;
  left: 0;
}

.half.speech.right::after {
  border-right-color: var(--bubble-color);
  bottom: -20px;
  right: 0;
}

.bottomline {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
}
</style>
