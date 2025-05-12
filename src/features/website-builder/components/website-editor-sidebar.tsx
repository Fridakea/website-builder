import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@/components/ui/sidebar";

export function WebsiteEditorSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Hjemmeside redigering</SidebarGroupLabel>
          <SidebarGroupContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="hero-image">
                <AccordionTrigger>
                  <SidebarGroupLabel>Banner billede</SidebarGroupLabel>
                </AccordionTrigger>
                <AccordionContent>
                  <p>Ændre banner billede</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
