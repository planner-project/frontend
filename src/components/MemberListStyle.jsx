import styled, { css } from "styled-components";

const MemberList = styled.ul`
  padding: 40px 0;
`;

const ListItem = styled.li`
  padding: 0 10px;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cfcfcf;
  & > :nth-child(1) {
    flex: 1;
  }

  & > :nth-child(2) {
    flex: 1;
  }
  & > :nth-child(3) {
    flex: 2;
  }

  & > :nth-child(2) {
    flex: 1;
  }
  ${(props) =>
    props.$head &&
    css`
      font-size: 1.1rem;
      margin-bottom: 10px;
      font-weight: bold;
      border: none;
    `}
    ${(props) =>
    props.$img &&
    css`
      background-image: url(${props.$img});
      background-size: cover;
      background-position: center;
    `}
`;

export { MemberList, ListItem };
