import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { twMerge } from "tailwind-merge";

export const Description = () => {
  const { info } = useWebsiteInfoStore();

  return (
    <section>
      <h2 className="text-center mb-4 sm:mb-5">Om os</h2>
      <p className={twMerge("w-full max-w-form mx-auto", info.description && info.description.length < 150 ? "text-center" : "text-base")}>
        {info.description}
      </p>
    </section>
  );
};
