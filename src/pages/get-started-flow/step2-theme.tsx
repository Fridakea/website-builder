import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useEffect } from "react";

import { useWebsiteInfoStore } from "@/stores/get-started-store";
import { ERoutes } from "@/main";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { RadioButton } from "@/components/RadioButton";

const typeOptions = [
  {
    label: "Restaurant",
  },
  {
    label: "Cafe",
  },
  {
    label: "Pizzaria",
  },
];

const formSchema = z.object({
  type: z.string().min(1),
  theme: z.string().min(1),
});

type FormData = z.infer<typeof formSchema>;

export const Step2ThemePage = () => {
  const navigate = useNavigate();
  const { setType, setTheme } = useWebsiteInfoStore();
  const formObject = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      theme: "",
    },
  });

  useEffect(() => {
    formObject.watch(() => {
      setType(formObject.getValues().type);
      console.log(formObject.getValues().type);
    });
  }, []);

  const onSubmit = async (values: FormData) => {
    console.log(values);
    navigate(ERoutes.GET_STARTED_IMAGES);
  };

  return (
    <Form {...formObject}>
      <form onSubmit={formObject.handleSubmit(onSubmit)}>
        <FormField
          name="type"
          render={() => (
            <FormItem>
              <FormLabel>Vælg type</FormLabel>

              {typeOptions.map((type, i) => (
                <FormField
                  key={i}
                  control={formObject.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioButton
                          id={i}
                          label={type.label}
                          isChecked={field.value === type.label}
                          onChange={(newValue) => field.onChange(newValue)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </FormItem>
          )}
        />

        <h1>Step 2 Theme</h1>
        <Button type="button" onClick={() => navigate(-1)}>
          Tilbage
        </Button>
        <Button type="submit">Næste</Button>
      </form>
    </Form>
  );
};
