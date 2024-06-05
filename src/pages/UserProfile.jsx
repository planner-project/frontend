import styled from "styled-components";
import { MainWrapper } from "../components/MainWrap";
import SideBar from "../components/SideBar";
import { Typo } from "../components/Typo";
import { BlueBtn, ButtonWrapper, GrayBtn } from "../components/Button";
import { FormLine, InputLine } from "../components/FormLine";
import { useState } from "react";
import useUserStore from "../store";

const ProfileWrap = styled.div`
  padding: 50px;
  width: 70%;
  min-height: 320px;
  background: #fff;
  border-radius: 10px;
`;

const InfoWrap = styled.div`
  display: flex;
  gap: 50px;
`;

const ImageWrap = styled.div``;

const ImageProfile = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
`;

const Info = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

const InfoList = styled.li`
  width: 300px;
`;

const UserProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { user } = useUserStore();
  const [formData, setFormData] = useState({
    image: "images/retriever.jpeg",
    nickname: "이승헌 #2341",
    birthdate: "1234.05.06",
    email: "react1112@gmail.com",
    gender: "남성",
  });
  const changeEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <SideBar />
      <MainWrapper>
        <ProfileWrap>
          {isEdit ? (
            <>
              <FormLine>
                <InfoWrap>
                  <ImageWrap>
                    <ImageProfile src={formData.image} alt="profile" />
                    <InputLine type="file" onChange={handleImageChange} />
                  </ImageWrap>
                  <Info>
                    <InfoList>
                      <Typo
                        $size="0.8rem"
                        $color="#878787"
                        $margin="0 0 10px 0"
                      >
                        닉네임
                      </Typo>
                      <InputLine
                        name="nickname"
                        value={`${user.nickname} #${user.userTag}`}
                        onChange={handleInputChange}
                      />
                    </InfoList>
                    <InfoList>
                      <Typo
                        $size="0.8rem"
                        $color="#878787"
                        $margin="0 0 10px 0"
                      >
                        생년월일
                      </Typo>
                      <InputLine
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleInputChange}
                      />
                    </InfoList>
                    <InfoList>
                      <Typo
                        $size="0.8rem"
                        $color="#878787"
                        $margin="0 0 10px 0"
                      >
                        비밀번호
                      </Typo>
                      <InputLine
                        type="password"
                        name="password"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </InfoList>
                    <InfoList>
                      <Typo
                        $size="0.8rem"
                        $color="#878787"
                        $margin="0 0 10px 0"
                      >
                        성별
                      </Typo>
                      <InputLine
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                      />
                    </InfoList>
                  </Info>
                </InfoWrap>
                <ButtonWrapper $margin="50px 0 0" $gap="10px">
                  <BlueBtn onClick={changeEdit}>수정 완료</BlueBtn>
                  <GrayBtn onClick={changeEdit}>돌아가기</GrayBtn>
                </ButtonWrapper>
              </FormLine>
            </>
          ) : (
            <>
              <InfoWrap>
                <ImageProfile src={user.profileImgUrl} alt="profile" />
                <Info>
                  <InfoList>
                    <Typo $size="0.8rem" $color="#878787" $margin="0 0 10px 0">
                      닉네임
                    </Typo>
                    <Typo $size="1.2rem" $weight="bold">
                      {user.nickname} #{user.userTag}
                    </Typo>
                  </InfoList>
                  <InfoList>
                    <Typo $size="0.8rem" $color="#878787" $margin="0 0 10px 0">
                      생년월일
                    </Typo>
                    <Typo $size="1.2rem" $weight="bold">
                      {user.birthday}
                    </Typo>
                  </InfoList>
                  <InfoList>
                    <Typo $size="0.8rem" $color="#878787" $margin="0 0 10px 0">
                      이메일
                    </Typo>
                    <Typo $size="1.2rem" $weight="bold">
                      {user.email}
                    </Typo>
                  </InfoList>
                  <InfoList>
                    <Typo $size="0.8rem" $color="#878787" $margin="0 0 10px 0">
                      성별
                    </Typo>
                    <Typo $size="1.2rem" $weight="bold">
                      {user.gender}
                    </Typo>
                  </InfoList>
                </Info>
              </InfoWrap>
              <ButtonWrapper $margin="50px 0 0" $gap="10px">
                <BlueBtn onClick={changeEdit}>내 정보수정</BlueBtn>
                <GrayBtn>회원 탈퇴</GrayBtn>
              </ButtonWrapper>
            </>
          )}
        </ProfileWrap>
      </MainWrapper>
    </div>
  );
};

export default UserProfile;
