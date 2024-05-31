import { DeleteBtn } from "./Button";
import { ListItem } from "./MemberListStyle";
import { Typo } from "./Typo";

const MemberListItem = () => {
  return (
    <ListItem>
      <Typo>수민#9392</Typo>
      <Typo>그룹장</Typo>
      <Typo>fastcampus@gmail.com</Typo>
      <DeleteBtn>
        <img src="images/delete.png" alt="delete" />
      </DeleteBtn>
    </ListItem>
  );
};

export default MemberListItem;
