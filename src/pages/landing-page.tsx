import { FooterSection } from "@/features/landing-page/components/footer-section";
import { HeroSection } from "@/features/landing-page/components/hero-section";
import { SellingSection } from "@/features/landing-page/components/selling-section";
import { Testimonial } from "@/features/landing-page/components/testimonial";

export const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <SellingSection />
      <Testimonial />
      <FooterSection />
    </main>
  );
};
