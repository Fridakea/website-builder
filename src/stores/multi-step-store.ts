import { create } from "zustand";

type StepState = {
  step: number;
  setStep: (step: number) => void;
  increseStep: () => void;
  decreseStep: () => void;
};

export const useMultiStepStore = create<StepState>((set) => ({
  step: 1,
  setStep: (step: number) => set({ step }),
  increseStep: () => set((state) => ({ step: state.step + 1 })),
  decreseStep: () => set((state) => ({ step: state.step - 1 })),
}));
