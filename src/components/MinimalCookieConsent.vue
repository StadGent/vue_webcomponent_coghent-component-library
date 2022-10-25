<template>
  <section
    v-if="cookieConsentState.shownCookieManager === 'minimal'"
    class="fixed flex gap-2 bottom-0 w-auto p-4 m-4 rounded-md bg-neutral-0 z-50"
    id="weUseCookiesPopup"
  >
    <div class="w-1/2">
      <h2 class="font-bold">{{ minimalCookieConsentTitle }}</h2>
      <p>{{ minimalCookieConsentDescription }}</p>
    </div>
    <div class="w-1/2 flex justify-evenly items-center font-bold gap-8">
      <div
        class="flex justify-center items-center rounded-md w-full border-2 border-text-black cursor-pointer h-12 hover:bg-neutral-40"
        @click="preferences"
      >
        <p>{{ preferencesText }}</p>
      </div>
      <div
        class="flex justify-center items-center rounded-md w-full cursor-pointer h-12 bg-accent-purple text-background-light hover:opacity-90"
        @click="acceptAllCookies"
      >
        <p>{{ acceptText }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCookieConsent } from "../composables/useCookieConsent";

export default defineComponent({
  name: "MinimalCookieConsent",
  components: {},
  props: {
    minimalCookieConsentTitle: {
      type: String,
      default: "Cookie settings",
    },
    minimalCookieConsentDescription: {
      type: String,
      default:
        "We use cookies and similar technologies to help personalize content and offer a better experience. You can opt to customize them by clicking the preferences button.",
    },
    acceptText: {
      type: String,
      default: "Accept all",
    },
    preferencesText: {
      type: String,
      default: "Preferences",
    },
  },
  emits: ["update:acceptall", "update:preferences"],
  setup(props, { emit }) {
    const {
      closeConsentManager,
      showPreferences,
      acceptAll,
      cookieConsentState,
    } = useCookieConsent();

    const acceptAllCookies = () => {
      acceptAll();
      closeConsentManager();
      emit("update:acceptall");
    };

    const preferences = () => {
      showPreferences();
      emit("update:preferences");
    };

    return { acceptAllCookies, preferences, cookieConsentState };
  },
});
</script>
