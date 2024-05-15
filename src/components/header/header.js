import React from "react";
import { StyledHeader } from "./styled";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const Head = () => {
    // const navigate = useNavigate()
    return (
        <>
            <StyledHeader>
                <Link to={"/"} style={{color: "black", textDecoration: "none"}}><div>League of Legends Champions</div></Link>
            </StyledHeader>
        </>
    )
}