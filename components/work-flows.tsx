import React from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Workflows = () => {
  return (
    <main
      className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-5xl"
      id="about"
    >
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-0 ">
        <div className="lg:col-span-2 mx-auto mb-10">
          <h1 className="md:text-4xl text-2xl max-w-md font-bold text-secondary">
            Workflow with <span className="text-primary">Nexus AI</span>{" "}
            Automation
          </h1>
          <p className="text-customColor max-w-md mt-6">
            Nexus AI can integrate with multiple systems, make decisions based
            on predefined criteria, and significantly reduce manual work while
            improving accuracy and efficiency.
          </p>

          <div className="flex gap-2 mt-4 text-customColor">
            <CircleCheck className="mt-1" size={15} />
            <p className=" ">Invoice Processing and Approval</p>
          </div>

          <div className="flex gap-2 mt-1 text-customColor">
            <CircleCheck className="mt-1" size={15} />
            <p className=" ">Customer Support Ticket Resolution</p>
          </div>

          <Link href="/waitlist">
            <Button className="mt-10 py-2">Start Free Trial</Button>
          </Link>
        </div>
        <div className="lg:col-span-1 xl:-mx-20 mx-auto mt-10">
          <div className="w-full">
            <Image
              src="/assets/workflow.png"
              alt="Workflow Nexusai"
              className="-mt-10"
              quality={100}
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Workflows;
