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
    textColor: "#170D02",
    heroTextColor: "#FDF3E8",
    theme: ETheme.CLASSIC,
  },
  {
    label: "Elegant",
    fontFamily: "EB Garamond",
    backgroundColor: "#ffffff",
    textColor: "#21222C",
    heroTextColor: "#ffffff",
    theme: ETheme.ELEGANT,
  },
  {
    label: "Farverig",
    fontFamily: "Ubuntu",
    backgroundColor: "#FFE099",
    textColor: "#262626",
    heroTextColor: "#262626",
    theme: ETheme.COLORFUL,
  },
];
