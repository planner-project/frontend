import styled, { css } from "styled-components";

const FormLine = styled.form``;

const InputLine = styled.input`
  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
  padding: 0 10px 0;
  width: 70%;
  height: 35px;
  background: none;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  box-sizing: border-box;

  &::placeholder {
    color: #98a2b3;
    font-size: 1rem;
  }
  &:focus {
    outline: none;
  }
`;

export { FormLine, InputLine };
