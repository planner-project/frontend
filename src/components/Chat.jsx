import { useState, useEffect } from 'react';
import Modal from "react-modal";
import styled, { css } from 'styled-components';
import { StyledInput } from './Form';
import useUserStore from '../store';
import { Typo } from './Typo';

const ChatButton = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 85px;
  background-color: rgb(21, 112, 239);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatContainer = styled.div`
  width: 426px;
  display: flex;
  flex-direction: column;
  align-items: end;
  overflow-y: hidden;
`;

const MessageContainer = styled.div`
  width: 426px;
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow-y: scroll;
`

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
  flex-direction: column;
  ${(props) =>
    props.$align &&
    css`
      align-items: ${props.$align};
    `}
`;

const UserMessageContainer = styled.div`
  width: 151px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  ${(props) =>
    props.$backgroundColor &&
    css`
      background-color: ${props.$backgroundColor};
    `}
`;

const Message = styled.p`
  font-size: 9px;
`;

const Chat = ({clients, data, plannerId}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [messageContent, setMessageContent] = useState('');
  const [messages, setMessages] = useState([]);
  const client = clients;
  const { user } = useUserStore();

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (data) {
      let object = {
        ...data,
        isMe: data.userId && data.userId === user.userId,
      };
      if (!Object.values(object).includes(undefined)) {
        setMessages((prevMessages) => [...prevMessages, object]);
      }
    }
  }, [data]);
  
  const publish = () => {
    try {
      const message = {
        userId: user.userId,
        nickname: user.nickname,
        profileImgUrl: user.profileImgUrl,
        message: messageContent,
      };
      client.current.publish({
        destination: `/pub/planner/${plannerId}/chat/send`,
        body: JSON.stringify(message),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      publish();
    }
  };

  return (
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
        <MessageContainer>
        {messages.length > 0 && messages.map((message, index) => (
          <MessageWrapper key={index} $align={message.isMe ? "end" : "start"}>
            <Typo>{message.nickname}</Typo>
            <UserMessageContainer $backgroundColor={message.isMe ? "blue" : "gray"}>
              <Message>{message.message}</Message>
            </UserMessageContainer>
          </MessageWrapper>
        ))}
        </MessageContainer>
        <StyledInput
          onChange={(e) => setMessageContent(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
        />
      </Modal>
    </ChatContainer>
  );
};

export default Chat;
