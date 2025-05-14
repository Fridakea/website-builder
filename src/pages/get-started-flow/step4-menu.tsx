import { useNavigate } from "react-router-dom";
import { ERoutes } from "@/main";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

import { Button } from "@/components/ui/button";
import { useMultiStepStore } from "@/stores/multi-step-store";
import { AddCategoryDialogForm } from "@/features/get-started-flow/forms/add-category-dialog-form";
import { CreateMenuAccordion } from "@/features/get-started-flow/components/create-menu-accordion";

export const Step4MenuPage = () => {
  const navigate = useNavigate();
  const { addMenuCategory } = useWebsiteInfoStore();
  const { increseStep, decreseStep } = useMultiStepStore();

  const goBack = () => {
    decreseStep();
    navigate(-1);
  };

  const handleSubmit = async () => {
    console.log("onSubmit");
    increseStep();
    navigate(ERoutes.GET_STARTED_FEATURES);
  };

  return (
    <section>
      <h2>Menukort</h2>
      <p>Sammensæt dit menukort</p>

      <div className="w-full my-6 sm:my-10 border border-border border-dashed rounded-md">
        <div className="p-0.5">
          <AddCategoryDialogForm onSubmit={(name) => addMenuCategory(name)} />
        </div>

        <CreateMenuAccordion />
      </div>

      <div className="flex flex-row justify-between">
        <Button type="button" variant="outline" onClick={goBack}>
          Tilbage
        </Button>
        <Button onClick={handleSubmit}>Næste</Button>
      </div>
    </section>
  );
};
