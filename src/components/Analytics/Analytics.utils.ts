// FOR REFERENCE - https://developers.google.com/analytics/devguides/collection/analyticsjs/user-opt-out
import {
  setCookies,
  checkCookies,
  getCookie,
  removeCookies,
} from "cookies-next";
import type { OptionsType } from "cookies-next/lib/types";

// 0:reject    1:accept
type SelectionType = "0" | "1";
const cookieAcceptanceName = "collaction-cookie-acceptance";
const cookieAcceptanceOptions: OptionsType = {
  maxAge: 365 * 24 * 60 * 60,
};

export const GA_TRACKING_ID = "G-8DEJX1KVE0";

// accept/reject cookies
export function makeCookieSelection(selection: SelectionType) {
  setCookies(cookieAcceptanceName, selection, cookieAcceptanceOptions);
}

// checks if the user has made their cookie selection
export function checkCookieSelection() {
  return checkCookies(cookieAcceptanceName);
}

// returns the user's cookie selection
export function getCookieSelection() {
  // check if the user has made their choice
  if (!checkCookieSelection()) return false;
  // get their choice
  const cookieValue = getCookie(cookieAcceptanceName);
  // return true/false depending on the value 1/0
  return cookieValue === "1";
}

// user wants to revoke theit previous acceptance
export function revokeAcceptedCookies() {
  // change acceptance to rejected
  makeCookieSelection("0");
  // remove google analytic cookies if they are there
  removeCookies("_ga");
  removeCookies("_gat");
  removeCookies("_gid");
}
