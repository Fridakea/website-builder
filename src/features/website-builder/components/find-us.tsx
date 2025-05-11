import { useIsMobile } from "@/hooks/use-is-mobile";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

export const FindUs = () => {
  const isMobile = useIsMobile();
  const { info } = useWebsiteInfoStore();

  return (
    <section className="w-full max-w-form mx-auto">
      <h3 className="text-center mb-5 sm:mb-10">Find os</h3>
      {info.adress && <p>{info.adress}</p>}
      <iframe
        width="100%"
        height={isMobile ? "300px" : "450px"}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=API_KEY&q=Space+Needle,Seattle+WA/language=da"
      ></iframe>
    </section>
  );
};
