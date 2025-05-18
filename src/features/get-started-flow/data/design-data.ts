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

export type ThemeOption = {
  id: ETheme;
  label: string;
  fontFamily: string;
  backgroundColor: string;
  secondaryColor: string;
  actionColor: string;
  textColor: string;
  heroTextColor: string;
  rounding: string;
};

export const themeOptions: ThemeOption[] = [
  {
    id: ETheme.CLASSIC,
    label: "Klassisk",
    fontFamily: "Lato",
    backgroundColor: "#FDF3E8",
    secondaryColor: "#D9C0A6",
    actionColor: "#2E4B6C",
    textColor: "#170D02",
    heroTextColor: "#FDF3E8",
    rounding: "var(--radius-xl)",
  },
  {
    id: ETheme.ELEGANT,
    label: "Elegant",
    fontFamily: "EB Garamond",
    backgroundColor: "#ffffff",
    secondaryColor: "#B6B8C8",
    actionColor: "#3D448F",
    textColor: "#21222C",
    heroTextColor: "#ffffff",
    rounding: "var(--radius-md)",
  },
  {
    id: ETheme.COLORFUL,
    label: "Farverig",
    fontFamily: "Ubuntu",
    backgroundColor: "#FFE099",
    secondaryColor: "#FF985C",
    actionColor: "#136C4D",
    textColor: "#262626",
    heroTextColor: "#262626",
    rounding: "100px 25px 100px 25px",
  },
];
