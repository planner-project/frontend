import { StyledBtn } from "../components/Button.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  StyledFormLayout,
  StyledForm,
  StyledTitle,
  StyledCaption,
  StyledLink,
  StyledInput,
  StyledParagraph,
  ImageWrap,
} from "../components/Form.jsx";

const Login = () => {
  const navigate = useNavigate();
  const session = window.sessionStorage.getItem("Authorization");
  const [isLoggedIn, setIsLoggedIn] = useState(session ? true : false);

    useEffect(() => {
      if(isLoggedIn) {
        navigate("/dashBoard");
      }
    }, [isLoggedIn, navigate]);

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleUserData = (event) => {
    const {name, value} = event.target;

    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleNullInput = (event) => {
    const value = event.target.value;

    if(value === '') {
      toast.error("입력이 비어있습니다.");
      event.target.style.border = '1px solid red';
    } else {
      event.target.style.border = '1px solid #98a2b3';
    }
  }

  const handleLogin = (event) => {
    event.preventDefault();

    const userLoginData = {
      email: userData.email,
      password: userData.password,
    };

    if(!(userData.email !== '' && userData.password !== '')) {
      toast.error("모든 칸을 입력해주세요.");
    } else {
      axios.post('http://localhost:8080/api/v1/auth/login?_csrf=b3FAPxvmharHeYhDiCAkkpyxBixIdFmexBEJihUNsGjz1vZODEQmWyzWtJ3qHLom6Q0Qq6TSKxV_QG2zoShquiNriFrEtMd_ HTTP/1.1', userLoginData)
      .then(response => {
        if(response.status === 200) {
          toast("로그인이 정상 처리 되었습니다.");
          sessionStorage.setItem("Authorization", response.headers.authorization);
        }
      })
      .catch(() => {
        toast.error("로그인에 실패하였습니다.");
      });
    }
  }

  return (
    <StyledFormLayout>
      <ToastContainer></ToastContainer>
      <StyledForm>
        <StyledTitle>로그인</StyledTitle>
        <StyledInput name="email" placeholder="Email" mt onChange={handleUserData} onBlur={handleNullInput}/>
        <StyledInput name="password" placeholder="비밀번호" type="password" mt onChange={handleUserData} onBlur={handleNullInput}/>
        <StyledCaption textLeft>
          비밀번호를 잊으셨나요?{" "}
          <StyledLink to="/login">비밀번호 찾기</StyledLink>
        </StyledCaption>
        <StyledBtn fullWidth onClick={handleLogin}>로그인</StyledBtn>
        <StyledCaption textLeft>
          아이디가 없으신가요?{" "}
          <StyledLink to="/signup">회원가입 하러가기</StyledLink>
        </StyledCaption>
        <StyledParagraph>소셜 로그인</StyledParagraph>
        <ImageWrap>
          <img
            src="images/google-logo.png"
            alt="구글 로그인"
            role="button"
            aria-label="구글로 로그인 하기"
          />
          <img
            src="images/kakao-logo.png"
            alt="구글 로그인"
            role="button"
            aria-label="구글로 로그인 하기"
          />
        </ImageWrap>
      </StyledForm>
    </StyledFormLayout>
  );
};

export default Login;
