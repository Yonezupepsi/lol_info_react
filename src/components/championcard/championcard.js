import React from "react";
import {Container, Text } from "./styled";

export const ChampionCard = ({src, name, id, onDelete}) => {// 프롭스를 통해 받아온 데이터
  const handleClick = () => {
    onDelete(id); // champion페이지에서 카드를 클릭시 onDelete 콜백을 호출하고 챔피언의 id를 전달.
  };
    return (    
          <Container className="ChampionCard" onClick={handleClick}>
              <img
                style = {{ width: '200px', height: '200px', borderRadius: '20px' }}// 이미지 사이즈를 인라인 스타일로 지정
                alt = "당신의 챔피언"
                src = {src}
              />
              <Text>{name}</Text>
          </Container>
        
      );
}