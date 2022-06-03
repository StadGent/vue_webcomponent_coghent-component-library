<template>
  <div
    :class="
      cardDetails.alignment == 'Left'
        ? `speech half left ${color} rounded-md`
        : `speech half right ${color} rounded-md`
    "
  >
    <div v-if="cardDetails.alignment == 'Left'" class="flex gap-4">
      <div class="w-1/3 p-4 flex justify-center items-center rounded-md">
        <div class="rounded-full bg-neutral-0 w-20 h-20"></div>
      </div>
      <div class="w-2/3 bg-background-light p-4">
        <div class="w-full flex justify-between font-bold text-xs">
          <p>{{ cardDetails.name }}</p>
          <p>{{ cardDetails.date }}</p>
        </div>
        <div class="w-full p-2">
          <q>{{ cardDetails.content }}</q>
        </div>
        <div
          class="w-full flex items-center cursor-pointer"
          @click="submitLike"
        >
          <base-icon icon="thumbsup" />
          <p class="px-2">
            {{ cardDetails.likes }}
          </p>
        </div>
      </div>
    </div>
    <div v-else class="flex">
      <div class="w-2/3 bg-background-light p-4">
        <div class="w-full flex justify-between font-bold text-xs">
          <p>{{ cardDetails.name }}</p>
          <p>{{ cardDetails.date }}</p>
        </div>
        <div class="w-full p-2">
          <q>{{ cardDetails.content }}</q>
        </div>
        <div
          class="w-full flex items-center cursor-pointer"
          @click="submitLike"
        >
          <base-icon icon="thumbsup" />
          <p class="px-2">
            {{ cardDetails.likes }}
          </p>
        </div>
      </div>
      <div class="w-1/3 p-4 flex justify-center items-center rounded-md">
        <div class="rounded-full bg-neutral-0 w-20 h-20"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import baseIcon from "../components/BaseIcon.vue";

type Alignment = "Left" | "Right";

export type TestimoniCard = {
  name: string;
  date: string;
  content: string;
  likes: number;
  alignment: Alignment;
};

export default defineComponent({
  name: "SpeechBubble",
  components: { baseIcon },
  props: {
    cardDetails: {
      type: Object as PropType<TestimoniCard>,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "#02a77f",
    },
  },
  setup(props) {
    const root = document.documentElement;
    root.style.setProperty("--bubble-color", props.color);

    const submitLike = () => {
      props.cardDetails.likes++;
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
</style>
