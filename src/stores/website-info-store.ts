import { create } from "zustand";

type Info = {
  name: string;
  adress: string;
  phone: number | undefined;
  email: string | undefined;
};

type OpeningHours = {
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
};

type Menu = string[];

type WebsiteInfoState = {
  info: Info;
  setInfo: (info: Info) => void;

  openingHours: OpeningHours;
  setOpeningHours: (newOpeningHours: OpeningHours) => void;

  type: string;
  setType: (type: string) => void;
  theme: string;
  setTheme: (theme: string) => void;

  menu: Menu;
  setMenu: (menu: Menu) => void;
  addMenuCategory: (menuCategory: string) => void;
  removeMenuCategory: (menuCategory: string) => void;
};

export const useWebsiteInfoStore = create<WebsiteInfoState>((set) => ({
  info: {
    name: "",
    adress: "",
    phone: undefined,
    email: undefined,
  },
  setInfo: (info: Info) => set({ info }),

  openingHours: {
    monday: "10:00 - 18:00",
    tuesday: "10:00 - 18:00",
    wednesday: "10:00 - 18:00",
    thursday: "10:00 - 18:00",
    friday: "10:00 - 18:00",
    saturday: "10:00 - 15:00",
    sunday: "Lukket",
  },
  setOpeningHours: (newOpeningHours: OpeningHours) =>
    set({ openingHours: newOpeningHours }),

  type: "",
  setType: (type: string) => set({ type }),
  theme: "",
  setTheme: (theme: string) => set({ theme }),

  menu: [],
  setMenu: (menuCategory: Menu) => set({ menu: menuCategory }),
  addMenuCategory: (menuCategory: string) => set((state) => ({
    menu: [...state.menu, menuCategory],
  })),
  removeMenuCategory: (menuCategory: string) => set((state) => ({
    menu: state.menu.filter((item) => item !== menuCategory),
  })),
}));

export const getLabelForDay = (day: string) => {
  if (day === "monday") return "Mandag";
  if (day === "tuesday") return "Tirsdag";
  if (day === "wednesday") return "Onsdag";
  if (day === "thursday") return "Torsdag";
  if (day === "friday") return "Fredag";
  if (day === "saturday") return "Lørdag";
  if (day === "sunday") return "Søndag";
  return "Dagen blev ikke fundet";
};
