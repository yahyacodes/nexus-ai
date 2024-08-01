import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-5xl">
      <div className="mx-auto max-w-lg mb-14">
        <h1 className="md:text-4xl text-2xl font-bold text-secondary text-center">
          Leading the way in AI Task Automation
        </h1>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border">
          <div className="flex items-center gap-x-4">
            <Image
              src="https://randomuser.me/api/portraits/med/women/75.jpg"
              alt="Sarah Chen"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="block text-primary font-semibold">Sarah Chen</p>
              <span className="block text-customColor/60 text-xs mt-0.5">
                CTO @ TechFlow Inc.
              </span>
            </div>
          </div>
          <p className="text-customColor max-w-lg mt-4">
            NexusAI has revolutionized our workflow. We've seen a 40% increase
            in productivity across our teams, and the AI's ability to handle
            complex data analysis has given us insights we never thought
            possible. It's like having a tireless, brilliant assistant working
            24/7
          </p>
        </div>

        <div className="lg:col-span-3 bg-white rounded-3xl p-8 border">
          <div className="flex items-center gap-x-4">
            <Image
              src="https://randomuser.me/api/portraits/med/men/78.jpg"
              alt="Marcus Rodriguez"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="block text-primary font-semibold">
                Marcus Rodriguez
              </p>
              <span className="block text-customColor/60 text-xs mt-0.5">
                CEO @ Global Retail Solutions
              </span>
            </div>
          </div>
          <p className="text-customColor max-w-lg mt-4">
            Implementing NexusAI was a game-changer for our inventory
            management. We've reduced stockouts by 75% and optimized our supply
            chain in ways we couldn't have imagined. The ROI was evident within
            the first quarter!
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 mt-4">
        <div className="lg:col-span-3 bg-white rounded-3xl p-8 border">
          <div className="flex items-center gap-x-4">
            <Image
              src="https://randomuser.me/api/portraits/med/men/77.jpg"
              alt="James Wilson"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="block text-primary font-semibold">James Wilson</p>
              <span className="block text-customColor/60 text-xs mt-0.5">
                CFO @ Midwest Manufacturing Co.
              </span>
            </div>
          </div>
          <p className="text-customColor max-w-lg mt-4">
            The financial forecasting capabilities of NexusAI are remarkable.
            We've improved our budgeting accuracy by 35% and the AI's real-time
            analysis has helped us make critical decisions faster. It's like
            having a crystal ball for our finances
          </p>
        </div>

        <div className="lg:col-span-3 bg-white rounded-3xl p-8 border">
          <div className="flex items-center gap-x-4">
            <Image
              src="https://randomuser.me/api/portraits/med/women/55.jpg"
              alt="Dr. Emily Patel"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="block text-primary font-semibold">
                Dr. Emily Patel
              </p>
              <span className="block text-customColor/60 text-xs mt-0.5">
                Head of Research @ BioTech Innovations
              </span>
            </div>
          </div>
          <p className="text-customColor max-w-lg mt-4">
            In our fast-paced research environment, NexusAI has been invaluable.
            It's accelerated our data processing tenfold and helped us identify
            patterns that led to two breakthrough discoveries this year alone.
            It's not just a tool; it's practically a team member
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 mt-4">
        <div className="lg:col-span-3 bg-white rounded-3xl p-8 border">
          <div className="flex items-center gap-x-4">
            <Image
              src="https://randomuser.me/api/portraits/med/women/78.jpg"
              alt="Linda Thompson"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="block text-primary font-semibold">Linda Thompson</p>
              <span className="block text-customColor/60 text-xs mt-0.5">
                HR Director @ TalentForce
              </span>
            </div>
          </div>
          <p className="text-customColor max-w-lg mt-4">
            NexusAI has transformed our recruitment process. It's reduced our
            time-to-hire by 60% and improved the quality of our candidates
            significantly. The AI's ability to objectively assess skills and
            cultural fit is simply unparalleled
          </p>
        </div>

        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border">
          <div className="flex items-center gap-x-4">
            <Image
              src="https://randomuser.me/api/portraits/med/men/70.jpg"
              alt="Alex Kwon"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="block text-primary font-semibold">Alex Kwon</p>
              <span className="block text-customColor/60 text-xs mt-0.5">
                Marketing Manager @ Digital Dynamics
              </span>
            </div>
          </div>
          <p className="text-customColor max-w-lg mt-4">
            Our content marketing strategy got a serious boost with NexusAI.
            It's like having a marketing genius on call 24/7. We've seen a 50%
            increase in engagement and our content production has doubled, all
            while maintaining top-notch quality
          </p>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
