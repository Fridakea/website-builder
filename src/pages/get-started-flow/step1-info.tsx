import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValid, z } from "zod";
import { ERoutes } from "@/main";
import { useMultiStepStore } from "@/stores/multi-step-store";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { OpeningHoursInputs } from "@/features/get-started-flow/forms/opening-hours-inputs";

const formSchema = z.object({
  name: z.string().min(2, "Navnet skal minimum være 2 tegn").max(50),
  adress: z.string().min(2, "Adressen skal minimum være 2 tegn").max(100),
  phone: z
    .number()
    .int()
    .refine((num) => num.toString().length >= 8, "Telefonnummeret skal være minimum 8 cifre"),
  email: z.string().email("Ugyldig email").optional(),
});

type FormData = z.infer<typeof formSchema>;

export const Step1InfoPage = () => {
  const navigate = useNavigate();
  const { setStep, increseStep, decreseStep } = useMultiStepStore();
  const { info, setInfo, openingHours } = useWebsiteInfoStore();

  const formObject = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: info.name,
      adress: info.adress,
      phone: info.phone,
      email: info.email,
    },
  });

  useEffect(() => {
    setStep(1);
  }, []);

  const goBack = () => {
    decreseStep();
    navigate(-1);
  };

  const onSubmit = async (values: FormData) => {
    setInfo({
      name: values.name,
      adress: values.adress,
      phone: values.phone,
      email: values.email,
    });

    console.log("openingHours: ", openingHours);
    increseStep();
    navigate(ERoutes.GET_STARTED_THEME);
  };

  return (
    <Form {...formObject}>
      <form onSubmit={formObject.handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:gap-5">
        <h2>Information</h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 *:flex-1">
          <FormField
            control={formObject.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Spisestedets navn*</FormLabel>
                <FormControl>
                  <Input placeholder="Cafe..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={formObject.control}
            name="adress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse*</FormLabel>
                <FormControl>
                  <Input placeholder="Vej..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <div className="flex-1">
            <FormField
              control={formObject.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon nummer*</FormLabel>
                  <FormControl>
                    <Input value={field.value} onInput={(e) => field.onChange(Number(e.currentTarget.value))} type="tel" placeholder="12..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex-[2]">
            <FormField
              control={formObject.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Cafe..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <h2 className="mt-4 sm:mt-10">Åbningstider</h2>
        <OpeningHoursInputs />

        <div className="flex flex-row justify-between">
          <Button type="button" variant="outline" onClick={goBack}>
            Tilbage
          </Button>
          <Button type="submit" disabled={!isValid}>
            Næste
          </Button>
        </div>
      </form>
    </Form>
  );
};
