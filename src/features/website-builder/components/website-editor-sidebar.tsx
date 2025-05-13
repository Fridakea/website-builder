import { ChevronRight, ChevronLeft } from "lucide-react";
import { FC, useState } from "react";
import { EBlock } from "./editable-block";
import { Step3ImagesPage } from "@/pages/get-started-flow/step3-images";

type WebsiteEditorSidebarProps = {
  activeBlock: EBlock | undefined;
};

export const WebsiteEditorSidebar: FC<WebsiteEditorSidebarProps> = ({ activeBlock }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="relative transition-all duration-300 ease-in-out" style={{ width: isSidebarOpen ? "300px" : "0px" }}>
      <div className="z-200 fixed top-0 right-0 h-full transition-all duration-300 ease-in-out" style={{ width: isSidebarOpen ? "300px" : "0px" }}>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="absolute top-3 -left-6 size-6 bg-white rounded-l-md">
          {isSidebarOpen ? <ChevronRight /> : <ChevronLeft />}
        </button>

        <h1>Sidebar</h1>
        <p>Active block: {activeBlock}</p>

        {activeBlock === EBlock.HERO_SECTION && <Step3ImagesPage showContent={{ bannerImage: true }} />}

        {activeBlock === EBlock.IMAGE_GALLERY && <Step3ImagesPage showContent={{ gallery: true }} />}

        {activeBlock === EBlock.MAPS_SECTION && (
          <div className="flex flex-col gap-2">
            <label>Ændre adresse</label>
            <input type="text" />
          </div>
        )}
      </div>
    </div>
  );
};
