import { styled } from 'styled-components';
import { Typo } from './Typo';
import useUserStore from '../store';

const GroupMemberContainer = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
`;

const GroupMemberProfile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin: 2px;
  background-color: black;
`

const GroupMember = () => {
  const { user } = useUserStore();
  
  console.log(user);
  return(
    <GroupMemberContainer>
      <Typo $size={"24px"} $margin={"14px"} $weight={"Bold"}>그룹멤버</Typo>
      <GroupMemberProfile src={user.profileimgUrl}></GroupMemberProfile>
    </GroupMemberContainer>
  )
};

export default GroupMember;