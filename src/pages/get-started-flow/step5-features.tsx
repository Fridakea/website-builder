import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { ERoutes } from "@/main";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  imgGallery: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const Step5FeaturesPage = () => {
  const navigate = useNavigate();

  const formObject = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imgGallery: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate(ERoutes.WEBSITE_BUILDER);
  };

  return (
    <Form {...formObject}>
      <form onSubmit={formObject.handleSubmit(onSubmit)} className="space-y-8">
        <h2 className="mb-0">Features</h2>
        <p>Her kan du vælge hvilke features du vil have på din hjemmeside</p>

        <FormField
          control={formObject.control}
          name="imgGallery"
          render={({ field }) => (
            <FormItem className="flex flex-row-reverse items-center justify-end gap-4 rounded-lg border p-3 shadow-sm">
              <FormLabel>Billedgalleri</FormLabel>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="mt-6 flex items-center justify-between">
          <Button type="button" variant="outline" onClick={() => navigate(-1)}>
            Tilbage
          </Button>
          <Button type="submit">Færdig</Button>
        </div>
      </form>
    </Form>
  );
};
