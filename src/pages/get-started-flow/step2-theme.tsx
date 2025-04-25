import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { useWebsiteInfoStore } from "@/stores/website-info-store";
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
import { RadioCard } from "@/components/ui/custom/radio-card";
import {
  themeOptions,
  typeOptions,
} from "@/features/get-started-flow/data/design-data";

const formSchema = z.object({
  type: z.string(),
  theme: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export const Step2ThemePage = () => {
  const navigate = useNavigate();
  const { setType } = useWebsiteInfoStore();

  const formObject = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      theme: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    console.log(values);
    setType(values.type);
    navigate(ERoutes.GET_STARTED_IMAGES);
  };

  return (
    <Form {...formObject}>
      <form onSubmit={formObject.handleSubmit(onSubmit)}>
        <FormField
          control={formObject.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vælg type spisested</FormLabel>
              <FormControl>
                <div className="flex gap-4">
                  {typeOptions.map((option) => (
                    <RadioCard
                      key={option.value}
                      title={option.label}
                      value={option.value}
                      currentValue={field.value}
                      onChange={field.onChange}
                    />
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formObject.control}
          name="theme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vælg tema til hjemmesiden</FormLabel>
              <FormControl>
                <div>
                  {themeOptions.map((option) => (
                    <RadioCard
                      key={option.value}
                      title={option.label}
                      value={option.value}
                      currentValue={field.value}
                      onChange={field.onChange}
                    />
                  ))}
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="button" onClick={() => navigate(-1)}>
          Tilbage
        </Button>
        <Button type="submit">Næste</Button>
      </form>
    </Form>
  );
};
