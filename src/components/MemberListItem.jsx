import { DeleteBtn } from "./Button";
import { ListItem } from "./MemberListStyle";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Typo } from "./Typo";
import useUserStore from "../store";
import axios from "axios";

const MemberListItem = ({nickname, isHost ,userTag, fetchMember, groupMemberId}) => {
  const MySwal = withReactContent(Swal);
  const { user } = useUserStore();
  const token = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const groupMember = {
    groupMemberId,
  }

  const deleteHandler = () => {
    MySwal.fire({
      text: "그룹 멤버를 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "네",
      cancelButtonText: "아니요!",
    }).then(async (result) => {
      if(result.isConfirmed) {
        try{
          await axios.patch(
            `http://localhost:8080/api/v1/users/${user.userId}/planners/1/group`,
            groupMember,
            config
          );
          fetchMember();
        }
        catch (error) {
          console.log(error);
        }
      }
    })
  }
  
  return (
    <ListItem>
      <Typo>{nickname}</Typo>
      <Typo>{isHost}</Typo>
      <Typo>{userTag}</Typo>
      <DeleteBtn onClick={deleteHandler}>
        <img src="images/delete.png" alt="delete" />
      </DeleteBtn>
    </ListItem>
  );
};

export default MemberListItem;
