import React from "react";
import { Link } from "react-router-dom";
import { Container, Text, Img } from "./styled";

export const Card = (props) => {
  console.log(props);
  return (
    <Img>
      <Container className="Card">
        <Link
          to={props.path}
          style={{ color: "white", textDecoration: "none" }}
        >
          <Img
            style={{ width: props.styleW, height: props.styleH }}
            alt={props.alt}
            src={props.src}
          />
          <Text>{props.text}</Text>
        </Link>
      </Container>
    </Img>

    // <Img>
    // <Container>
    //         <Link to="/info" style={{color: "white", textDecoration: "none"}}>

    //             <img
    //                 style={{ width: "440px", height: "500px" }}
    //                 alt="League of Legends"
    //                 src="src/components/cardinfo/cardinfo.js"
    //         />
    //             <Text>자신만의 챔피언을 찾아보세요!</Text>
    //         </Link>
    // </Container>
    // </Img>
  );
};
