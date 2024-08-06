import { CircleCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Pricing = () => {
  return (
    <main
      className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-5xl"
      id="pricing"
    >
      <div className="mx-auto max-w-lg mb-14">
        <h1 className="text-4xl font-bold text-secondary text-center">
          Plans to fit your business
        </h1>
        <p className="text-customColor max-w-sm text-center mx-auto mt-6">
          Simple, transparent pricing that growth with you{" "}
          <span className="text-primary/80 cursor-pointer">
            Try any plan free for 14 days
          </span>
        </p>
      </div>

      <div className="grid lg:grid-cols-6 grid-cols-1 gap-4">
        <div className="lg:col-span-3 bg-white rounded-3xl p-4 border">
          <div className="bg-customColor/10 rounded-3xl p-4 mb-8">
            <h1 className="text-sm font-bold text-primary">NexusAI Starter</h1>
            <p className="mt-1 font-semibold text-4xl">$199/m</p>
            <p className="mt-2 text-secondary/60">
              Best for small businesses and startups looking to streamline basic
              processes and boost productivity
            </p>
            <Link href="/waitlist">
              <Button className="w-full mt-4">Get Started</Button>
            </Link>
          </div>
          <Separator />
          <div className="text-customColor max-w-md mt-4">
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">Up to 5 users</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">100 AI-powered automations per month</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">5 custom workflows</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">Email and calendar management</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">Basic document processing</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">8/5 customer support</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">
                Access to knowledge base and video tutorials
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white rounded-3xl p-4 border">
          <div className="w-32 absolute -mt-10 mx-36 px-3 py-2 rounded-full border border-primary shadow-primary/40 shadow-md bg-white text-center text-primary text-sm font-semibold">
            Most Popular
          </div>
          <div className="bg-customColor/10 rounded-3xl p-4 mb-8">
            <h1 className="text-sm font-bold text-primary">NexusAI Pro</h1>
            <p className="mt-1 font-semibold text-4xl">$399/m</p>
            <p className="mt-2 text-secondary/60">
              Best for growing businesses and medium-sized companies seeking
              comprehensive automation solutions and deeper insights.
            </p>
            <Link href="/waitlist">
              <Button className="w-full mt-4">Get Started</Button>
            </Link>
          </div>
          <Separator />
          <div className="text-customColor max-w-md mt-4">
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">Up to 20 users</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">Unlimited AI-powered automations</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">20 custom workflows</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">Advanced document processing and analysis</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">Data entry automation</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">Reporting and basic analytics</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">API access for custom integrations</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">24/7 customer support</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">Dedicated account manager</p>
            </div>
            <div className="flex gap-2 -mt-2">
              <CircleCheck className="text-primary mt-4" size={20} />
              <p className="mt-3">Quarterly strategy sessions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 border mt-4">
        <div className="bg-customColor/10 rounded-3xl p-4 mb-8">
          <h1 className="text-sm font-bold text-primary">NexusAI Enterprise</h1>
          <p className="mt-1 font-semibold text-4xl">$699/m</p>
          <p className="mt-2 text-secondary/60 max-w-xl">
            Best for large enterprises and organizations with complex automation
            needs, requiring scalable solutions and high-level customization.
          </p>
          <Link href="/waitlist">
            <Button className="w-full mt-4">Get Started</Button>
          </Link>
        </div>
        <Separator />
        <div className="text-customColor max-w-xl mt-4">
          <div className="flex gap-2 -mt-2">
            <CircleCheck className="text-primary mt-4" size={20} />
            <p className="mt-3">Unlimited users</p>
          </div>
          <div className="flex gap-2 -mt-2">
            <CircleCheck className="text-primary mt-4" size={20} />
            <p className="mt-3">Unlimited custom workflows</p>
          </div>
          <div className="flex gap-2 -mt-2">
            <CircleCheck className="text-primary mt-4" size={20} />
            <p className="mt-3">Advanced AI model customization</p>
          </div>
          <div className="flex gap-2 -mt-2">
            <CircleCheck className="text-primary mt-4" size={20} />
            <p className="mt-3">
              Full-suite analytics and business intelligence
            </p>
          </div>
          <div className="flex gap-2 -mt-2">
            <CircleCheck className="text-primary mt-4" size={20} />
            <p className="mt-3">Custom API development</p>
          </div>
          <div className="flex gap-2 -mt-2">
            <CircleCheck className="text-primary mt-4" size={20} />
            <p className="mt-3">On-premises deployment option</p>
          </div>
          <div className="flex gap-2 -mt-2">
            <CircleCheck className="text-primary mt-4" size={20} />
            <p className="mt-3">
              Advanced security features and compliance (HIPAA, GDPR, etc.)
            </p>
          </div>
          <div className="flex gap-2 -mt-2">
            <CircleCheck className="text-primary mt-4" size={20} />
            <p className="mt-3">24/7 priority support with dedicated team</p>
          </div>
          <div className="flex gap-2 -mt-2">
            <CircleCheck className="text-primary mt-4" size={20} />
            <p className="mt-3">Monthly strategy and optimization sessions</p>
          </div>
          <div className="flex gap-2 -mt-2">
            <CircleCheck className="text-primary mt-4" size={20} />
            <p className="mt-3">Employee training program</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
