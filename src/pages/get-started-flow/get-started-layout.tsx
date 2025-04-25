import { Outlet } from "react-router-dom";
import { useMultiStepStore } from "@/stores/multi-step-store";

export const GetStartedLayout = () => {
  const { step } = useMultiStepStore();

  return (
    <div className="flex flex-col items-center justify-center h-svh w-svw">
      <div>
        <h1>Step {step}/5</h1>
        <Outlet />
      </div>
    </div>
  );
};
