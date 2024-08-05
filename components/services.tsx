import {
  ArrowRight,
  CalendarCheck2,
  Dot,
  HandCoins,
  MailCheck,
  Workflow,
} from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-5xl" id="services">
      <div className="mx-auto max-w-lg mb-14">
        <h1 className="md:text-4xl text-2xl font-bold text-secondary text-center">
          <span className="text-primary">AI Driven</span> Task Automation
          Services
        </h1>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
        <div className="lg:col-span-3 bg-white rounded-3xl p-8 border">
          <MailCheck className="text-primary" />
          <h1 className="mt-4 font-semibold text-lg">
            Intelligent Email Management
          </h1>
          <div className="text-customColor max-w-md mt-4">
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">
                Automatic email categorization and prioritization
              </p>
            </div>
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">Smart response suggestions</p>
            </div>
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">Follow-up reminders</p>
            </div>
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">
                Spam and low-priority email filtering
              </p>
            </div>
            <div className="flex gap-2 bg-primary/10 rounded-full p-1 mt-2 px-4 w-40">
              <p className="text-primary">Learn More</p>
              <ArrowRight className="text-primary" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border">
          <Workflow className="text-primary" />
          <h1 className="mt-4 font-semibold text-lg">Workflow Automation</h1>
          <div className="text-customColor max-w-xl mt-4">
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">Custom workflow and optimization</p>
            </div>
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">Trigger-based task initiation</p>
            </div>
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">Conditional task routing</p>
            </div>
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">Progress tracking and reporting</p>
            </div>
            <div className="flex gap-2 bg-primary/10 rounded-full p-1 mt-2 px-4 w-40">
              <p className="text-primary">Learn More</p>
              <ArrowRight className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 mt-4">
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border">
          <HandCoins className="text-primary" />
          <h1 className="mt-4 font-semibold text-lg">
            Financial Process Automation
          </h1>
          <div className="text-customColor max-w-xl mt-4">
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">Invoice processing and matching</p>
            </div>
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">Expense report automation</p>
            </div>
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">Budget tracking and forecasting</p>
            </div>
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">
                Automated financial report generation
              </p>
            </div>
            <div className="flex gap-2 bg-primary/10 rounded-full p-1 mt-2 px-4 w-40">
              <p className="text-primary">Learn More</p>
              <ArrowRight className="text-primary" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white rounded-3xl p-8 border">
          <CalendarCheck2 className="text-primary" />
          <h1 className="mt-4 font-semibold text-lg">
            Smart Calendar Management
          </h1>
          <div className="text-customColor max-w-lg mt-4">
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">AI-powered meeting scheduling</p>
            </div>
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">
                Optimal time slot suggestions based on participants'
                availability
              </p>
            </div>
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">
                Automatic meeting room or video conference link generation
              </p>
            </div>
            <div className="flex gap-0 -mt-4">
              <Dot className="text-primary" size={50} />
              <p className="mt-3 -mx-3">
                Smart rescheduling for conflicting appointments
              </p>
            </div>
            <div className="flex gap-2 bg-primary/10 rounded-full p-1 mt-2 px-4 w-40">
              <p className="text-primary">Learn More</p>
              <ArrowRight className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
