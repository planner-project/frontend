import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-left: ${(props) => (props.$isopen ? "340px" : "0")};
  padding: 100px 50px;
  min-height: 100vh;
  background-color: #eaecf5;
  transition: 0.5s ease;
`;
