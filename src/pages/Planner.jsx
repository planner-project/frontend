import SideBar from "../components/SideBar";
import GroupMember from "../components/GroupMember";
import Chat from "../components/Chat";
import { MainWrapper } from "../components/MainWrap";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from '@stomp/stompjs';

const Planner = () => {
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
      heartbeatOutcoming: 4000,
    });

    client.current.onConnect = () => {
      console.log("Connected");
      subscribe();
    }

    client.current.onDisconnect = () => {
      console.log("Disconnected");
    }

    client.current.onStompError = (frame) => {
      console.error('Broker reported error: ' + frame.headers['message']);
      console.error('Additional details: ' + frame.body);
    }

    client.current.activate();

    return () => {
      if(client.current) {
        client.current.deactivate();
      }
    }
  }, []);

  const subscribe = () => {
    const subscriptionURL = `/sub/planner/${plannerId}`;

    client.current.subscribe(subscriptionURL, (response) => {
      const messageObject = JSON.parse(response.body);
    })
  }

  return (
    <>
      <SideBar></SideBar>
      <MainWrapper>
      <GroupMember></GroupMember>
      <Chat clients={client}></Chat>
      </MainWrapper>
    </>
  )
}

export default Planner;