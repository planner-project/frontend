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
  StyledInputLike,
  BirthWrap,
} from "../components/Form.jsx";
import {
  StyledCalendarWrapper,
  StyledCalendar,
} from "../components/Calendar.jsx";
import { useState } from "react";

const Signup = () => {
  const [isShow, setIsShow] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [date, setDate] = useState();

  const handleOnClick = () => {
    setIsShow(!isShow);
  };

  const handleOnChange = (value) => {
    setIsShow(!isShow);
    setIsSelect(true);
    setDate(value);
  };
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
        <StyledInput placeholder="닉네임" $mb />
        <StyledInput placeholder="비밀번호" type="password" $mb />
        <BirthWrap>
          <StyledInputLike onClick={handleOnClick} $mb>
            {isSelect ? "" : "생년월일 8자리"}
            {date ? date.toLocaleDateString() : ""}
            <img src="images/calendar.png" />
          </StyledInputLike>

          {isShow && (
            <StyledCalendarWrapper>
              <StyledCalendar
                onClickDay={handleOnChange}
                onChange={setDate}
                value={date}
              />
            </StyledCalendarWrapper>
          )}
        </BirthWrap>

        <StyledBtn $fullWidth>가입하기</StyledBtn>
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
