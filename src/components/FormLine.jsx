import styled, { css } from "styled-components";

const FormLine = styled.form``;

const InputLine = styled.input`
  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
  width: 70%;
  height: 35px;
  background: none;
  color: #000;
  border: none;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
  font-size: 1.1rem;
  &::placeholder {
    color: #98a2b3;
    font-size: 1rem;
  }
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.type === "file" &&
    css`
      margin: 20px 0 0;
      border: none;
      font-size: 0.8rem;
    `}
`;

export { FormLine, InputLine };
