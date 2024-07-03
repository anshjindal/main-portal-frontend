import React from "react";

function HeroBanner({ title, image }) {
  return (
    <div
      className="bg-image w-[100vw] h-[28vw] relative"
      style={{ backgroundImage: `url(${image}) ` }}>
      <div className="bg-violet-900/50 h-full w-full flex items-center">
        <h2 className="text-[8vw] text-white font-bold ml-[4vw]">{title}</h2>
      </div>
    </div>
  );
}

export default HeroBanner;
