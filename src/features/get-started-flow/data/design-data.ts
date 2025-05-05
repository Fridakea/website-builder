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
    textColor: "#FDF3E8",
    theme: ETheme.CLASSIC,
  },
  {
    label: "Elegant",
    fontFamily: "EB Garamond",
    textColor: "#ffffff",
    theme: ETheme.ELEGANT,
  },
  {
    label: "Farverig",
    fontFamily: "Ubuntu",
    textColor: "#262626",
    theme: ETheme.COLORFUL,
  },
];
