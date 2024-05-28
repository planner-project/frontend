import styled, { css } from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${(props) =>
    props.$gap &&
    css`
      gap: ${props.$gap};
    `}
  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
    ${(props) =>
    props.$display &&
    css`
      display: ${props.$display};
    `}
`;

const StyledBtn = styled.button`
  min-width: 100px;
  height: 50px;
  line-height: 50px;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  border: none;
  padding: 0 10px;
  border-radius: 10px;
  background-color: #d0d5dd;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;

const BlueBtn = styled(StyledBtn)`
  background-color: #1570ef;
  color: #fff;
  font-weight: normal;
  font-size: 1rem;
`;

const GrayBtn = styled(StyledBtn)`
  background-color: #a8a8a8;
  color: #fff;
  font-weight: normal;
  font-size: 1rem;
`;

const BlackBtn = styled(StyledBtn)`
  padding: 0 20px;
  min-width: auto;
  height: 28px;
  line-height: 28px;
  font-weight: normal;
  background-color: rgba(25, 25, 25, 0.65);
  color: #fff;
  font-size: 0.7rem;
  border-radius: 100px;
`;

const ImgBtn = styled.button`
  cursor: pointer;
  border: none;
  background: none;

  position: absolute;
  top: 30px;
  right: 30px;
  img {
    width: 24px;
  }
`;

export { StyledBtn, BlueBtn, BlackBtn, GrayBtn, ButtonWrapper, ImgBtn };
