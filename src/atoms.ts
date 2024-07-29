import { atom } from "recoil";

export const headerToggleBtn = atom({
  key: "menuToggle",
  default: false,
});

export const headerMHover = atom({
  key: "mouseHover",
  default: false,
});

export const filterState = atom({
  key: "filterState",
  default: {
    sex: "all",
    age: 0,
    live: "all",
    birth: "",
    what: "",
  },
});

export const modalId = atom({
  key: "modalId",
  default: "0",
});
