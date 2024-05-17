import styled, { css } from "styled-components";

export const Typo = styled.p`
  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
  ${(props) =>
    props.$size &&
    css`
      font-size: ${props.$size};
    `}
    ${(props) =>
    props.$color &&
    css`
      color: ${props.$color};
    `}
    ${(props) =>
    props.$weight &&
    css`
      font-weight: ${props.$weight};
    `}
    ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;
