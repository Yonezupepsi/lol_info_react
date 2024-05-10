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
  const [champions, setChampions] = useState("");
  const [championId, setChampionId] = useState("");
  const [championName, setChampionName] = useState("");
  const [championInfo, setChampionInfo] = useState("");
  useEffect(() => {
    if (championId !== "") {
      getChampInfo();
    }
  }, [championId]);
  //const champions = ["Aatrox", "Ahri", "Akali", "TwistedFate", "Udyr", "Urgot"];
  const random = Math.floor(Math.random() * 165); // 챔피언의 배열을 랜덤으로 가져옴.

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
        // if(response2.data.data[championId]){
        //const [championImg, setChampionImg] = useState();
        //localStorage.setItem("championName", response.data.data[championName].id);
        //setChampionInfo(champions[random].title && champions[random].blurb && champions[random].);
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

  // apirequest
  // const apirequest2 = async () => { // api 연결

  // if (championId) {//championId가 있으면 api 요청
  //             const response2 = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.23.1/data/ko_KR/champion/${championId}.json`);// api요청
  //     try {
  //         setChampionInfo(response2.data.data[championId].blurb);// 챔피언 정보를 저장.
  //         console.log(championInfo);// 챔피언 정보 콘솔창 출력

  //     } catch (e) {
  //         console.log(e);
  //     }

  //     } else {
  //         console.log(`데이터를 찾을 수 없습니다.`);
  // }
  // apirequest2

  // 챔피언에 대한 정보를 출력
  return (
    <Container>
      <Button onClick={apirequest}>Champion</Button>
      <LayOut>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`}
          alt={championName}
          style={{ width: "500px", height: "500px", borderRadius: "15px" }}
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
    </Container>
  );
};
