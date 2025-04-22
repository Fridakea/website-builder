import { create } from 'zustand'

type StepState = {
    step: number;
    increseStep: () => void;
    decreseStep: () => void;
}

export const useGetStartedStore = create<StepState>((set) => ({
    step: 1,
    increseStep: () => set((state) => ({ step: state.step + 1 })),
    decreseStep: () => set((state) => ({ step: state.step - 1 })),
}))

