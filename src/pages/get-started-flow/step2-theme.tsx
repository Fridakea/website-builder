import { Button } from "@/components/ui/button";
import { ERoutes } from "@/main";
import { useNavigate } from "react-router-dom";

export const Step2ThemePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Step 2 Theme</h1>
      <Button onClick={() => navigate(-1)}>
        Tilbage
      </Button>
      <Button onClick={() => navigate(ERoutes.GET_STARTED_IMAGES)}>
        Næste
      </Button>
    </div>
    );
};

