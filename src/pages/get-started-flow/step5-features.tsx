import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { ERoutes } from "@/main";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useMultiStepStore } from "@/stores/multi-step-store";
import { Input } from "@/components/ui/input";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { SwitchCard } from "@/features/get-started-flow/components/switch-card";

const formSchema = z.object({
  imgGallery: z.boolean(),
  socialMedia: z.boolean(),
  googleMaps: z.boolean(),
  socialMediaLinks: z
    .object({
      facebook: z.string().optional(),
      instagram: z.string().optional(),
      tiktok: z.string().optional(),
    })
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

export const Step5FeaturesPage = () => {
  const navigate = useNavigate();
  const { increseStep, decreseStep } = useMultiStepStore();
  const { imageGallery, features, setFeatures } = useWebsiteInfoStore();

  const formObject = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imgGallery: features.imgGallery,
      socialMedia: features.socialMedia,
      googleMaps: features.googleMaps,
      socialMediaLinks: features.socialMediaLinks,
    },
  });

  const goBack = () => {
    decreseStep();
    navigate(-1);
  };

  const onSubmit = (data: FormData) => {
    setFeatures({
      ...features,
      imgGallery: data.imgGallery,
      socialMedia: data.socialMedia,
      googleMaps: data.googleMaps,
      socialMediaLinks: data.socialMediaLinks,
    });
    increseStep();
    navigate(ERoutes.WEBSITE_BUILDER);
  };

  return (
    <Form {...formObject}>
      <form onSubmit={formObject.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="mb-0">Features</h2>
          <p>Her kan du vælge hvilke features du vil have på din hjemmeside</p>

          <SwitchCard defaultActive={features.imgGallery} title="Billedgalleri" updateStore={(data) => setFeatures({ ...features, imgGallery: data })}>
            {imageGallery.length === 0 && (
              <>
                <p className="text-sm text-destructive py-3">
                  Du har ikke tilføjet nogen billeder til dit galleri. Gå tilbage og tilføj billeder til dit galleri.
                </p>
                <Button className="w-full" variant="outline" type="button" onClick={() => navigate(ERoutes.GET_STARTED_IMAGES)}>
                  Tilføj billeder
                </Button>
              </>
            )}
          </SwitchCard>

          <SwitchCard defaultActive={features.socialMedia} title="Sociale medier" updateStore={(data) => setFeatures({ ...features, socialMedia: data })}>
            <>
              <h6 className="py-3">Indsæt links til din profil på sociale medier</h6>

              <div className="sm:grid-cols-2 grid gap-3">
                <FormField
                  control={formObject.control}
                  name="socialMediaLinks.facebook"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Facebook</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={formObject.control}
                  name="socialMediaLinks.instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={formObject.control}
                  name="socialMediaLinks.tiktok"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>TikTok</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </>
          </SwitchCard>

          <SwitchCard defaultActive={features.googleMaps} title="Google Maps" updateStore={(data) => setFeatures({ ...features, googleMaps: data })} />
        </div>

        <div className="mt-6 mt-10 flex items-center justify-between">
          <Button type="button" variant="outline" onClick={goBack}>
            Tilbage
          </Button>
          <Button type="submit">Færdig</Button>
        </div>
      </form>
    </Form>
  );
};
