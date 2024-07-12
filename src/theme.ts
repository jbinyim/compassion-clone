import { css } from "styled-components";

const colors = {
  nero: "#fff",
  capeCod: "#3d3e3f",
  jaggedIce: "#bbdde6",
  endeavour: "#005eb8",
  blackSqueeze: "#eaf4f7",
  black: "#000",
  red: "#ff0000",
  gallery: "#eeeeee",
  mineShaft: "#3a3a3a",
  abbey: "#4c4e51",
  doveGray: "#707070",
  gray: "#8d8d8d",
  woodsmoke: "#161718",
  sherpaBlue: "#ff5050",
  slateGray: "#768692",
  blackSqueeze2: "#ddeef2",
  regalBlue: "#003f77",
  glacier: "#71b2c9",
  green: "#ffd100",
  casabianca: "#f7c54b",
  geyser: "#d9e1e2",
  lochmara: "#0086bf",
  downriver: "#092a48",
  alto: "#e0e0e0",
  thunderbird: "#c3141e",
  merino: "#f8f3ea",
  aquaHaze: "#f2f5f8",
  athensGray: "#f1f4f6",
  gallery2: "#f0f0f0",
  iceberg: "#d8ecf1",
  blackSqueeze3: "#f4f7fb",
  funBlue: "#205eac",
};

const fontSize = {};

const mediaSize = {
  xs: "screen and (max-width: 320px)",
  s: "screen and (max-width: 375px)",
  m: "screen and (max-width: 500px)",
  l: "screen and (max-width: 768px)",
  xl: "screen and (max-width: 1024px)",
  xxl: "screen and (max-width: 1440px)",
};

const theme = {
  colors,
  fontSize,
  mediaSize,
};

export default theme;

export type Theme = typeof theme;
