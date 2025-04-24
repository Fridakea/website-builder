import {
  useGetStartedStore,
  useWebsiteInfoStore,
} from "@/stores/get-started-store";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValid, z } from "zod";
import { ERoutes } from "@/main";

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
  // openingHours: z.object({
  //   monday: z.string().min(0),
  //   tuesday: z.string().min(0),
  //   wednesday: z.string().min(0),
  //   thursday: z.string().min(0),
  //   friday: z.string().min(0),
  //   saturday: z.string().min(0),
  //   sunday: z.string().min(0),
  // }),
});

type FormData = z.infer<typeof formSchema>;

export const Step1InfoPage = () => {
  const navigate = useNavigate();
  const { increseStep } = useGetStartedStore();
  const { setName, setAdress, setPhone, setEmail, setOpeningHours } =
    useWebsiteInfoStore();

  const formObject = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      adress: "",
      phone: undefined,
      email: undefined,
      // openingHours: {
      //   monday: "",
      //   tuesday: "",
      //   wednesday: "",
      //   thursday: "",
      //   friday: "",
      //   saturday: "",
      //   sunday: "",
      // },
    },
  });

  const onSubmit = async (values: FormData) => {
    setName(values.name);
    setAdress(values.adress);
    setPhone(values.phone);
    setEmail(values.email);
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

        <h1>Step 1 Info</h1>
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

const OpeningHours = [
  {
    day: "Mandag",
    hours: "08:00 - 16:00",
  },
  {
    day: "Tirsdag",
    hours: "08:00 - 16:00",
  },
];

const OpeningHours2 = {
  monday: {
    day: "Mandag",
    hours: "08:00 - 16:00",
  },
  tuesday: {
    day: "Tirsdag",
    hours: "08:00 - 16:00",
  },
  wednesday: {
    day: "Onsdag",
    hours: "08:00 - 16:00",
  },
  thursday: {
    day: "Torsdag",
    hours: "08:00 - 16:00",
  },
  friday: {
    day: "Fredag",
    hours: "08:00 - 16:00",
  },
  saturday: {
    day: "Lørdag",
    hours: "08:00 - 16:00",
  },
  sunday: {
    day: "Søndag",
    hours: "08:00 - 16:00",
  },
};
