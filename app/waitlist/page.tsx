"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import { CircleCheck, Mail } from "lucide-react";
import Link from "next/link";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (email === "") {
      setSubmitted(false);
      setError("Please add your email. Email is required");
    } else {
      setSubmitted(true);
    }
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
          <>
            <form
              className="items-center justify-center flex gap-2"
              onSubmit={handleSubmit}
            >
              <Input
                type="email"
                placeholder="Enter your email...."
                className="w-full rounded-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Join Waitlist</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <CircleCheck
                      className="mx-auto text-green-600 rounded-full"
                      height={130}
                      width={130}
                    />
                    <DialogTitle className="text-4xl mx-auto text-center max-w-sm">
                      We've added you to our waiting list!
                    </DialogTitle>
                    <DialogDescription className="mx-auto mt-2">
                      We'll let you know when NexusAI is ready.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 pl-6 bg-white border rounded-md shadow-md shadow-primary/10">
                    <div className="relative max-w-xs">
                      <Mail className="w-6 h-6 text-secondary absolute left-3 inset-y-0 my-auto" />
                      <Input
                        type="email"
                        className="pl-12 pr-3 py-2 shadow"
                        value={email}
                        disabled
                      />
                    </div>
                    <div className="mx-auto text-center mt-4">
                      <DialogDescription>
                        NexusAI is coming soon.
                      </DialogDescription>
                      <DialogDescription>
                        NexusAI is a task automation AI to save you time
                      </DialogDescription>
                    </div>
                  </div>
                  <DialogFooter>
                    <Link href="/">
                      <Button type="submit">Join Waitlist</Button>
                    </Link>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </form>
            {error && <p className="text-red-600 text-sm mt-2 pl-6">{error}</p>}
          </>
        ) : (
          <div className="text-center">
            <p className="text-lg font-medium text-green-600 mb-5">
              Thank you for joining our waitlist!
            </p>
            <Link
              href="/"
              className="bg-white rounded-md p-4 shadow-md shadow-primary/20"
            >
              Go back to home page
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Waitlist;
