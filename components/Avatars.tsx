"use client";

import * as Avatar from "@radix-ui/react-avatar";
import { MoveRight } from "lucide-react";

const avatarData = [
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/med/men/75.jpg",
  },
  {
    name: "CT",
    imgURL:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
  },
];
export default () => (
  <div className="flex items-center justify-center -space-x-2 mt-6 overflow-hidden">
    {avatarData.map((item, idx) => {
      return (
        <Avatar.Root
          key={idx}
          className="border-2 border-primary h-14 w-14 flex items-center justify-center overflow-hidden rounded-full"
        >
          <Avatar.Image
            src={item.imgURL}
            className="h-full w-full object-cover"
          />
          <Avatar.Fallback delayMs={600}>{item.name}</Avatar.Fallback>
        </Avatar.Root>
      );
    })}
    <div>
      <p className="text-md text-secondary font-semibold translate-x-5">
        6k+ happy clients!
      </p>
      <div className="flex gap-6">
        <p className="text-md text-customColor font-medium translate-x-5">
          Join them Now
        </p>
        <MoveRight />
      </div>
    </div>
  </div>
);
