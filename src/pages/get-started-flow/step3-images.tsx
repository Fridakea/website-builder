import { Button } from "@/components/ui/button";
import { ERoutes } from "@/main";
import { useNavigate } from "react-router-dom";

export const Step3ImagesPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Step 3 Images</h1>
      <Button onClick={() => navigate(-1)}>
        Tilbage
      </Button>
      <Button onClick={() => navigate(ERoutes.GET_STARTED_MENU)}>
        Næste
      </Button>
    </div>
    );
};

