import { DeleteBtn } from "./Button";
import { ListItem } from "./MemberListStyle";
import { Typo } from "./Typo";

const MemberListItem = ({nickname, isHost ,userTag}) => {
  return (
    <ListItem>
      <Typo>{nickname}</Typo>
      <Typo>{isHost}</Typo>
      <Typo>{userTag}</Typo>
      <DeleteBtn>
        <img src="images/delete.png" alt="delete" />
      </DeleteBtn>
    </ListItem>
  );
};

export default MemberListItem;
