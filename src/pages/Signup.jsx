import { StyledBtn, BlueBtn } from "../components/Button.jsx";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    nickname: "",
    birthday: [],
  });

  const handleOnClick = () => {
    setIsShow(!isShow);
  };

  const handleOnChange = (value) => {
    setIsShow(!isShow);
    setIsSelect(true);

    const year = value.getFullYear();
    const month = value.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
    const day = value.getDate();

    setUserData((prevUserData) => ({
      ...prevUserData,
      birthday: [year, month, day],
    }));
  };

  const handleUserDataChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleEmailToast = (event) => {
    const email = event.target.value;

    if (!email.includes("@")) {
      toast.error("이메일 형식이 올바르지 않습니다.");
      event.target.style.border = "1px solid red";
    } else {
      event.target.style.border = "1px solid #98a2b3";
    }
  };

  const handlePasswordToast = (event) => {
    const password = event.target.value;

    if (!(password.length >= 8 && password.length <= 20)) {
      toast.error("비밀번호는 8 - 20자리여야 합니다.");
      event.target.style.border = "1px solid red";
    } else {
      event.target.style.border = "1px solid #98a2b3";
    }

    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

    if (!(hasLetter && hasNumber && hasSpecial)) {
      toast.error("비밀번호는 영어, 숫자, 특수문자로 이루어져야 합니다.");
      event.target.style.border = "1px solid red";
    } else {
      event.target.style.border = "1px solid #98a2b3";
    }
  };

  const handleNicknameToast = (event) => {
    const nickname = event.target.value;

    if (!(nickname.length >= 2 && nickname.length <= 12)) {
      toast.error("닉네임은 2 - 12자리여야 합니다.");
      event.target.style.border = "1px solid red";
    } else {
      event.target.style.border = "1px solid #98a2b3";
    }

    const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(nickname);

    if (hasSpecial) {
      toast.error("닉네임은 특수문자를 포함하지 않아야 합니다.");
      event.target.style.border = "1px solid red";
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();

    const userSignData = {
      email: userData.email,
      password: userData.password,
      nickname: userData.nickname,
      birthday: userData.birthday,
    };

    if (
      !(
        userData.email !== "" &&
        userData.password !== "" &&
        userData.nickname !== "" &&
        userData.birthday.length !== 1
      )
    ) {
      toast.error("모든 칸을 입력해주세요.");
    } else {
      axios
        .post(
          "http://localhost:8080/api/v1/auth/signup?_csrf=Z0w1KzCCJZHEpRwIIkfYjx2zQ5CiNUnCHM2S16OGJkjTfaPzVXwFH1a6Rqjpxi85EWrs7iyAbqmQVnHvf6j345LgQ3nkHJDD HTTP/1.1",
          userSignData
        )
        .then((response) => {
          if (response.status === 200) {
            toast("회원가입이 정상 처리 되었습니다.");
          }
        })
        .catch(() => {
          toast.error("회원가입에 실패하였습니다.");
        });
    }
  };

  return (
    <StyledFormLayout>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <StyledForm>
        <StyledTitle>회원가입</StyledTitle>
        <StyledCaption>
          이미 아이디가 있으신가요?{" "}
          <StyledLink to="/login">로그인 하러가기</StyledLink>
        </StyledCaption>
        <StyledFlexWrap>
          <StyledInput
            name={"email"}
            placeholder="Email"
            onChange={handleUserDataChange}
            onBlur={handleEmailToast}
          />
          <BlueBtn>Email 인증</BlueBtn>
        </StyledFlexWrap>
        <StyledInput
          name={"nickname"}
          placeholder="닉네임"
          $mb
          onChange={handleUserDataChange}
          onBlur={handleNicknameToast}
        />
        <StyledInput
          name={"password"}
          placeholder="비밀번호"
          type="password"
          $mb
          onChange={handleUserDataChange}
          onBlur={handlePasswordToast}
        />
        <BirthWrap>
          <StyledInputLike name={"birthday"} onClick={handleOnClick} $mb>
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

        <StyledBtn $fullWidth onClick={handleSignup}>
          가입하기
        </StyledBtn>
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
