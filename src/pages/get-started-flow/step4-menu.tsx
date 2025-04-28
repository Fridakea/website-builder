import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ERoutes } from "@/main";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const formSchema = z.object({
  menuCategory: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export const Step4MenuPage = () => {
  const navigate = useNavigate();
  const { menu, addMenuCategory, removeMenuCategory, addMenuItem, removeMenuItem } = useWebsiteInfoStore();
  const [menuItemInputs, setMenuItemInputs] = useState<{ categoryName: string; value: string }[]>([]);

  const formObject = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      menuCategory: "",
    },
  });

  const addMenuCategoryHandler = () => {
    const newCategory = formObject.getValues("menuCategory");
    addMenuCategory(newCategory);
    setMenuItemInputs([...menuItemInputs, { categoryName: newCategory, value: "" }]);
    formObject.reset();
  };

  const addMenuItemHandler = (categoryName: string) => {
    addMenuItem(categoryName, menuItemInputs.find((item) => item.categoryName === categoryName)?.value ?? "");

    // Reset the input fields
    setMenuItemInputs(menu.map((menuCategory) => ({ categoryName: menuCategory.name, value: "" })));
  };

  const onSubmit = async (values: FormData) => {
    // console.log(values);
    // navigate(ERoutes.GET_STARTED_FEATURES);
  };

  return (
    <Form {...formObject}>
      <form onSubmit={formObject.handleSubmit(onSubmit)}>
        <Accordion type="single" collapsible className="w-[400px]">
          {" "}
          <div>
            <FormField
              control={formObject.control}
              name="menuCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Menu</FormLabel>
                  <FormControl>
                    <Dialog>
                      <DialogTrigger>Tilføj kategori</DialogTrigger>

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
          <hr />
          {menu.map((category) => (
            <div key={category.name} className="flex flex-row justify-between">
              <AccordionItem className="w-full" value={category.name}>
                <AccordionTrigger>
                  <div className="flex flex-row justify-between items-center">
                    <h3>{category.name}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-row gap-2">
                    <Input
                      type="text"
                      placeholder="Tilføj"
                      value={menuItemInputs.find((item) => item.categoryName === category.name)?.value}
                      onChange={(e) => setMenuItemInputs(menuItemInputs.map((item) => (item.categoryName === category.name ? { ...item, value: e.currentTarget.value } : item)))}
                    />
                    <Button type="button" onClick={() => addMenuItemHandler(category.name)}>
                      Tilføj
                    </Button>
                  </div>
                  <ul className="p-2 flex flex-col gap-1">
                    {category.items.map((item) => (
                      <li key={item.name} className="flex flex-row justify-between items-center">
                        <p>{item.name}</p>
                        <Button type="button" onClick={() => removeMenuItem(category.name, item.name)}>
                          X
                        </Button>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Button variant="default" onClick={() => removeMenuCategory(category.name)}>
                X
              </Button>
            </div>
          ))}
        </Accordion>

        {/* <Button type="button" onClick={() => navigate(-1)}>
          Tilbage
        </Button>

        <Button type="submit" >
          Næste
        </Button> */}
      </form>
    </Form>
  );
};
