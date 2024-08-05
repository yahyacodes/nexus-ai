"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Button } from "./ui/button";

interface NavbarProps {
  tabs: string[];
}

const Navbar = ({ tabs }: NavbarProps) => {
  const fired = useRef(false);
  const defaultSelectedTabIndex = 0;
  const [currentLink, setCurrentLink] = useState<{
    index: number;
    left: undefined | number;
    width: undefined | number;
  }>({
    index: defaultSelectedTabIndex,
    left: undefined,
    width: undefined,
  });

  const defaultSelectedTabStyles = [
    " [&:nth-child(1)]:bg-primary",
    "[&:nth-child(2)]:bg-primary",
    " [&:nth-child(3)]:bg-primary",
    "[&:nth-child(4)]:bg-primary",
  ];

  useEffect(() => {
    const updateCurrentLink = () => {
      const button = document.getElementById(
        "uuu-btn-" + defaultSelectedTabIndex
      );
      if (button) {
        const rect = button.getBoundingClientRect();
        const parentRect = button.parentElement?.getBoundingClientRect();
        setCurrentLink({
          left: rect.left - (parentRect?.left || 0),
          width: rect.width,
          index: defaultSelectedTabIndex,
        });
      }
    };

    updateCurrentLink();
    window.addEventListener("resize", updateCurrentLink);
    return () => window.removeEventListener("resize", updateCurrentLink);
  }, []);

  return (
    <div
      className={
        "lg:w-[60rem] md:w-[40rem] w-[24rem] border mt-4 border-neutral-300 rounded-full flex items-center justify-between p-2 relative"
      }
    >
      <div className="flex-1"></div>
      <div className="relative flex gap-2">
        {tabs.map((link, i) => (
          <button
            key={i}
            id={"uuu-btn-" + i}
            onClick={() => {
              fired.current = true;
              const button = document.getElementById("uuu-btn-" + i);
              if (button) {
                const rect = button.getBoundingClientRect();
                const parentRect =
                  button.parentElement?.getBoundingClientRect();
                setCurrentLink({
                  left: rect.left - (parentRect?.left || 0),
                  width: rect.width,
                  index: i,
                });
              }
            }}
            className={twMerge(
              "transition-colors duration-200 flex items-center justify-center rounded-full h-fit px-2 py-2 text-nowrap",
              currentLink.index === i && "text-white",
              fired.current
                ? ""
                : defaultSelectedTabStyles[defaultSelectedTabIndex]
            )}
          >
            {link}
          </button>
        ))}
        <div
          style={{
            left: `${currentLink.left}px`,
            width: `${currentLink.width}px`,
          }}
          className={twMerge(
            `transition-[color,left,width] duration-300 absolute top-1/2 -translate-y-1/2 h-full rounded-full -z-[1]`,
            fired.current ? "bg-primary" : "bg-transparent"
          )}
        />
      </div>
      <div className="flex-1 md:flex hidden justify-end">
        {" "}
        <Button className="transition-colors duration-200">Get Started</Button>
      </div>
      <div className={"absolute inset-0 h-full p-2 -z-[2] overflow-hidden"}>
        <div className={"relative h-full w-full overflow-hidden"}>
          <Image
            src="/assets/navbar-logo.svg"
            alt="Nexusai Logo"
            height={130}
            width={130}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
