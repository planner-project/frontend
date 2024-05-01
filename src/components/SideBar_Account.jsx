import { styled } from 'styled-components';

const AccountContainer = styled.div`
  width: 100%;
  height: 196px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-bottom: 1px #E0E0E0 solid;
`;

const Title = styled.p`
  width: 100%;
  height: 11px;
  text-align: left;
  font-size: 10px;
  font-family: 'Pretendard', serif;
  font-weight: medium;
  color: #878787;
`
const UserContainer = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  margin-top:20px;
  flex-direction: row;
  align-items: center;
`;

const UserImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: black;
`;

const UserInfoContainer = styled.div`
  height: 53px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const UserName = styled.p`
  width: 91px;
  height: 22px;
  font-family: 'Pretendard', serif;
  font-size: 18px;
`

const UserEmail = styled.p`
  text-overflow:ellipsis;
  overflow: hidden;
  width: 90px;
  height: 22px;
  font-family: 'Pretendard', serif;
  font-size: 18px;
  color: #909090;
`;

const LogoutContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 23px;
  background-color: #F5F5F5;
  padding: 0 11px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Icon = styled.img`
  width: 20px;
  height: 20px;
`
const LogoutP = styled.p`
  width: 48px;
  height: 15px;
  font-size: 13px;
  font-family: 'Pretendard', serif;
  color: #878787;
`
function SideBar_Account() {
  return (
    <AccountContainer>
      <Title>Account</Title>
      <UserContainer>
        <UserImg></UserImg>
        <UserInfoContainer>
          <UserName>수민#9392</UserName>
          <UserEmail>marisol03@naver.com</UserEmail>
        </UserInfoContainer>
      </UserContainer>
      <LogoutContainer>
        <Icon src={'../../public/logout.png'}></Icon>
        <LogoutP>로그아웃</LogoutP>
      </LogoutContainer>
    </AccountContainer>
  );
}

export default SideBar_Account;