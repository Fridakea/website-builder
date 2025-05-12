import { ETheme } from "./enum";

export const typeOptions = [
  {
    label: "Restaurant",
    value: "restaurant",
  },
  {
    label: "Café",
    value: "cafe",
  },
  {
    label: "Pizzaria",
    value: "pizzaria",
  },
];

export const themeOptions = [
  {
    label: "Klassisk",
    fontFamily: "Lato",
    backgroundColor: "#FDF3E8",
    secondaryColor: "#D9C0A6",
    actionColor: "#2E4B6C",
    textColor: "#170D02",
    heroTextColor: "#FDF3E8",
    rounding: "var(--radius-xl)",
    theme: ETheme.CLASSIC,
  },
  {
    label: "Elegant",
    fontFamily: "EB Garamond",
    backgroundColor: "#ffffff",
    secondaryColor: "#B6B8C8",
    actionColor: "#3D448F",
    textColor: "#21222C",
    heroTextColor: "#ffffff",
    rounding: "var(--radius-md)",
    theme: ETheme.ELEGANT,
  },
  {
    label: "Farverig",
    fontFamily: "Ubuntu",
    backgroundColor: "#FFE099",
    secondaryColor: "#FF985C",
    actionColor: "#17822E",
    textColor: "#262626",
    heroTextColor: "#262626",
    rounding: "100px 25px 100px 25px",
    theme: ETheme.COLORFUL,
  },
];
