import { atom } from "recoil";

export const headerToggleBtn = atom({
  key: "menuToggle",
  default: false,
});

export const headerMHover = atom({
  key: "mouseHover",
  default: false,
});
