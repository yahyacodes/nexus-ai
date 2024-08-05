import Faqs from "@/components/faqs";
import PageFooter from "@/components/footer";
import GetStarted from "@/components/get-started";
import HarnessingAI from "@/components/harnessing";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Pricing from "@/components/princing";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Trustees from "@/components/trustees";
import Workflows from "@/components/work-flows";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navigation/>
      <Hero />
      <Trustees />
      <Services />
      <Workflows />
      <HarnessingAI />
      <GetStarted />
      <Testimonials />
      <Pricing />
      <Faqs />
      <PageFooter />
    </main>
  );
}
