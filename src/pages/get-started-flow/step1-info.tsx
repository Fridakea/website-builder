import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValid, z } from "zod";
import { ERoutes } from "@/main";
import { useMultiStepStore } from "@/stores/multi-step-store";
import {
  getLabelForDay,
  useWebsiteInfoStore,
} from "@/stores/website-info-store";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, "Navnet skal minimum være 2 tegn").max(50),
  adress: z.string().min(2, "Adressen skal minimum være 2 tegn").max(100),
  phone: z
    .number()
    .int()
    .refine(
      (num) => num.toString().length >= 8,
      "Telefonnummeret skal være minimum 8 cifre"
    ),
  email: z.string().email("Ugyldig email").optional(),
  openingHours: z.object({
    monday: z.string().optional(),
    tuesday: z.string().optional(),
    wednesday: z.string().optional(),
    thursday: z.string().optional(),
    friday: z.string().optional(),
    saturday: z.string().optional(),
    sunday: z.string().optional(),
  }),
});

type FormData = z.infer<typeof formSchema>;

export const Step1InfoPage = () => {
  const navigate = useNavigate();
  const { increseStep } = useMultiStepStore();
  const { info, setInfo, openingHours, setOpeningHours } =
    useWebsiteInfoStore();

  const formObject = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: info.name,
      adress: info.adress,
      phone: info.phone,
      email: info.email,
      openingHours: openingHours,
    },
  });

  const onSubmit = async (values: FormData) => {
    setInfo({
      name: values.name,
      adress: values.adress,
      phone: values.phone,
      email: values.email,
    });
    setOpeningHours(values.openingHours);

    increseStep();
    navigate(ERoutes.GET_STARTED_THEME);
  };

  return (
    <Form {...formObject}>
      <form onSubmit={formObject.handleSubmit(onSubmit)}>
        <FormField
          control={formObject.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Spisestedets navn</FormLabel>
              <FormControl>
                <Input placeholder="Cafe ..." {...field} />
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
              <FormLabel>Adresse</FormLabel>
              <FormControl>
                <Input placeholder="Vejnavn 123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formObject.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefon nummer</FormLabel>
              <FormControl>
                <Input
                  value={field.value}
                  onInput={(e) => field.onChange(Number(e.currentTarget.value))}
                  type="tel"
                  placeholder="12345678"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formObject.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Cafenavn@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formObject.control}
          name="openingHours"
          render={({ field }) => (
            <>
              {Object.entries(field.value).map(([day, hours]) => (
                <FormItem key={day}>
                  <FormLabel>{getLabelForDay(day)}</FormLabel>
                  <Input
                    {...field}
                    value={hours}
                    onChange={(e) =>
                      field.onChange({ ...field.value, [day]: e.target.value })
                    }
                  />
                  <FormMessage />
                </FormItem>
              ))}
            </>
          )}
        />

        <Button type="button" onClick={() => navigate(-1)}>
          Tilbage
        </Button>
        <Button type="submit" disabled={!isValid}>
          Næste
        </Button>
      </form>
    </Form>
  );
};
