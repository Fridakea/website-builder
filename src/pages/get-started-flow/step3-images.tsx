import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useMultiStepStore } from "@/stores/multi-step-store";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { EType } from "@/features/get-started-flow/data/enum";
import { ERoutes } from "@/main";
import { imageOptions } from "@/features/get-started-flow/data/image-data";

import { ImageDropzone } from "@/components/image-drop-zone";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { twMerge } from "tailwind-merge";

const formSchema = z.object({
  heroImage: z.object({
    src: z.string().url(),
    alt: z.string(),
  }),
  // imageItems: z.array(
  //   z.object({
  //     src: z.string().url(),
  //     alt: z.string().min(1),
  //     isHero: z.boolean().optional(),
  //   })
  // ),
});

type FormData = z.infer<typeof formSchema>;

export const Step3ImagesPage = () => {
  const navigate = useNavigate();
  const { increseStep, decreseStep } = useMultiStepStore();
  const { type, choosenHeroImage, setType, setChoosenHeroImage } = useWebsiteInfoStore();

  const formObject = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      heroImage: choosenHeroImage,
    },
  });

  const goBack = () => {
    decreseStep();
    navigate(-1);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    setChoosenHeroImage(data.heroImage);
    increseStep();
    navigate(ERoutes.GET_STARTED_MENU);
  };

  if (!type) {
    setType(EType.PIZZARIA);
    return <div>Vælg en type først</div>;
  }
  // if (!theme || !type) return <div>Vælg et tema og en type først</div>;
  return (
    <Form {...formObject}>
      <form onSubmit={formObject.handleSubmit(onSubmit)} className="flex flex-col gap-10 sm:gap-15">
        <h2>Billeder til din hjemmeside</h2>

        <FormField
          control={formObject.control}
          name="heroImage"
          render={({ field }) => (
            <FormItem>
              <fieldset className="border border-muted rounded-md p-4 shadow-sm">
                <legend className="px-4 font-medium text-lg sm:text-xl">Vælg banner billede</legend>
                <ImageDropzone onUpload={() => {}} />

                <div className="mt-4 sm:mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {imageOptions
                    .filter((image) => image.types.includes(type))
                    .map((image) => (
                      <div
                        key={image.data.src}
                        className={twMerge("border border-border", field.value?.src === image.data.src && "border-red-500 border-4")}
                        onClick={() => {
                          const isSelected = image.data.src === field.value?.src;
                          console.log(isSelected);
                          field.onChange(isSelected ? undefined : image.data);
                        }}
                      >
                        <img src={image.data.src} alt={image.data.alt} />
                      </div>
                    ))}
                </div>
              </fieldset>
            </FormItem>
          )}
        />

        <fieldset className="border border-muted rounded-md p-4 shadow-sm">
          <legend className="px-4 font-medium text-lg sm:text-xl">Vælg billeder til galleri</legend>
          <ImageDropzone onUpload={() => {}} />

          <div className="mt-4 sm:mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {imageOptions
              .filter((image) => image.types.includes(type))
              .map((image) => (
                <div key={image.data.src}>
                  <img src={image.data.src} alt={image.data.alt} />
                </div>
              ))}
          </div>
        </fieldset>

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
