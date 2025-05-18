import { ETheme } from "@/features/get-started-flow/data/enum";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { UtensilsCrossed } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const Menu = () => {
  const { menu } = useWebsiteInfoStore();

  const { theme, setTheme, choosenTheme } = useWebsiteInfoStore();

  const hasPrices = menu.some((category) => category.items.some((item) => item.price));

  if (!choosenTheme) {
    setTheme(ETheme.CLASSIC);
    return <div>No theme found</div>;
  }

  return (
    <section className="w-full max-w-form mx-auto">
      {theme === ETheme.ELEGANT && <UtensilsCrossed className="size-5 sm:size-7  my-4 sm:my-5 mx-auto" />}

      <h3 className="text-center mb-4 sm:mb-5 relative z-10">Menukort</h3>
      {choosenTheme.id === ETheme.COLORFUL && (
        <div
          className="absolute -top-2 left-[50%] -translate-x-[50%] w-2/3 sm:w-1/2 max-w-[400px] h-[90px] sm:h-[120px] opacity-65"
          style={{ background: choosenTheme.secondaryColor, borderRadius: choosenTheme.rounding }}
        />
      )}

      {menu.map((category) => (
        <div key={category.name}>
          <h4 className={twMerge("mt-7 mb-5 sm:mt-10 sm:mb-7 text-center", hasPrices && "text-left")}>{category.name}</h4>

          <ul className="flex flex-col gap-4 sm:gap-5">
            {category.items.map((item) => (
              <li key={item.name} className={twMerge("flex flex-row items-center justify-center", hasPrices && "justify-between")}>
                <p>{item.name}</p>
                {item.price && <p className="text-nowrap">{item.price}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
