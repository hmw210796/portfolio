import React, { ReactElement, useState } from "react";

const Card: React.FC<{ children: string; icon: ReactElement }> = (props) => {
  const [hoverCSS, setHoverCSS] = useState("");

  const mouseEnterHandler = () => {
    setHoverCSS(
      "bg-gradient-to-r 2 to-orange-100 from-purple transform scale-105 duration-500"
    );
  };
  return (
    <div
      className={` ${hoverCSS} flex items-center gap-4 border-gray-600 bg-purple p-4 border shadow-lg`}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={() => setHoverCSS("")}
    >
      <span className="text-2xl">{props.icon}</span>
      <p>{props.children}</p>
    </div>
  );
};

export default Card;
