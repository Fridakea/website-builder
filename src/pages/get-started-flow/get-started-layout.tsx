import { Outlet } from "react-router-dom";
import { useMultiStepStore } from "@/stores/multi-step-store";
import { ProgressStep } from "@/features/get-started-flow/components/progress-step";

export const GetStartedLayout = () => {
  const { step } = useMultiStepStore();

  return (
    <div className="w-full max-w-content overflow-x-hidden mx-auto p-4 flex flex-col gap-10 items-center">
      <h1>Hjemmeside bygger</h1>
      <div className="w-[85%] max-w-form mx-auto flex justify-between gap-2 sm:px-10">
        <ProgressStep title="Info" value={1} currentValue={step} />
        <ProgressStep title="Tema" value={2} currentValue={step} />
        <ProgressStep title="Billeder" value={3} currentValue={step} />
        <ProgressStep title="Menukort" value={4} currentValue={step} />
        <ProgressStep title="Features" value={5} currentValue={step} />
      </div>
      <div className="w-full max-w-form mx-auto p-4 pt-8 sm:p-10 sm:pt-15 bg-background-tint text-foreground-tint rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};
