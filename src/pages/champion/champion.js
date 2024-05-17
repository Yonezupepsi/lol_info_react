import React, { useEffect, useState } from "react";
import { ChampionCard } from "../../components/championcard/championcard";
import { Container, PageContainer, Button } from "./styled.js";

export const Champion = () => {
    // useState를 사용하여 champions 상태를 선언하고 저장.
const [champions, setChampions] = useState([]);

// useEffect를 사용하여 컴포넌트가 처음 렌더링될 때 한 번만 실행되는 효과를 줍니다.
// 이후 localStorage에서 챔피언 데이터를 가져와서 champions 상태를 업데이트합니다.
useEffect(() => {
    // localStorage에서 챔피언 데이터를 가져옵니다. 
    // 만약 localStorage에 데이터가 없다면 기본값으로 빈 배열을 설정합니다.
    const getChampionsLS = JSON.parse(localStorage.getItem('championData')) || [];
    // 가져온 챔피언 데이터를 설정하여 컴포넌트를 업데이트합니다.
    setChampions(getChampionsLS);
}, []);
    const getChampions = JSON.parse(localStorage.getItem('championData'));// 로컬스토리지에 데이터를 가지고 온다. 문자열로 받았기 때문에 parse로 객체 변환.
    const clearData = () => {// 로컬스토리지에 저장 된 데이터를 모두 삭제하기 위한 함수 작성 클리어가 된 후에는 다시 메인페이지로 이동.
        localStorage.clear();
        window.location.href = '/';
    };
    
    const noChampion = () => {// 저장된 데이터가 없을시 리턴될 함수를 작성.
        alert('저장된 챔피언이 없습니다! 챔피언을 찾으러 이동합니다!');
        window.location.href = '/info';
    };
    const removeChampion = (id) => {
        const updatedChampions = champions.filter(champion => champion.id !== id);
        setChampions(updatedChampions);
        localStorage.setItem('championData', JSON.stringify(updatedChampions));
    };
    if (getChampions){// if문을 활용해 getChampions에 데이터가 있을 때만 map함수를 실행하게 만들어 오류를 방지한다.
    return(
       <>
       <PageContainer>
       <Container>
        {getChampions.map((champion, i) => (// map함수를 통해 ChampionCard가 가지고 있는 데이터 만큼 출력.
            <ChampionCard
                key={i}
                id={champion.id}
                name={champion.name}
                src={champion.src}
                onDelete={() => removeChampion(champion.id)}
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