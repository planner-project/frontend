import { StyledBtn } from "../components/Button.jsx";
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
  return (
    <StyledFormLayout>
      <StyledForm>
        <StyledTitle>로그인</StyledTitle>
        <StyledInput placeholder="Email" mt />
        <StyledInput placeholder="비밀번호" type="password" mt />
        <StyledCaption textLeft>
          비밀번호를 잊으셨나요?{" "}
          <StyledLink to="/login">비밀번호 찾기</StyledLink>
        </StyledCaption>
        <StyledBtn fullWidth>로그인</StyledBtn>
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
