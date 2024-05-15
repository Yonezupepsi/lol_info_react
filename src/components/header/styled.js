import styled from "styled-components";

export const StyledHeader = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 3px;
  padding: 30px;
  box-shadow: 0px 2px 5px #c9c9c9;
  color: black;
`;
export const HeaderContainer = styled.div`
    display:flex;
    justify-content: center;
    width:100vw;
`;

export const Navbar = styled.div`
    display: flex;
    padding: 20px 200px;
    gap: 100px;
    width: calc(100vh - 400px);
`;


export const HeaderContents = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    `


export const NavbarContents = styled.div`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
`;
