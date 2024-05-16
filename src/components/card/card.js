import React from "react";
import { Link } from "react-router-dom";
import { Container, Text, Img } from "./styled";

export const Card = (props) => {// 메인에서 프롭스를 받아온다.
  return (
    <Img>
      <Container className="Card">
        <Link
          to={props.path}
          style={{ color: "white", textDecoration: "none" }}// Link를 사용하면 글자의 색과 밑줄이 생기기 때문에 인라인 스타일로 변경
        >
          <Img
            style={{ width: props.styleW, height: props.styleH }}// 이미지 사이즈를 프롭스를 받아 지정.
            alt={props.alt}
            src={props.src}
          />
          <Text>{props.text}</Text>
        </Link>
      </Container>
    </Img>
  );
};
