"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Faqs = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-5xl mb-32">
      <h1 className="md:text-4xl text-2xl font-bold text-secondary text-center capitalize max-w-md mx-auto">
        You have <span className="text-primary">questions</span>, we have your{" "}
        <span className="text-primary">answers</span>
      </h1>
      <p className="text-customColor max-w-md text-center mx-auto mt-6">
        These are most frequently asked questions by our users see if we have
        answered them for you too.
      </p>

      <div className="mt-10 text-secondary">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-4">
          <div className="flex items-center justify-between space-x-4 px-4 rounded-3xl border p-2">
            <h1 className="lg:text-2xl text-xl font-semibold">
              What are the benefits of NexusAI task automation?
            </h1>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="px-4 py-3 text-sm">
              AI task automation refers to the use of artificial intelligence to
              perform tasks that typically require human intervention, such as
              data entry, customer service, and decision-making processes.
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-4">
          <div className="flex items-center justify-between space-x-4 px-4 rounded-3xl border p-2">
            <h1 className="lg:text-2xl text-xl font-semibold">
              What types of tasks can NexusAI automate?
            </h1>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="px-4 py-3 text-sm">
              NexusAI can automate repetitive tasks, data analysis, natural
              language processing, image and speech recognition, customer
              support, predictive maintenance, and more.
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-4">
          <div className="flex items-center justify-between space-x-4 px-4 rounded-3xl border p-2">
            <h1 className="lg:text-2xl text-xl font-semibold">
              How does NexusAI task automation work?
            </h1>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="px-4 py-3 text-sm">
              NexusAI task automation uses machine learning algorithms, natural
              language processing, and other AI techniques to understand and
              perform tasks based on data and predefined rules.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </main>
  );
};

export default Faqs;
