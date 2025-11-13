import { CallToActionSection } from "@/components/sections/call-to-action";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { IntegrationsSection } from "@/components/sections/integrations";
import { PricingSection } from "@/components/sections/pricing";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WorkflowSection } from "@/components/sections/workflow";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WorkflowSection />
      <FeaturesSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />
    </div>
  );
}
