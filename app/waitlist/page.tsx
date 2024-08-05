"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="p-8">
        <Image
          src="/assets/navbar-logo.svg"
          alt="Nexusai Logo"
          height={130}
          width={130}
          className="mx-auto mb-20"
        />
        <div className="text-2xl text-primary font-semibold text-center mb-6">
          Join Our Waitlist
        </div>
        <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-center">
          Step into the future:
        </h1>
        <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-center">
          Join NexusAI for task automation
        </h1>
        <p className="text-customColor max-w-md mx-auto mt-2 mb-6 text-center">
          Be Among the First to Experience the Groundbraking of NexusAI.
          Exclusive Early Access and Perks Awaits You!
        </p>
        {!submitted ? (
          <form className="items-center justify-center flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email...."
              className="w-full rounded-full"
            />
            <Button>Join Waitlist</Button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-lg font-medium text-gray-700">
              Thank you for joining our waitlist!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Waitlist;
