import Faqs from "@/components/faqs";
import PageFooter from "@/components/footer";
import GetStarted from "@/components/get-started";
import HarnessingAI from "@/components/harnessing";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/princing";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Workflows from "@/components/work-flows";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar tabs={["Apps", "Components", "Websites", "Other stuff"]} />
      <Hero />
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
