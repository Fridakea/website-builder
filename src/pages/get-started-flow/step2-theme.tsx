import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { isValid, z } from "zod";

import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { ERoutes } from "@/main";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { RadioCard } from "@/components/ui/custom/radio-card";
import { themeOptions, typeOptions } from "@/features/get-started-flow/data/design-data";
import { ThemeCard } from "@/features/get-started-flow/components/theme-card";
import { useMultiStepStore } from "@/stores/multi-step-store";
import { EType, ETheme } from "@/features/get-started-flow/data/enum";

const formSchema = z.object({
  type: z.nativeEnum(EType),
  theme: z.nativeEnum(ETheme),
});

type FormData = z.infer<typeof formSchema>;

export const Step2ThemePage = () => {
  const navigate = useNavigate();
  const { info, type, theme, setType, setTheme } = useWebsiteInfoStore();
  const { increseStep, decreseStep } = useMultiStepStore();

  const formObject = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: type || undefined,
      theme: theme || undefined,
    },
  });

  const goBack = () => {
    decreseStep();
    navigate(-1);
  };

  const onSubmit = async (values: FormData) => {
    console.log(values);
    setType(values.type);
    setTheme(values.theme);
    increseStep();
    navigate(ERoutes.GET_STARTED_IMAGES);
  };

  return (
    <Form {...formObject}>
      <form onSubmit={formObject.handleSubmit(onSubmit)}>
        <h2>Type spisested</h2>
        <FormField
          control={formObject.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vælg hvilken type spisested passer bedst til dig</FormLabel>
              <FormControl>
                <div className="flex gap-2 sm:gap-4">
                  {typeOptions.map((option) => (
                    <RadioCard key={option.value} title={option.label} value={option.value} currentValue={field.value || type} onChange={field.onChange} />
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <h2 className="mt-4 sm:mt-10">Tema</h2>
        <FormField
          control={formObject.control}
          name="theme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vælg et tema til din hjemmeside</FormLabel>
              <FormControl>
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {themeOptions.map((option) => (
                    <ThemeCard
                      key={option.theme}
                      title={option.label}
                      theme={option.theme}
                      name={info.name || "Dit spisested"}
                      fontFamily={option.fontFamily}
                      textColor={option.textColor}
                      currentValue={field.value || theme}
                      onChange={field.onChange}
                    />
                    // <RadioCard key={option.value} title={option.label} value={option.value} currentValue={field.value} onChange={field.onChange} />
                  ))}
                </div>
              </FormControl>
            </FormItem>
          )}
        />

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
