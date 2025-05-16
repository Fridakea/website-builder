import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { twMerge } from "tailwind-merge";

export const Description = () => {
  const { info } = useWebsiteInfoStore();

  return (
    <section>
      <h2 className="text-center mb-4 sm:mb-5">Om os</h2>
      <p className={twMerge(info.description && info.description.length > 100 ? "max-w-form mx-auto text-lg" : "max-w-form mx-auto text-base")}>
        {info.description}
      </p>
    </section>
  );
};
