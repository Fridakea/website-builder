import { create } from "zustand";

type StepState = {
  step: number;
  increseStep: () => void;
  decreseStep: () => void;
};

type OpeningHours = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
};

type WebsiteInfoState = {
  name: string;
  adress: string;
  phone: number | undefined;
  email: string | undefined;
  setName: (name: string) => void;
  setAdress: (adress: string) => void;
  setPhone: (phone: number | undefined) => void;
  setEmail: (email: string | undefined) => void;

  openingHours: OpeningHours;
  setOpeningHours: (newOpeningHours: OpeningHours) => void;

  type: string;
  setType: (type: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
};

export const useGetStartedStore = create<StepState>((set) => ({
  step: 1,
  increseStep: () => set((state) => ({ step: state.step + 1 })),
  decreseStep: () => set((state) => ({ step: state.step - 1 })),
}));

export const useWebsiteInfoStore = create<WebsiteInfoState>((set) => ({
  name: "",
  adress: "",
  phone: undefined,
  email: undefined,
  setName: (name: string) => set({ name }),
  setAdress: (adress: string) => set({ adress }),
  setPhone: (phone: number | undefined) => set({ phone }),
  setEmail: (email: string | undefined) => set({ email }),

  openingHours: {
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  },
  setOpeningHours: (newOpeningHours: OpeningHours) =>
    set({ openingHours: newOpeningHours }),

  type: "",
  setType: (type: string) => set({ type }),
  theme: "",
  setTheme: (theme: string) => set({ theme }),
}));
