import React from "react";
import Image from "next/image";
import { BetweenHorizontalEnd, CircleArrowRight, Gauge } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const HarnessingAI = () => {
  return (
    <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-10 justify-between max-w-5xl">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-0">
        <div className="lg:col-span-1 xl:-mx-10 mt-6 mx-auto mb-10">
          <div className="w-full">
            <Image
              src="/assets/ai-circle.png"
              alt="Workflow Nexusai"
              className="-mt-10"
              quality={100}
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="lg:col-span-2 lg:mx-28 mx-auto mt-10">
          <h1 className="md:text-4xl text-2xl max-w-md font-bold text-secondary">
            Harnessing <span className="text-primary">Nexus AI</span> for
            business success
          </h1>
          <p className="text-customColor max-w-md mt-6">
            Nexus AI benefits and provides actionable strategies in various
            aspects of business operations and can drive improvement in each
            area to leverage AI for success.
          </p>
          <div className="flex gap-2 mt-4 text-customColor border rounded-md max-w-sm p-2">
            <BetweenHorizontalEnd
              className="bg-white text-primary rounded-md p-2"
              size={38}
            />
            <p className="mt-1.5">Invoice Processing and Approvals</p>
            <CircleArrowRight className="mt-1.5" />
          </div>

          <div className="flex gap-2 mt-4 text-customColor border rounded-md max-w-sm p-2">
            <Gauge className="bg-white text-primary rounded-md p-2" size={38} />
            <p className="mt-1.5">Enhanced Customer Experiences</p>
            <CircleArrowRight className="mt-1.5" />
          </div>

          <Link href="/waitlist">
            <Button className="mt-10 py-2">Start Free Trial</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HarnessingAI;
