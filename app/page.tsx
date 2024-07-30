import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar tabs={["Apps", "Components", "Websites", "Other stuff"]} />
      <Hero />
    </main>
  );
}
