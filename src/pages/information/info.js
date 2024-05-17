import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LayOut,
  InfoBox,
  HorizontalBox,
  BoldText,
  Button,
  Container,
  InfoText,
} from "./styled";

export const Info = () => {
  const [champions, setChampions] = useState(""); // 유즈스테이트를 이용해 api에서 필요한 정보들을 선언 후 저장하기 위해 작성.
  const [championId, setChampionId] = useState("");
  const [championName, setChampionName] = useState("");
  const [championInfo, setChampionInfo] = useState("");

  const clickEvent = () => {// Save 버튼을 눌렀을때 로컬스토리지에 저장 시키기 위한 이벤트 함수를 작성
    const saveChampion = {id: championId, name: championName, src: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`};
    // 저장할 데이터를 선언
    const saveData = JSON.parse(localStorage.getItem('championData')) || [];// OR 연산자를 사용해서 localStorage에 데이터가 존재하면 saveData에 데이터를 부여, 없으면 빈배열을 부여 
    const updateData = [...saveData, saveChampion];// saveData와 saveChampion을 같이 합쳐서 updateData에 부여
    localStorage.setItem('championData', JSON.stringify(updateData));//setItem메소드를 사용하여 localStorage에 저장.
    alert('챔피언이 저장 되었습니다!');
  }
  useEffect(() => {// 유즈이펙트를 이용해 2번의 api요청 중 2번째 api에서 가져온 정보가 있을때 랜더링 실행.
    if (championId !== "") {
      getChampInfo();
    }
  }, [championId]);
  const random = Math.floor(Math.random() * 165); // 챔피언의 배열을 랜덤으로 가져 올 랜덤 함수. 소수점을 자르기 위해 floor를 사용.

  const apirequest = async () => {
    // api 연결
    try {
      const response = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/13.23.1/data/ko_KR/champion.json`
      ); // 1번째 연결
      if (response.data.data) {
        // 데이터가 있으면 Id, Name을 저장
        const championsArray = Object.values(response.data.data);
        setChampions(championsArray.map((c) => c));
        setChampionId(champions[random].id);
        setChampionName(champions[random].name);
        console.log(championName);
      } else {
        console.log(`데이터를 찾을 수 없습니다.`);
      }
      //const apirequest2 = async () => { // api 연결
    } catch (e) {
      console.log(e);
    }
  };
  const getChampInfo = async () => {
    try {
      const response2 = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/13.23.1/data/ko_KR/champion/${championId}.json`
      ); // api요청

      setChampionInfo(response2.data.data[championId].blurb); // 챔피언 정보를 저장.
      console.log(championInfo);
    } catch (e) {
      console.log(e);
    }
  };
  if(championInfo){// championInfo가 true면 아래를 리턴
  return (
    <Container style={{backgroundColor: "#000000"}}>
      <Button onClick={apirequest}>Champion</Button>
      <LayOut>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`}
          alt={championName}
          style={{ width: "700px", height: "500px", borderRadius: "15px" }}
        />
        <InfoBox>
          <HorizontalBox>
            <BoldText>Name : </BoldText>
            <InfoText>{championName}</InfoText>
          </HorizontalBox>
          <HorizontalBox>
            <BoldText>Info : </BoldText>
            <InfoText> {championInfo}</InfoText>
          </HorizontalBox>
        </InfoBox>
      </LayOut>
      <Button onClick={clickEvent}>Save</Button>
    </Container>
    
  );
}else{// 없으면 아래의 리턴을 출력
  return(
    <Container style={{backgroundColor: "#000000"}}>
      <Button onClick={apirequest}>Champion</Button>
      <LayOut>
        <img
          src={`https://ojsfile.ohmynews.com/STD_IMG_FILE/2014/0323/IE001692752_STD.jpg`}
          alt={championName}
          style={{ width: "700px", height: "500px", borderRadius: "15px" }}
        />
            <div style={{fontSize: '22px', fontWeight: 'bold', width: '300px', color: 'white'}}>
              위의 "Champion" 버튼을 눌러 챔피언을 불러와 주세요!
              </div>
      </LayOut>
    </Container>
  );
};
};
