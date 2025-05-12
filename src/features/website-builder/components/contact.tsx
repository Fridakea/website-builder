import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { themeOptions } from "@/features/get-started-flow/data/design-data";
import { ETheme } from "@/features/get-started-flow/data/enum";
import { Mail, Phone, Send } from "lucide-react";

export const Contact = () => {
  const { info, features, theme } = useWebsiteInfoStore();
  const { socialMedia, socialMediaLinks } = features;

  const choosenTheme = themeOptions.find((option) => option.theme === theme);

  if (!choosenTheme) {
    return <p>No theme found</p>;
  }

  return (
    <section className="p-5 sm:p-10 w-full max-w-form mx-auto" style={{ borderRadius: choosenTheme.rounding, backgroundColor: choosenTheme.secondaryColor }}>
      {theme === ETheme.ELEGANT && <Send className="size-5 sm:size-7  my-4 sm:my-5 mx-auto" />}
      <h3 className="text-center mb-5 sm:mb-10">Kontakt os</h3>

      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-row items-end gap-2">
          <div className="flex flex-row items-center gap-2">
            {theme === ETheme.ELEGANT && <Phone className="size-4 sm:size-5 mx-auto" />}
            <h4>Telefon nummer:</h4>
          </div>
          <p>{info.phone}</p>
        </div>
        {info.email && (
          <div className="flex flex-row items-end gap-2">
            <div className="flex flex-row items-center gap-2">
              {theme === ETheme.ELEGANT && <Mail className="size-4 sm:size-5 mx-auto" />}
              <h4>Email:</h4>
            </div>
            <p>{info.email}</p>
          </div>
        )}
      </div>

      {socialMedia && (
        <div className="flex flex-col gap-2">
          <h4>Sociale medier:</h4>
          {socialMediaLinks?.facebook && (
            <a href={socialMediaLinks.facebook} style={{ color: choosenTheme.actionColor }} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          )}
          {socialMediaLinks?.instagram && (
            <a href={socialMediaLinks.instagram} style={{ color: choosenTheme.actionColor }} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
          {socialMediaLinks?.tiktok && (
            <a href={socialMediaLinks.tiktok} style={{ color: choosenTheme.actionColor }} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          )}
        </div>
      )}
      {theme === ETheme.ELEGANT && <Send className="size-5 sm:size-7 my-5 sm:mt-10 sm:mb-7 mx-auto rotate-180" />}
    </section>
  );
};
