import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./style/index.css";
import "./style/specifics.css";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { Layout } from "./pages/layout.tsx";
import { LandingPage } from "./pages/landing-page.tsx";
import { GetStartedLayout } from "./pages/get-started-flow/get-started-layout.tsx";
import { Step1InfoPage } from "./pages/get-started-flow/step1-info.tsx";
import { Step2ThemePage } from "./pages/get-started-flow/step2-theme.tsx";
import { Step3ImagesPage } from "./pages/get-started-flow/step3-images.tsx";
import { Step4MenuPage } from "./pages/get-started-flow/step4-menu.tsx";
import { Step5FeaturesPage } from "./pages/get-started-flow/step5-features.tsx";
import { WebsiteBuilderPage } from "./pages/website-builder.tsx";

export enum ERoutes {
  HOME = "/",
  WEBSITE_BUILDER = "/website-builder",

  GET_STARTED = "/get-started",
  GET_STARTED_THEME = "/get-started/theme",
  GET_STARTED_IMAGES = "/get-started/images",
  GET_STARTED_MENU = "/get-started/menu",
  GET_STARTED_FEATURES = "/get-started/features",
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={ERoutes.HOME} element={<LandingPage />} />
          <Route path={ERoutes.WEBSITE_BUILDER} element={<WebsiteBuilderPage />} />
        </Route>

        <Route path={ERoutes.GET_STARTED} element={<GetStartedLayout />}>
          <Route index element={<Step1InfoPage />} />
          <Route path={ERoutes.GET_STARTED_THEME} element={<Step2ThemePage />} />
          <Route path={ERoutes.GET_STARTED_IMAGES} element={<Step3ImagesPage />} />
          <Route path={ERoutes.GET_STARTED_MENU} element={<Step4MenuPage />} />
          <Route path={ERoutes.GET_STARTED_FEATURES} element={<Step5FeaturesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
