import { Button } from "@/components/ui/button";
import { ERoutes } from "@/main";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Landing Page</h1>
      <Button onClick={() => navigate(ERoutes.GET_STARTED)}>
        Start
      </Button>
      <Button onClick={() => navigate(ERoutes.WEBSITE_BUILDER)}>
        Rediger
      </Button>
    </div>);
};


