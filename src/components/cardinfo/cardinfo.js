import React from "react";
import { Card } from "../card/card";

export const CardInfo = () => {
  const data = {
    src: "https://www.kukinews.com/data/kuk/image/2020/11/26/kuk202011260451.680x.0.jpg",
    styleW: "440px",
    styleH: "500px",
    alt: "League of Legends",
    path: "/info",
  };

  return (
      <div className="CardInfo">
        <Card
          src={data.src}
          styleW={data.styleW}
          styleH={data.styleH}
          alt={data.alt}
          path={data.path}
        />
      </div>
  );
};
