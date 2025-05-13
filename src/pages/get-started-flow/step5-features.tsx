import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { ERoutes } from "@/main";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useMultiStepStore } from "@/stores/multi-step-store";
import { Input } from "@/components/ui/input";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { SwitchCard } from "@/features/get-started-flow/components/switch-card";
import { useEffect, useState } from "react";

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
  const [isImageGalleryActive, setIsImageGalleryActive] = useState(features.imgGallery);

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
      <form onSubmit={formObject.handleSubmit(onSubmit)} className="space-y-8">
        <h2 className="mb-0">Features</h2>
        <p>Her kan du vælge hvilke features du vil have på din hjemmeside</p>

        <div className="flex flex-col gap-4 rounded-lg border p-3 shadow-sm">
          <FormField
            control={formObject.control}
            name="imgGallery"
            render={({ field }) => (
              <FormItem className="flex flex-row-reverse items-center justify-end gap-4">
                <FormLabel>Billedgalleri</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={(value) => {
                      field.onChange(value);
                      setIsImageGalleryActive(value);
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {imageGallery.length === 0 && isImageGalleryActive && (
            <>
              <p className="text-sm text-destructive">Du har ikke tilføjet nogen billeder til dit galleri. Gå tilbage og tilføj billeder til dit galleri.</p>
              <Button variant="outline" type="button" onClick={() => navigate(ERoutes.GET_STARTED_IMAGES)}>
                Tilføj billeder
              </Button>
            </>
          )}
        </div>

        <div className="rounded-lg border p-3 shadow-sm flex flex-col gap-4">
          <FormField
            control={formObject.control}
            name="socialMedia"
            render={({ field }) => (
              <FormItem className="flex flex-row-reverse items-center justify-end gap-4">
                <FormLabel>Sociale medier</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          {formObject.watch("socialMedia") && (
            <>
              <h6>Indsæt links til din profil på sociale medier</h6>

              <div className="sm:grid-cols-2 grid gap-4">
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
          )}
        </div>

        <div className="flex flex-col gap-4 rounded-lg border p-3 shadow-sm">
          <FormField
            control={formObject.control}
            name="googleMaps"
            render={({ field }) => (
              <FormItem className="flex flex-row-reverse items-center justify-end gap-4">
                <FormLabel>Google Maps</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Button type="button" variant="outline" onClick={goBack}>
            Tilbage
          </Button>
          <Button type="submit">Færdig</Button>
        </div>
      </form>
    </Form>
  );
};
