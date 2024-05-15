import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 34px;
  align-items: center;
`;
export const Text = styled.div`
  text-align: center;
  font-size: 20px;
`;
export const Img = styled.div`
  display: flex;
  border: 1px solid #c9c9c9;
  border-radius: 20px;
  background-color: #333333;
  background-image: url(${(props) => props.src});
`;
