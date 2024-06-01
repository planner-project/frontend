import { useState } from "react";
import axios from "axios";
import { MainWrapper } from "../components/MainWrap";
import SideBar from "../components/SideBar";
import Modal from "react-modal";
import { SearchInput, SearchList, SearchWrap } from "../components/SearchInput";
import SearchListItem from "../components/SearchListItem";
import { ListItem, MemberList } from "../components/MemberListStyle";
import MemberListItem from "../components/MemberListItem";
import { Typo } from "../components/Typo";
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
    "nickname" : "",
    "userTag" : "",
    "email" : "",
  });
  const showModal = () => {
    setModalOpen(true);
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

  return (
    <>
      <SideBar />
      <MainWrapper>
        <button onClick={showModal}>그룹 추가</button>
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
                  email={searchUser.email}/>
                }
              </SearchList>
            )}
          </SearchWrap>
          <MemberList>
            <ListItem $head>
              <Typo>닉네임</Typo>
              <Typo>팀원 역할</Typo>
              <Typo>Email</Typo>
              <Typo>삭제</Typo>
            </ListItem>
            <MemberListItem />
          </MemberList>
        </Modal>
      </MainWrapper>
    </>
  );
};

export default ModalTest;
