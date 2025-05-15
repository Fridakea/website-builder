import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { AddMenuItemForm } from "../forms/add-menu-item-form";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

type CreateMenuAccordionProps = {
  accordionClassName?: string;
  categoryClassName?: string;
};

export const CreateMenuAccordion: FC<CreateMenuAccordionProps> = ({ categoryClassName, accordionClassName }) => {
  const { menu, addMenuItem, removeMenuItem, removeMenuCategory } = useWebsiteInfoStore();

  return (
    <Accordion type="single" collapsible className={twMerge(menu.length > 0 ? "p-2 sm:p-4 flex flex-col gap-2" : "", accordionClassName)}>
      {menu.map((category) => (
        <div key={category.name} className="flex flex-row gap-1">
          <AccordionItem className={twMerge("w-full", categoryClassName)} value={category.name}>
            <AccordionTrigger>
              <div className="w-full flex flex-row justify-between items-center">
                <h4>{category.name}</h4>
                <p>{category.items.length} ting</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <AddMenuItemForm onSubmit={(name, price) => addMenuItem(category.name, name, price)} />
              <ul className="px-1 sm:px-3 flex flex-col gap-1">
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
  );
};
