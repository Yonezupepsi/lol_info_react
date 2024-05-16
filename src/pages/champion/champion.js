import React from "react";
import { ChampionCard } from "../../components/championcard/championcard";
import { Container, PageContainer, Button } from "./styled.js";

export const Champion = () => {
    const getChampions = JSON.parse(localStorage.getItem('championData'));
    const clearData = () => {
        localStorage.clear();
        window.location.reload();
    }
    if (getChampions){// if문을 활용해 getChampions가 있을 때만 map함수를 실행하게 만들어 오류를 방지한다.
    return(
       <>
       <PageContainer>
       <Container>
        {getChampions.map((e, i) => (
            <ChampionCard
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
}else{
    return null;
}
    
}