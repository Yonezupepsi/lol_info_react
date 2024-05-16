import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* 사진 아래에 텍스트가 나오도록 */
  padding: 20px;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 20px;
  width: calc(18% - 10px);
`;

export const Text = styled.div`
  margin-top: 10px; /* 사진과 텍스트 사이 여백 조절 */
  font-size: 18px;
  color: white;
`;