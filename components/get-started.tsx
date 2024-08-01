import {
  ArrowRight,
  CalendarCheck2,
  Dot,
  HandCoins,
  MailCheck,
  Workflow,
} from "lucide-react";
import React from "react";

const GetStarted = () => {
  return (
    <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-5xl">
      <div className="mx-auto mb-14">
        <h1 className="md:text-4xl text-2xl font-bold max-w-md mx-auto text-secondary text-center">
          Getting started <span className="text-primary">Nexus AI</span>
        </h1>
        <p className="text-customColor max-w-lg mt-4 mx-auto text-center">
          Unleash the power of NexusAI automation to transform routine
          processes, ensuring precision, 24/7 availability, and significant cost
          savings.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
        <div className="lg:col-span-3 bg-white rounded-3xl p-8 border">
          <h1 className="text-primary text-3xl font-bold">
            {" "}
            <span className="text-xs font-normal text-customColor">
              Step
            </span>{" "}
            01
          </h1>
          <h1 className="mt-4 font-semibold text-lg">
            Book a Free Consultation
          </h1>
          <p className="text-customColor max-w-md mt-4">
            Schedule a call with our AI experts, We'll discuss your business
            needs and challenges to identify potential areas for AI automation
            in your workflow
          </p>
          <div className="flex gap-2 text-primary rounded-full p-1 mt-2 text-sm w-40 cursor-pointer">
            <p>Get Started</p>
            <ArrowRight size={15} className="mt-0.5 -mx-1" />
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border">
          <h1 className="text-primary text-3xl font-bold">
            {" "}
            <span className="text-xs font-normal text-customColor">
              Step
            </span>{" "}
            02
          </h1>
          <h1 className="mt-4 font-semibold text-lg">Choose Your Plan</h1>
          <p className="text-customColor max-w-md mt-4">
            Select from our flexible pricing tiers that's opt for the features
            that best suits your business size and needs, discuss any custom
            requirements with our sales team
          </p>
          <div className="flex gap-2 text-primary rounded-full p-1 mt-2 text-sm w-40 cursor-pointer">
            <p>Get Started</p>
            <ArrowRight size={15} className="mt-0.5 -mx-1" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 mt-4">
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border">
          <h1 className="text-primary text-3xl font-bold">
            {" "}
            <span className="text-xs font-normal text-customColor">
              Step
            </span>{" "}
            03
          </h1>
          <h1 className="mt-4 font-semibold text-lg">Quick and Easy Setup</h1>
          <p className="text-customColor max-w-md mt-4">
            Our development team handles the initial configuration to integrate
            NexusAI with your existing tools and systems and the typical setup
            time is 2-5 business days
          </p>
          <div className="flex gap-2 text-primary rounded-full p-1 mt-2 text-sm w-40 cursor-pointer">
            <p>Get Started</p>
            <ArrowRight size={15} className="mt-0.5 -mx-1" />
          </div>
        </div>

        <div className="lg:col-span-3 bg-white rounded-3xl p-8 border">
          <h1 className="text-primary text-3xl font-bold">
            {" "}
            <span className="text-xs font-normal text-customColor">
              Step
            </span>{" "}
            04
          </h1>
          <h1 className="mt-4 font-semibold text-lg">Start Automating</h1>
          <p className="text-customColor max-w-md mt-4">
            Begin with a few key processes to see immediate impact, gradually
            expand to more complex workflows if you want help with the
            automating our support team is available 24/7 to assist you
          </p>
          <div className="flex gap-2 text-primary rounded-full p-1 mt-2 text-sm w-40 cursor-pointer">
            <p>Get Started</p>
            <ArrowRight size={15} className="mt-0.5 -mx-1" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GetStarted;
