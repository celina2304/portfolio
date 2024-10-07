import React, { useState } from "react";

const Card: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="border-2 z-0 border-green_yellow w-full h-[200px] relative overflow-hidden">
      <div
        className={`w-full h-[200px] z-10 translate-y-[200px] bg-green_yellow ${
          isHovering ? "baby" : ""
        } transition-transform`}
      ></div>
      <div
        className="absolute z-20 top-0 left-0 w-[200px] h-[200px]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      ></div>
    </div>
  );
};

export default function Cards() {
  return (
    <div className="w-full grid grid-cols-3">
      <Card />
      <Card />
      <Card />
    </div>
  );
}
