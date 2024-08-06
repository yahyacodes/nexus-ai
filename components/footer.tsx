"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const PageFooter = () => {
  const footerNavs = [
    {
      href: "#",
      name: "About",
    },
    {
      href: "#",
      name: "Services",
    },
    {
      href: "#",
      name: "",
    },
    {
      href: "#",
      name: "Pricing",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-0 justify-between max-w-5xl">
      <footer className="bg-secondary rounded-3xl mb-6 text-white p-8">
        <div className="mx-auto sm:text-center">
          <Image
            src="/assets/footer-logo.svg"
            alt="Nexus AI Logo"
            height={140}
            width={140}
            className="mx-auto mb-20"
          />
          <h1 className="md:text-5xl text-2xl font-bold text-white capitalize">
            Ready to <span className="text-primary">get started?</span>
          </h1>
          <p className="mt-2 max-w-lg mx-auto">
            Experience the future of business operations with NexusAI task
            automation - to reduce errors and boost efficiency
          </p>
          <Link href="/waitlist">
            <Button className="mt-10">Get Started</Button>
          </Link>
        </div>
        <div className="mt-8 items-center justify-between sm:flex p-8">
          <div className="grid grid-cols-3 gap-4">
            <Facebook
              className="border cursor-pointer rounded-full border-white p-2"
              size={40}
            />
            <Linkedin
              className="border cursor-pointer rounded-full border-white p-2"
              size={40}
            />
            <Twitter
              className="border cursor-pointer rounded-full border-white p-2"
              size={40}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <ul className="items-center justify-center sm:flex sm:space-x-4 space-y-4 md:space-y-0">
              {footerNavs.map((item, idx) => (
                <li key={idx} className=" hover:text-primary">
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageFooter;
