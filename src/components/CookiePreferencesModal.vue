<template>
  <BaseModal
    v-if="cookieConsentState.shownCookieManager === 'preferences'"
    modalState="show"
    id="weUseCookiesPopup"
    @hideModal="closeConsentManager"
  >
    <div class="p-4">
      <section class="flex items-center gap-2 border-b-2 border-neutral-40 p-2">
        <slot name="logo"></slot>
        <h2 class="font-bold">{{ preferenceModalTitle }}</h2>
      </section>
      <section>
        <div v-for="cookie of cookieConsentState.usedCookies" :key="cookie.tag">
          <div class="flex gap-2 p-2">
            <div>
              <input
                v-model="cookieConsentState.userAcceptedCookies"
                type="checkbox"
                :id="cookie.tag"
                :name="cookie.tag"
                :value="cookie.tag"
              />
            </div>
            <div>
              <label :for="cookie.tag" class="font-bold">{{
                cookie.name
              }}</label>
            </div>
          </div>
          <div class="p-2">
            <p>{{ cookie.description }}</p>
          </div>
        </div>
      </section>
      <section class="flex justify-end border-t-2 border-neutral-40 p-2">
        <div
          @click="save"
          class="p-2 bg-accent-purple text-text-white cursor-pointer"
        >
          {{ confirmText }}
        </div>
      </section>
    </div>
  </BaseModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseModal from "./BaseModal.vue";
import { useCookieConsent } from "../composables/useCookieConsent";

export default defineComponent({
  name: "CookiePreferencesModal",
  components: { BaseModal },
  props: {
    preferenceModalTitle: {
      type: String,
      default: "Cookie preferences",
    },
    confirmText: {
      type: String,
      default: "Save",
    },
  },
  setup() {
    const { cookieConsentState, closeConsentManager, savePreferences } =
      useCookieConsent();

    const save = () => {
      savePreferences();
      closeConsentManager();
    };

    return { cookieConsentState, closeConsentManager, savePreferences, save };
  },
});
</script>
