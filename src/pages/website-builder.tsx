import { Button } from "@/components/ui/button";
import { ERoutes } from "@/main";
import { useNavigate } from "react-router-dom";

export const WebsiteBuilderPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Website Builder</h1>
      <Button onClick={() => navigate(ERoutes.HOME)}>
        Forside
      </Button>
    </div>);
};


