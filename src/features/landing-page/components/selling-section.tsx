import { twMerge } from "tailwind-merge";
import websiteBuilderImg from "@/assets/images/landing-page/website-builder.png";

const stats = [
  { id: 1, name: "Udfyld din info", value: "1", textColor: "text-foreground" },
  { id: 2, name: "Vælg design", value: "2", textColor: "text-foreground" },
  { id: 3, name: "Vælg billeder", value: "3", textColor: "text-foreground" },
  { id: 4, name: "Indtast menukort", value: "4", textColor: "text-foreground" },
  { id: 5, name: "Vælg indhold", value: "5", textColor: "text-foreground" },
  { id: 6, name: "Nyd resultatet!", value: "6", textColor: "text-primary font-bold" },
];

export const SellingSection = () => {
  return (
    <div className="max-w-content mx-auto relative z-10 rounded-4xl bg-background-tint py-16 px-4 sm:p-20 flex flex-col gap-8 sm:gap-16">
      <div className="flex flex-col-reverse gap-10 sm:flex-row">
        <div className="flex-[1.5] flex flex-col items-center justify-center gap-4 sm:gap-5">
          <h2>Hjemmesider skræddersyet til dit spisested</h2>
          <p>
            Vores hjemmeside bygger er en platform som er lavet til at hjælpe dig med at bygge en hjemmeside til dit spisested. Vi har specialiseret os i at
            bygge hjemmesider til ikke it-fokuserede virksomheder, så vi kan fokusere på det vi gør bedst, og du kan fokusere på det du gør bedst.
          </p>
          <p>Alt du skal gøre at at følge disse steps og så kan du have en hjemmeside der er designet til at være optimal til dit spisested.</p>
        </div>

        <div className="flex-1">
          <img src={websiteBuilderImg} alt="Spisesteder.com's hjemmeside bygger billede vælger" className="rounded-2xl" />
        </div>
      </div>

      <dl className="p-6 sm:p-8 gap-2 bg-card grid grid-cols-2 overflow-hidden rounded-2xl text-center sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <div key={stat.id} className={twMerge("flex flex-col p-2", stat.textColor)}>
            <dt className="text-sm/6 font-semibold text-muted-foreground">{stat.name}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
