import { Outlet } from "react-router-dom";
import { useMultiStepStore } from "@/stores/multi-step-store";
import { ShowStep } from "@/components/ui/custom/show-step";
export const GetStartedLayout = () => {
  const { step } = useMultiStepStore();

  return (
    <div className="w-full max-w-content overflow-x-hidden mx-auto p-4 flex flex-col gap-10 items-center">
      <h1>Hjemmeside bygger</h1>
      <div className="w-[85%] max-w-form mx-auto flex justify-between gap-2 sm:px-10">
        <ShowStep title="Info" value={1} currentValue={step} />
        <ShowStep title="Tema" value={2} currentValue={step} />
        <ShowStep title="Billeder" value={3} currentValue={step} />
        <ShowStep title="Menukort" value={4} currentValue={step} />
        <ShowStep title="Features" value={5} currentValue={step} />
      </div>
      <div className="w-full max-w-form mx-auto p-4 pt-8 sm:p-10 sm:pt-15 bg-background-tint text-foreground-tint rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};
