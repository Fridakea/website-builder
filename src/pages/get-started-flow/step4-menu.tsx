import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ERoutes } from "@/main";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Trash } from "lucide-react";
import { useMultiStepStore } from "@/stores/multi-step-store";
const formSchema = z.object({
  menuCategory: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export const Step4MenuPage = () => {
  const navigate = useNavigate();
  const { menu, addMenuCategory, removeMenuCategory, addMenuItem, removeMenuItem } = useWebsiteInfoStore();
  const { increseStep, decreseStep } = useMultiStepStore();
  const [menuItemInputs, setMenuItemInputs] = useState<{ categoryName: string; name: string; price: string }[]>([]);

  const formObject = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      menuCategory: "",
    },
  });

  const addMenuCategoryHandler = () => {
    const newCategory = formObject.getValues("menuCategory");
    addMenuCategory(newCategory);
    setMenuItemInputs([...menuItemInputs, { categoryName: newCategory, name: "", price: "" }]);
    formObject.reset();
  };

  const addMenuItemHandler = (categoryName: string) => {
    addMenuItem(categoryName, menuItemInputs.find((item) => item.categoryName === categoryName)!.name, menuItemInputs.find((item) => item.categoryName === categoryName)!.price);

    // Reset the input fields
    setMenuItemInputs(menu.map((menuCategory) => ({ categoryName: menuCategory.name, name: "", price: "" })));
  };

  const goBack = () => {
    decreseStep();
    navigate(-1);
  };

  const onSubmit = async () => {
    increseStep();
    navigate(ERoutes.GET_STARTED_FEATURES);
  };

  return (
    <Form {...formObject}>
      <form onSubmit={formObject.handleSubmit(onSubmit)}>
        <h2>Menukort</h2>
        <p>Sammensæt dit menukort</p>

        <Accordion type="single" collapsible className="w-full my-6 sm:my-10 border border-border border-dashed rounded-md">
          <div className="p-0.5">
            <FormField
              control={formObject.control}
              name="menuCategory"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Tilføj kategori</Button>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Tilføj kategori</DialogTitle>
                          <DialogDescription hidden>Tilføj en kategori til dit menukort</DialogDescription>
                        </DialogHeader>
                        <Label>Kategori navn</Label>
                        <Input type="text" placeholder="Kategori navn" {...field} />

                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="default" type="button" onClick={addMenuCategoryHandler}>
                              Tilføj
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className={menu.length > 0 ? "p-2 sm:p-4 flex flex-col gap-2" : ""}>
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
                    <div className="flex flex-col sm:flex-row gap-2 mb-2">
                      <Input
                        type="text"
                        placeholder="Ting..."
                        className="bg-muted text-muted-foreground flex-[2]"
                        value={menuItemInputs.find((item) => item.categoryName === category.name)?.name}
                        onChange={(e) => setMenuItemInputs(menuItemInputs.map((item) => (item.categoryName === category.name ? { ...item, name: e.currentTarget.value } : item)))}
                      />
                      <div className="flex flex-row gap-2 flex-1">
                        <Input
                          type="text"
                          placeholder="Pris..."
                          className="bg-muted text-muted-foreground"
                          value={menuItemInputs.find((item) => item.categoryName === category.name)?.price}
                          onChange={(e) =>
                            setMenuItemInputs(menuItemInputs.map((item) => (item.categoryName === category.name ? { ...item, price: e.currentTarget.value } : item)))
                          }
                        />
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => addMenuItemHandler(category.name)}
                          disabled={menuItemInputs.find((item) => item.categoryName === category.name)?.name === ""}
                        >
                          Tilføj
                        </Button>
                      </div>
                    </div>
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
                <Button variant="ghost" className="h-[43.5px] py-1! px-3! flex items-center justify-center" onClick={() => removeMenuCategory(category.name)}>
                  <Trash className="size-4.5 text-inherit" />
                </Button>
              </div>
            ))}
          </div>
        </Accordion>

        <div className="flex flex-row justify-between">
          <Button type="button" variant="outline" onClick={goBack}>
            Tilbage
          </Button>
          <Button type="submit">Næste</Button>
        </div>
      </form>
    </Form>
  );
};
