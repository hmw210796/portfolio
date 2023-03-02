import React, { ReactElement, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Card: React.FC<{
  children: string;
  icon: ReactElement;
  rating: number;
}> = (props) => {
  const [hoverCSS, setHoverCSS] = useState("");
  const [showStar, setShowStar] = useState(false);

  const mouseEnterHandler = () => {
    setHoverCSS(
      "bg-gradient-to-r 2 to-orange-100 from-purple transform scale-105 duration-500"
    );
    setShowStar(true);
  };

  let stars: React.ReactNode;

  switch (props.rating) {
    case 1:
      stars = <AiFillStar />;
      break;
    case 2:
      stars = (
        <>
          <AiFillStar />
          <AiFillStar />
        </>
      );
      break;
    case 3:
      stars = (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
      break;
    case 4:
      stars = (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
      break;
    case 5:
      stars = (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
      break;
  }

  return (
    <div
      className={` ${hoverCSS} flex items-center gap-4 border-gray-600 bg-purple p-4 border shadow-lg`}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={() => {
        setHoverCSS("");
        setShowStar(false);
      }}
    >
      <span className="text-2xl">{props.icon}</span>
      <p>{props.children}</p>
      {showStar ? stars : ""}
    </div>
  );
};

export default Card;
