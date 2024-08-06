"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Logs } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!isClient) {
    return null; // Don't render anything on the server
  }

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between">
      <NavigationMenu className="lg:w-[60rem] md:w-[40rem] w-[24rem] md:border mt-4 border-neutral-300 rounded-full p-2 relative bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
        <NavigationMenuList className="md:w-full md:flex md:items-center md:justify-between">
          <NavigationMenuItem className="xl:mr-24 md:mr-0 md:flex hidden">
            <Link href="/">
              <Image
                src="/assets/navbar-logo.svg"
                alt="Nexusai Logo"
                height={130}
                width={130}
              />
            </Link>
          </NavigationMenuItem>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:block absolute md:relative top-full md:mt-0 md:left-0 mt-4 left-10 right-0`}
          >
            <div className="flex flex-col md:flex-row">
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Link href={"#about"}>About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Link href={"#services"}>Services</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link href={"#pricing"}>Pricing</Link>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
          </div>
          <NavigationMenuItem>
            <Link href="/waitlist">
              <Button className="transition-colors duration-200 xl:ml-24 md:ml-0 hidden md:flex">
                Get Started
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="flex md:hidden justify-center">
          <div className="flex">
            <NavigationMenuItem>
              <Link href="/">
                <Image
                  src="/assets/navbar-logo.svg"
                  alt="Nexusai Logo"
                  height={130}
                  width={130}
                />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex justify-end mt-2">
              <Logs className="text-primary ml-40" onClick={toggleMenu} />
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
