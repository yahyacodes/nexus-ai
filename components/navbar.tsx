"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
import Image from "next/image";

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
    setCurrentLink(() => ({
      left: document.getElementById("uuu-btn-" + defaultSelectedTabIndex)
        ?.offsetLeft,
      width: document
        .getElementById("uuu-btn-" + defaultSelectedTabIndex)
        ?.getBoundingClientRect().width,
      index: defaultSelectedTabIndex,
    }));
  }, []);

  return (
    <div
      className={
        "w-[60rem] border mt-4 border-neutral-300 rounded-full flex gap-5 justify-center p-2 backdrop-blur-2xl"
      }
    >
      {tabs.map((link, i) => (
        <button
          key={i}
          id={"uuu-btn-" + i}
          onClick={() => {
            fired.current = true;
            setCurrentLink(() => ({
              left: document.getElementById("uuu-btn-" + i)?.offsetLeft,
              width: document
                .getElementById("uuu-btn-" + i)
                ?.getBoundingClientRect().width,
              index: i,
            }));
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
      <div className={"absolute inset-0 h-full p-2 -z-[1] overflow-hidden"}>
        <div className={"relative h-full w-full overflow-hidden"}>
          <Image
            src="/assets/navbar-logo.svg"
            alt="Nexusai Logo"
            height={130}
            width={130}
          />
          <div
            style={{
              left: `calc(${currentLink.left || 0}px - 0.75rem + 0.25rem)`,
              width: `${currentLink.width || 0}px`,
            }}
            className={twMerge(
              `transition-[color,left,width] duration-300 absolute top-1/2 -translate-y-1/2 h-full rounded-full -z-[1]`,
              fired.current ? "bg-primary" : "bg-transparent"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
