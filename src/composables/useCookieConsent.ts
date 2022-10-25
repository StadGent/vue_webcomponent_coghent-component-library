import { ref, watch } from "vue";
import { getCookie, setCookie } from "tiny-cookie";

type UsedCookie = { tag: string; name: string; description: string };

type CookieConsentState = {
  usedCookies: UsedCookie[];
  userAcceptedCookies: string[];
  shownCookieManager: "minimal" | "preferences" | "none";
};

const cookieConsentState = ref<CookieConsentState>({
  usedCookies: [],
  userAcceptedCookies: [],
  shownCookieManager: "minimal",
});

export const useCookieConsent = () => {
  const showPreferences = () => {
    const cookie = getCookie("_cookiePreferences");
    if (cookie) {
      cookieConsentState.value.userAcceptedCookies = JSON.parse(cookie);
    } else {
      cookieConsentState.value.userAcceptedCookies =
        cookieConsentState.value.usedCookies.map(
          (cookie: UsedCookie) => cookie.tag
        );
    }
    cookieConsentState.value.shownCookieManager = "preferences";
  };

  const showMinimal = () => {
    cookieConsentState.value.shownCookieManager = "minimal";
  };

  const closeConsentManager = () => {
    cookieConsentState.value.shownCookieManager = "none";
  };

  const setUsedCookies = (cookieList: UsedCookie[]) => {
    cookieConsentState.value.usedCookies = cookieList;
  };

  const setUserAcceptedCookies = (acceptedCookies: string[]) => {
    cookieConsentState.value.userAcceptedCookies = acceptedCookies;
  };

  const acceptAll = () => {
    cookieConsentState.value.userAcceptedCookies =
      cookieConsentState.value.usedCookies.map(
        (cookie: UsedCookie) => cookie.tag
      );
    savePreferences();
  };

  const savePreferences = () => {
    setCookie(
      "_cookiePreferences",
      JSON.stringify(cookieConsentState.value.userAcceptedCookies),
      { expires: "6M" }
    );
  };

  return {
    showPreferences,
    showMinimal,
    closeConsentManager,
    setUsedCookies,
    acceptAll,
    savePreferences,
    setUserAcceptedCookies,
    cookieConsentState,
  };
};
