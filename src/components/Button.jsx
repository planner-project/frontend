import styled from "styled-components";

const StyledBtn = styled.button`
  min-width: 100px;
  height: 50px;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  border: none;
  padding: 0 10px;
  border-radius: 10px;
  background-color: #d0d5dd;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
`;

const BlueBtn = styled(StyledBtn)`
  background-color: #1570ef;
  color: #fff;
  font-weight: normal;
  font-size: 1rem;
`;

export { StyledBtn, BlueBtn };
