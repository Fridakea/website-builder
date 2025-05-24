import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ERoutes } from "@/main";
import { twMerge } from "tailwind-merge";
import website1 from "@/assets/images/landing-page/website-mobile.png";
import website2 from "@/assets/images/landing-page/website-pc.png";
import website3 from "@/assets/images/landing-page/website-pc2.png";

const gridImageStyling = "w-full rounded-lg object-cover shadow-lg";
const gridImageDivStyling = "pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-muted";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative isolate">
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-background [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      >
        <defs>
          <pattern x="50%" y={-1} id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width={200} height={200} patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-card">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
        </svg>
        <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div aria-hidden="true" className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-65">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[40deg] bg-gradient-to-tr from-[#F7855F] to-[#FCC9C5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div aria-hidden="true" className="absolute left-2/5 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#F79F5F] to-[#FCDCC5] opacity-50"
        />
      </div>

      <div className="overflow-hidden max-w-content mx-auto px-4 pt-28 sm:pt-32 pb-20 lg:pb-32 xl:px-0 gap-x-14 lg:flex lg:items-center">
        <div className="flex-1 relative w-full lg:max-w-xl lg:shrink-0">
          <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl text-left">Lav din hjemmeside på 15 minutter!</h1>
          <p className="mt-4 sm:mt-5 text-pretty text-lg font-medium text-muted-foreground sm:max-w-md sm:text-xl/8 lg:max-w-none">
            Lav en professionel hjemmeside hurtigt og nemt, så du kan bruge din tid på din virksomhed!
          </p>
          <div className="mt-4 sm:mt-5 flex items-center gap-x-6">
            <Button size="lg" onClick={() => navigate(ERoutes.GET_STARTED)}>
              Prøv nu
            </Button>
          </div>
        </div>

        <div className="flex-[1.2] mt-10 flex justify-end gap-2 sm:gap-6 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 *:flex-shrink">
          <div className="ml-auto w-44 flex-none space-y-2 sm:space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
            <div className="relative">
              <img alt="Hjemmeside" src={website1} className={twMerge(gridImageStyling, "aspect-[1/2]")} />
              <div className={gridImageDivStyling} />
            </div>
          </div>
          <div className="mr-auto w-52 flex-none space-y-2 sm:space-y-6 sm:mr-0 sm:pt-52 lg:pt-36">
            <div className="relative">
              <img alt="Hjemmeside" src={website2} className={twMerge(gridImageStyling, "aspect-[3/2]")} />
              <div className={gridImageDivStyling} />
            </div>
            <div className="relative">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                className={twMerge(gridImageStyling, "aspect-[2/3]")}
              />
              <div className={gridImageDivStyling} />
            </div>
          </div>
          <div className="w-48 flex-none space-y-2 sm:space-y-6 pt-32 sm:pt-0">
            <div className="relative">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                className={twMerge(gridImageStyling, "aspect-[2/3]")}
              />
              <div className={gridImageDivStyling} />
            </div>
            <div className="relative">
              <img alt="Hjemmeside" src={website3} className={twMerge(gridImageStyling, "aspect-[3/2]")} />
              <div className={gridImageDivStyling} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
