import { useState } from "react";
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
  const showModal = () => {
    setModalOpen(true);
  };
  function closeModal() {
    setModalOpen(false);
  }

  const [listOpen, setListOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setListOpen(value.length > 0);
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
              placeholder="닉네임이나 Email을 입력해 검색해주세요."
              value={inputValue}
              onChange={handleInputChange}
            />
            {listOpen && (
              <SearchList>
                <SearchListItem />
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
            <MemberListItem />
            <MemberListItem />
            <MemberListItem />
            <MemberListItem />
          </MemberList>
        </Modal>
      </MainWrapper>
    </>
  );
};

export default ModalTest;
