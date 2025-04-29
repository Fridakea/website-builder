import { Outlet } from "react-router-dom";
import { useMultiStepStore } from "@/stores/multi-step-store";

export const GetStartedLayout = () => {
  const { step } = useMultiStepStore();

  return (
    <div className="w-full max-w-content overflow-x-hidden mx-auto bg-red-500 p-4">
      <h1>Hjemmeside bygger</h1>
      <h2>Step {step}/5</h2>
      <div className="w-full max-w-form mx-auto p-4 pt-8 sm:p-10 sm:pt-15 bg-background-tint text-foreground-tint rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};
