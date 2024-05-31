import { useState } from 'react';
import Modal from "react-modal";
import styled, { css } from 'styled-components';

const ChatButton = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 85px;
  background-color: #1570EF;
  margin-top: 590px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ChatContainer = styled.div`
  width: 426px;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-left: 55vw;
  overflow-y: hidden;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "80%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "50px",
    borderRadius: "45px",
    transform: "translate(-50%, -50%)",
    minWidth: "500px",
    minHeight: "650px",
  },
  overlay: {
    zIndex: "10",
  },
};
const MessageWrapper = styled.div`
  display: flex;
  ${(props =>
    props.$justify &&
    css`
      justify-content: ${props.$justify};
    `
  )}
`
const UserMessageContainer = styled.div`
  width: 151px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  ${(props =>
    props.$backgroundColor &&
    css`
      background-color: ${props.$backgroundColor};
    `
  )}
`;

const Message = styled.p`
  font-size: 9px;
`;


const Chat = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  return(
    <ChatContainer>
      <ChatButton onClick={showModal}>
        <img src="../../message.png" alt="메시지 로고" />
      </ChatButton>
      <Modal
        isOpen={modalOpen}
        style={customStyles}
        ariaHideApp={true}
        onRequestClose={closeModal}
        >
        <MessageWrapper>
          <UserMessageContainer>
            <Message>gd</Message>
          </UserMessageContainer>
        </MessageWrapper>
      </Modal>
    </ChatContainer>
  );
}

export default Chat;