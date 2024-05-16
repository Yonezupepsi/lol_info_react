import React from "react";
import {Container, Text } from "./styled";

export const ChampionCard = ({src, name}) => {
    return (    
          <Container className="ChampionCard">
              <img
                style = {{ width: '200px', height: '200px', borderRadius: '20px' }}// 이미지 사이즈를 인라인 스타일로 지정
                alt = "당신의 챔피언"
                src = {src}
              />
              <Text>{name}</Text>
          </Container>
        
      );
}