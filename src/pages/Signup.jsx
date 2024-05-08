import { StyledBtn, BlueBtn } from "../components/Button.jsx";
import {
  StyledFormLayout,
  StyledForm,
  StyledTitle,
  StyledCaption,
  StyledLink,
  StyledInput,
  StyledFlexWrap,
  StyledParagraph,
  ImageWrap,
} from "../components/Form.jsx";

const Signup = () => {
  return (
    <StyledFormLayout>
      <StyledForm>
        <StyledTitle>회원가입</StyledTitle>
        <StyledCaption>
          이미 아이디가 있으신가요?{" "}
          <StyledLink to="/login">로그인 하러가기</StyledLink>
        </StyledCaption>
        <StyledFlexWrap>
          <StyledInput placeholder="Email" />
          <BlueBtn>Email 인증</BlueBtn>
        </StyledFlexWrap>
        <StyledInput placeholder="닉네임" mb />
        <StyledInput placeholder="비밀번호" type="password" mb />
        <StyledInput placeholder="생년월일 8자리" maxLength={8} mb />
        <StyledBtn fullWidth>가입하기</StyledBtn>
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

export default Signup;
