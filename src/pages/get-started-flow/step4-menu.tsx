import { useNavigate } from "react-router-dom";
import { ERoutes } from "@/main";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Trash } from "lucide-react";
import { useMultiStepStore } from "@/stores/multi-step-store";
import { AddCategoryDialogForm } from "@/features/get-started-flow/forms/add-category-dialog-form";
import { AddMenuItemForm } from "@/features/get-started-flow/forms/add-menu-item-form";

export const Step4MenuPage = () => {
  const navigate = useNavigate();
  const { menu, addMenuCategory, removeMenuCategory, addMenuItem, removeMenuItem } = useWebsiteInfoStore();
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

        <Accordion type="single" collapsible className={menu.length > 0 ? "p-2 sm:p-4 flex flex-col gap-2" : ""}>
          {menu.map((category) => (
            <div key={category.name} className="flex flex-row gap-1">
              <AccordionItem className="w-full" value={category.name}>
                <AccordionTrigger>
                  <div className="w-full flex flex-row justify-between items-center">
                    <h4>{category.name}</h4>
                    <p>{category.items.length} ting</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <AddMenuItemForm onSubmit={(name, price) => addMenuItem(category.name, name, price)} />
                  <ul className="px-3 flex flex-col gap-1">
                    {category.items.map((item) => (
                      <li key={item.name} className="flex flex-row justify-between items-center">
                        <p>{item.name}</p>
                        <div className="flex flex-row gap-1 items-center">
                          <p>{item.price}</p>
                          <Button type="button" variant="ghost" onClick={() => removeMenuItem(category.name, item.name)}>
                            <Trash className="size-4.5 text-inherit" />
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Button
                variant="ghost"
                type="button"
                className="h-[43.5px] py-1! px-3! flex items-center justify-center"
                onClick={() => {
                  console.log("removeMenuCategory", category.name);
                  removeMenuCategory(category.name);
                }}
              >
                <Trash className="size-4.5 text-inherit" />
              </Button>
            </div>
          ))}
        </Accordion>
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
