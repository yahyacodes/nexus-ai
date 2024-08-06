import React from "react";
import { Button } from "./ui/button";
import Avatars from "./Avatars";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 text-center justify-between max-w-5xl">
      <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-secondary">
        <span className="text-primary">Automate</span> Your Workflow,
      </h1>
      <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold">
        Amplify <span className="text-primary">Your Productivity</span>
      </h1>
      <p className="text-customColor max-w-md mx-auto mt-8">
        NexusAI: AI-powered task automation that saves time, reduces errors, and
        boosts efficiency
      </p>
      <Link href="/waitlist">
        <Button className="mt-10 py-2">Start Free Trial</Button>
      </Link>
      <Avatars />
      <div className="mx-auto w-full mt-10 shadow-md rounded-3xl shadow-primary/20">
        <Image
          src="/assets/automation-nexusai.png"
          alt="Automation Nexusai"
          className="rounded-3xl"
          width={1024}
          height={768}
        />
      </div>
    </main>
  );
};

export default Hero;
