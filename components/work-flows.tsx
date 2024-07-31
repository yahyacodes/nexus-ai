import React from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { Button } from "./ui/button";

const Workflows = () => {
  return (
    <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-5xl">
      <div className="grid grid-cols-3 gap-0">
        <div className="col-span-2">
          <h1 className="text-4xl max-w-md font-bold text-secondary">
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

          <Button className="mt-6 py-2">Start Free Trial</Button>
        </div>
        <div className="col-span-1 -mx-20">
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
