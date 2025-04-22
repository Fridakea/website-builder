import { Button } from "@/components/ui/button";
import { ERoutes } from "@/main";
import { useNavigate } from "react-router-dom";

export const Step5FeaturesPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Step 5 Features</h1>
      <Button onClick={() => navigate(-1)}>
        Tilbage
      </Button>
      <Button onClick={() => navigate(ERoutes.WEBSITE_BUILDER)}>
        Færdig
      </Button>
    </div>
    );
};

