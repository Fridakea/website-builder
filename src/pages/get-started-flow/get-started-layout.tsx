import { Outlet } from "react-router-dom";
import { useGetStartedStore } from "@/stores/get-started-store";

export const GetStartedLayout = () => {
  const { step } = useGetStartedStore();

  return (
    <div className="flex flex-col items-center justify-center h-svh w-svw">
      <div>
        <h1>Step {step}/5</h1>
        <Outlet />
      </div>
    </div>
  );
};
