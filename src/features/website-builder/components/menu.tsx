import { themeOptions } from "@/features/get-started-flow/data/design-data";
import { ETheme } from "@/features/get-started-flow/data/enum";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

export const Menu = () => {
  const { menu } = useWebsiteInfoStore();

  const { theme, setTheme } = useWebsiteInfoStore();

  const choosenTheme = themeOptions.find((option) => option.theme === theme);

  if (!choosenTheme) {
    setTheme(ETheme.CLASSIC);
    return <div>No theme found</div>;
  }

  return (
    <section className="w-full max-w-form mx-auto">
      <h3 className="text-center mb-5 sm:mb-10">Menukort</h3>
      {menu.map((category) => (
        <div key={category.name}>
          <h4 className="my-4 sm:my-5">{category.name}</h4>
          <ul className="flex flex-col gap-4 sm:gap-5">
            {category.items.map((item) => (
              <li key={item.name} className="flex flex-row items-center justify-between">
                <p>{item.name}</p>
                {item.price && <p className="text-nowrap">{item?.price}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
