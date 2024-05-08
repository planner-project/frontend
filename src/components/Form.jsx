import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFormLayout = styled.section`
  position: relative;
  height: 100vh;
  background-color: #fcfcfd;
  text-align: center;
`;

const StyledForm = styled.form`
  padding: 60px;
  width: 35%;
  min-width: 300px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid #d0d5dd;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
`;

const StyledCaption = styled.p`
  text-align: ${(props) => (props.textLeft ? "left" : "center")};
  margin: 20px 0 40px;
  font-size: 1.2rem;
  color: #475467;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledInput = styled.input`
  margin-bottom: ${(props) => (props.mb ? "30px" : "0")};
  margin-top: ${(props) => (props.mt ? "30px" : "0")};
  padding: 0 20px 0;
  width: 100%;
  height: 50px;
  border: 1px solid #98a2b3;
  border-radius: 12px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  &[type="date"]::before {
    content: attr(data-placeholder);
    width: 100%;
  }
  &[type="date"]:focus::before,
  &[type="date"]:valid::before {
    display: none;
  }
`;

const StyledFlexWrap = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 15px;
`;

const StyledParagraph = styled.p`
  margin: 40px 0;
  color: #475467;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 35%;
    height: 1px;
    background-color: #475467;
  }

  &:before {
    left: 0;
    transform: translateY(-50%);
  }

  &:after {
    right: 0;
    transform: translateY(-50%);
  }
`;

const ImageWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  & > img {
    cursor: pointer;
  }
`;

export {
  StyledFormLayout,
  StyledForm,
  StyledTitle,
  StyledCaption,
  StyledLink,
  StyledInput,
  StyledFlexWrap,
  StyledParagraph,
  ImageWrap,
};
