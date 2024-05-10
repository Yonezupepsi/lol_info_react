import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LayOut = styled.div`
  padding: 10px 100px;
  display: flex;
  width: calc(100% - 300px);
  gap: 100px;
  align-items: flex-start;
  height: 600px;
`;

export const InfoBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-center;
    gap:40px;
`;

export const HorizontalBox = styled.div`
  display: flex;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  padding: 10px 30px;
`;

export const BoldText = styled.div`
  font-size: 22px;
  font-weight: bold;
  width: 100px;
`;
export const InfoText = styled.div`
  font-size: 20px;
  padding: 10px;
  width: 300px;
`;

export const Button = styled.div`
  font-size: 25px;
  font-weight: bold;
  border-radius: 15px;
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 10px 30px;
  &:hover {
    background-color: #c9c9c9;
    color: black;
  }
  margin: 30px;
`;
