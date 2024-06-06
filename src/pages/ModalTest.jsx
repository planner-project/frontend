import { useState, useEffect } from "react";
import axios from "axios";
import { MainWrapper } from "../components/MainWrap";
import SideBar from "../components/SideBar";
import Modal from "react-modal";
import { SearchInput, SearchList, SearchWrap } from "../components/SearchInput";
import SearchListItem from "../components/SearchListItem";
import { ListItem, MemberList } from "../components/MemberListStyle";
import MemberListItem from "../components/MemberListItem";
import { Typo } from "../components/Typo";
import useUserStore from "../store";
import { GroupMemberAddBtn } from "../components/Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "50px",
    borderRadius: "10px",
    transform: "translate(-50%, -50%)",
    minWidth: "700px",
    minHeight: "620px",
  },
  overlay: {
    zIndex: "10",
  },
};

const ModalTest = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchUser, setSearchUser] = useState({
    "userId": "",
    "nickname" : "",
    "userTag" : "",
    "email" : "",
  });
  const [member, setMember] = useState([]);
  const showModal = () => {
    setModalOpen(true);
    fetchMember();
  };
  function closeModal() {
    setModalOpen(false);
  }

  const [listOpen, setListOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const searchEmail = (value) => {
    const token = sessionStorage.getItem("Authorization");

    axios.get(`http://localhost:8080/api/v1/users?email=${value}`, {
      headers: {
        Authorization: token,
      }
    })
    .then((response) => {
      console.log(response);
      console.log(response.data);
      setSearchUser({
        "userId": response.data[0].userId,
        "nickname": response.data[0].nickname,
        "userTag": response.data[0].userTag,
        "email": value,
      })
    })
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setListOpen(value.length > 0);

    if(value.includes("com") && value.includes("@")) {
      searchEmail(value);
    }
  };

  const token = sessionStorage.getItem("Authorization");
  const { user } = useUserStore();
  
  const addMember = () => {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const userId = {
      userId: searchUser.userId,
    }
    axios.post(`http://localhost:8080/api/v1/users/${user.userId}/planners/1/group`, 
    userId, 
    config)
    .then(response => {
      fetchMember();
      console.log(member)
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
    setListOpen(false);
  }
  
  const fetchMember = async() => {
    const config = {
      headers: {
        Authorization: token,
      }
    };
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/users/${user.userId}/planners/1/group`,
        config
      );
      setMember(response.data);
      console.log(member);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SideBar />
      <MainWrapper>
        <GroupMemberAddBtn onClick={showModal}>+</GroupMemberAddBtn>
        <Modal
          isOpen={modalOpen}
          style={customStyles}
          ariaHideApp={false}
          onRequestClose={closeModal}
        >
          <SearchWrap>
            <SearchInput
              placeholder="Email을 입력해 검색해주세요."
              value={inputValue}
              onChange={handleInputChange}
            />
            {listOpen && (
              <SearchList>
                { searchUser.nickname !== "" &&
                  <SearchListItem 
                  nickname={searchUser.nickname} 
                  userTag={searchUser.userTag}
                  email={searchUser.email}
                  onClick={addMember}/>
                }
              </SearchList>
            )}
          </SearchWrap>
          <MemberList>
            <ListItem $head>
              <Typo>닉네임</Typo>
              <Typo>팀원 역할</Typo>
              <Typo>유저 태그</Typo>
              <Typo>삭제</Typo>
            </ListItem>
            {
              member.map((user) => (
              <MemberListItem
                key={user.groupMemberId}
                groupMemberId={user.groupMemberId}
                nickname={user.nickname}
                isHost={user.isHost ? "그룹장" : "멤버"}
                userTag={"#" + user.userTag}
                fetchMember={fetchMember}
              />
          ))}
          </MemberList>
        </Modal>
      </MainWrapper>
    </>
  );
};

export default ModalTest;
