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
const formSchema = z.object({
  menuCategory: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export const Step4MenuPage = () => {
  const navigate = useNavigate();
  const { menu, addMenuCategory, removeMenuCategory, addMenuItem } = useWebsiteInfoStore();
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

  const onSubmit = async (values: FormData) => {
    // console.log(values);
    // navigate(ERoutes.GET_STARTED_FEATURES);
  };

  return (
    <Form {...formObject}>
      <form onSubmit={formObject.handleSubmit(onSubmit)}>
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
                          <Button type="button" onClick={addMenuCategoryHandler}>
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
          <div key={category.name} className="border border-gray-300 rounded-md p-2 flex flex-col">
            <div className="flex flex-row justify-between">
              <h3>{category.name}</h3>
              <Button onClick={() => removeMenuCategory(category.name)}>X</Button>
            </div>
            <hr className="my-2" />
            <div>
              <Input
                type="text"
                placeholder="Tilføj"
                value={menuItemInputs.find((item) => item.categoryName === category.name)?.value}
                onChange={(e) => setMenuItemInputs(menuItemInputs.map((item) => (item.categoryName === category.name ? { ...item, value: e.currentTarget.value } : item)))}
              />
              <Button type="button" onClick={() => addMenuItem(category.name, menuItemInputs.find((item) => item.categoryName === category.name)?.value ?? "")}>
                Tilføj
              </Button>
            </div>
            <ul>
              {category.items.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>
        ))}

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
