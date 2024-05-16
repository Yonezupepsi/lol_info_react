import React from "react";
import { Card } from "../../components/card/card";
import { StyledMain } from "./styled";

export const Main = () => {
  const data = [{// 메인에서 출력될 Card 컴포넌트의 데이터를 객체배열로 작성.
    src: "https://www.kukinews.com/data/kuk/image/2020/11/26/kuk202011260451.680x.0.jpg",
    styleW: "425px",
    styleH: "500px",
    alt: "League of Legends",
    path: "/info",
    text: "자신만의 챔피언을 찾아보세요!"
  },
  {
    src: "https://blog.kakaocdn.net/dn/FuTCH/btq7myEbbE0/elNihBKTZvNndnJgajbOz1/img.png",
    styleW: "425px",
    styleH: "500px",
    alt: "Your Legends",
    path: "/Champion",
    text: "저장한 영웅들을 만나 보세요!"
  },
  {
    src: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt31a35ebbf4746949/6020c2c75f9b2812764c2725/webchest.png",
    styleW: "425px",
    styleH: "500px",
    alt: "League of Legends",
    path: "/important",
    text: "저에게 후원을 해주세요!"
  }

]

  return (
    <>
      <StyledMain style={{backgroundColor: "#000000"}}>
      {data.map((e, i) => (// 3개의 객체배열을 가진 data를 출력한다. 코드를 짧게 만들기 위해 map함수를 사용.
          <Card // Card 컴포넌트에 props를 전달.
            key={i}
            src={e.src}
            styleW={e.styleW}
            styleH={e.styleH}
            alt={e.alt}
            path={e.path}
            text={e.text}
          />
        ))}
        {/* 밑의 방식으로도 출력 할 수 있지만 코드가 길어진다. */}
        {/* <Card 
            src={data[0].src}
            styleW={data[0].styleW}
            styleH={data[0].styleH}
            alt={data[0].alt}
            path={data[0].path}
            text={data[0].text}
        />
        <Card
            src={data[1].src}
            styleW={data[1].styleW}
            styleH={data[1].styleH}
            alt={data[1].alt}
            path={data[1].path}
            text={data[1].text}
        />
        <Card
            src={data[2].src}
            styleW={data[2].styleW}
            styleH={data[2].styleH}
            alt={data[2].alt}
            path={data[2].path}
            text={data[2].text}
        /> */}
      </StyledMain>
    </>
  );
};
