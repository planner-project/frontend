import { DeleteBtn } from "./Button";
import { ListItem } from "./MemberListStyle";
import { Typo } from "./Typo";

const MemberListItem = ({nickname, isHost ,email}) => {
  return (
    <ListItem>
      <Typo>{nickname}</Typo>
      <Typo>{isHost}</Typo>
      <Typo>{email}</Typo>
      <DeleteBtn>
        <img src="images/delete.png" alt="delete" />
      </DeleteBtn>
    </ListItem>
  );
};

export default MemberListItem;
