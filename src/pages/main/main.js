import React, { useState } from "react";
import axios from 'axios';

export const Main = () => {
    const [championName, setChampionName] = useState("");
    const [championNumber, setChampionNumber] = useState(1);
    
    const champions = ["Aatrox", "Ahri", "Akali", "TwistedFate", "Udyr", "Urgot"];
    const random = Math.floor(Math.random()*5);

const apirequest = async (random) => {
    try {
        const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.23.1/data/ko_KR/champion/${champions[random]}` + '.json');
        if (response.data.data[champions[random]].id) {
            console.log(response.data.data[champions[random]].name);
            //localStorage.setItem("championName", response.data.data[championName].id);
        } else {
            console.log(`${champions[random]} 데이터를 찾을 수 없습니다.`);
        }
    } catch (e) {
        console.log(e);
    }
    //{{setPokemonNumber(Math.floor(Math.random()*5)); apirequest();}}
};

// 챔피언에 대한 정보를 가져오려면:
return(

        <div onClick={apirequest(random)}>Champion</div>
    )
}