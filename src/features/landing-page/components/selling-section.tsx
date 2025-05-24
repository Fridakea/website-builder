import colorfulLogo from "@/assets/images/themes/colorful.png";

export const SellingSection = () => {
  return (
    <div className="max-w-content rounded-4xl mx-auto bg-background-tint p-10 sm:p-20">
      <div className="flex sm:flex-row">
        <div>
          <h2>Hjemmesider skræddersyet til dit spisested</h2>
          <p>
            Vores hjemmeside bygger er en platform som er lavet til at hjælpe dig med at bygge en hjemmeside til dit spisested. Vi har specialiseret os i at
            bygge hjemmesider til ikke it-fokuserede virksomheder, så vi kan fokusere på det vi gør bedst, og du kan fokusere på det du gør bedst.
          </p>
        </div>

        <div>
          <img src={colorfulLogo} alt="colorful" />
        </div>
      </div>
    </div>
  );
};
