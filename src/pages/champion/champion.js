import React from "react";
import { ChampionCard } from "../../components/championcard/championcard";
import { Container, PageContainer, Button } from "./styled.js";

export const Champion = () => {
    const delChampion = () => {
        JSON.parse(localStorage.removeItem('championData'));
      };
    const getChampions = JSON.parse(localStorage.getItem('championData'));// 로컬스토리지에 데이터를 가지고 온다. 문자열로 받았기 때문에 parse로 객체 변환.
    const clearData = () => {// 로컬스토리지에 저장 된 데이터를 모두 삭제하기 위한 함수 작성 클리어가 된 후에는 다시 메인페이지로 이동.
        localStorage.clear();
        window.location.href = '/';
    };
    const noChampion = () => {// 저장된 데이터가 없을시 리턴될 함수를 작성.
        alert('저장된 챔피언이 없습니다! 챔피언을 찾으러 이동합니다!');
        window.location.href = '/info';
    };
    if (getChampions){// if문을 활용해 getChampions에 데이터가 있을 때만 map함수를 실행하게 만들어 오류를 방지한다.
    return(
       <>
       <PageContainer>
       <Container>
        {getChampions.map((e, i) => (// map함수를 통해 ChampionCard가 가지고 있는 데이터 만큼 출력.
            <ChampionCard onClick={delChampion}
                key={i}
                id={e.id}
                name={e.name}
                src={e.src}
            />
        ))}
        </Container>
        </PageContainer>
        <Button onClick={clearData}>clear</Button>
        </>
    )
}else{// 챔피언이 없으면 noChampion 함수를 실행
    return noChampion();
}
    
}