import SideBar from "../components/SideBar";
import { styled } from 'styled-components';
import GroupMember from "../components/GroupMember";
import Chat from "../components/Chat";
import { MainWrapper } from "../components/MainWrap";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from '@stomp/stompjs';
import PlanBoxItem from "../components/PlanBoxItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-top: 100px;
`

const Planner = () => {
  const [planBoxdata, setPlanBoxdata] = useState([]);
  const [chatData, setChatData] = useState([]);
  const location = useLocation();
  const plannerId = location.state.plannerId;
  const token = sessionStorage.getItem("Authorization").split(" ")[1];
  const socketURL = `http://localhost:8080/ws?token=${token}`;
  const client = useRef(null);

  useEffect(() => {
    client.current = new Client({
      webSocketFactory: () => new SockJS(socketURL),
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000, // Corrected spelling from heartbeatOutcoming
    });

    client.current.onConnect = () => {
      console.log("Connected");
      subscribe();
    };

    client.current.onDisconnect = () => {
      console.log("Disconnected");
    };

    client.current.onStompError = (frame) => {
      console.error('Broker reported error: ' + frame.headers['message']);
      console.error('Additional details: ' + frame.body);
    };

    client.current.activate();

    return () => {
      if(client.current) {
        client.current.deactivate();
      }
    }
  }, [socketURL]);

  const subscribe = () => {
    const subscriptionURL = `/sub/planner/${plannerId}`;

    client.current.subscribe(subscriptionURL, (response) => {
      const messageObject = JSON.parse(response.body);
      console.log(messageObject);
      if(messageObject["type"].includes("plan")) {
        setPlanBoxdata(messageObject["message"]);
      }
      if(messageObject["type"] === "chat") {
        setChatData(messageObject["message"]);
      }
    });
  };

  return (
    <>
      <SideBar />
      <MainWrapper>
      <GroupMember plannerId={plannerId}></GroupMember>
      <Wrapper>
        <PlanBoxItem clients={client} plannerId={plannerId} data={planBoxdata} />
        <Chat clients={client} data={chatData} plannerId={plannerId} />
      </Wrapper>
      </MainWrapper>
    </>
  );
}

export default Planner;

