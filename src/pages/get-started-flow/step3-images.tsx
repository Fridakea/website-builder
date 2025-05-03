import { ImageDropzone } from "@/components/image-drop-zone";
import { Button } from "@/components/ui/button";
import { ERoutes } from "@/main";
import { useNavigate } from "react-router-dom";
import { useMultiStepStore } from "@/stores/multi-step-store";

export const Step3ImagesPage = () => {
  const navigate = useNavigate();
  const { increseStep, decreseStep } = useMultiStepStore();

  const goBack = () => {
    decreseStep();
    navigate(-1);
  };

  const onSubmit = () => {
    increseStep();
    navigate(ERoutes.GET_STARTED_MENU);
  };

  return (
    <div>
      <h1>Step 3 Images</h1>
      <ImageDropzone onUpload={() => {}} />
      <div className="flex flex-row justify-between">
        <Button type="button" variant="outline" onClick={goBack}>
          Tilbage
        </Button>
        <Button onClick={onSubmit}>Næste</Button>
      </div>
    </div>
  );
};
