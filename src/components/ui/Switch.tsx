// src/components/Switch.tsx
import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";


const Switch: React.FC = () => (
  <SwitchPrimitive.Root
    defaultChecked
    className="relative inline-flex h-[25px] w-[42px] cursor-pointer items-center rounded-full bg-gray transition-colors duration-200 ease-in-out data-[state=checked]:bg-green_yellow"
  >
    <SwitchPrimitive.Thumb className="block h-[21px] w-[21px] rounded-full bg-white shadow transition-transform duration-200 ease-in-out transform translate-x-[2px] data-[state=checked]:translate-x-[19px]" />
  </SwitchPrimitive.Root>
);

export default Switch;
