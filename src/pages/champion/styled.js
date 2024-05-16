import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const PageContainer = styled.div`
  padding: 20;
  background-color: black;
`
export const Button = styled.div`
  align-items: center;
  width: 100px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  border-radius: 15px;
  background-color: #c9c9c9;
  color: black;
  cursor: pointer;
  padding: 10px 30px;
  &:hover {
    background-color: #FFFF00;
    color: black;
  }
  margin: 30px 700px; /* 위아래는 30px, 좌우는 auto로 설정하여 가운데 정렬 */
`;