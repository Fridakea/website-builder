import { useWebsiteInfoStore } from "@/stores/website-info-store";

export const Description = () => {
  const { info } = useWebsiteInfoStore();

  return (
    <section>
      <h2>Om os</h2>
      <p>{info.description}</p>
    </section>
  );
};
