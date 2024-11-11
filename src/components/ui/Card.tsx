// import { ChevronUpIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";
import "./Card.css";
import Chevron from "./Chevron";

export const Card: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    if (isHovering) {
      // setInterval(() => {
      //   setIsHovering(false);
      // }, 1000);
    }
    console.log("srare changed", isHovering);
  }, [isHovering]);
  return (
    <div
      className="w-full relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="w-full bg-jet border-2 border-green_yellow overflow-hidden text-white text-xl font-bold cursor-default">
        lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom
        lorem ipsom lorem ipsom lorem ipsom lorem ipsom
      </div>
      <div
        className={`absolute inline-block -bottom-[100px] w-full h-[100px] ${
          isHovering ? "card_animation " : ""
        } `}
      >
        <Chevron />
      </div>
    </div>
  );
};
