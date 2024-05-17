import React from "react";
import { StyledHeader } from "./styled";
import { Link } from "react-router-dom";

export const Head = () => {
    return (
        <>
            <StyledHeader>
                <Link to={"/"} style={{color: "black", textDecoration: "none"}}><div>League of Legends Champions</div></Link>
            </StyledHeader>
        </>
    )
}