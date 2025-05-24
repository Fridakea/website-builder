import logo from "@/assets/images/logo3.svg";
import { useIsMobile } from "@/hooks/use-is-mobile";

export const FooterSection = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="w-full h-48 bg-background">
      <div className="w-full h-full max-w-content mx-auto px-4 xl:px-0 flex flex-row justify-between items-center">
        <div className="flex flex-row flex-wrap gap-1">
          <p>© 2025 Spisesteder.com.</p>
          <p>All rights reserved.</p>
        </div>

        <div>
          <img src={logo} width={isMobile ? 100 : 150} alt="logo" />
        </div>
      </div>
    </footer>
  );
};
