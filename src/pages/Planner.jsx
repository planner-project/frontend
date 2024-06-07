import SideBar from "../components/SideBar";
import GroupMember from "../components/GroupMember";
import Chat from "../components/Chat";
import { MainWrapper } from "../components/MainWrap";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from '@stomp/stompjs';
import PlanBoxItem from "../components/PlanBoxItem";

const Planner = () => {
  const [planBoxdata, setPlanBoxdata] = useState([]); 
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
      if(messageObject["type"] === "create-planBox") {
        return setPlanBoxdata(messageObject["message"]);
      }
      if(messageObject["type"] === "delete-planBox") {
        return setPlanBoxdata(messageObject["message"]);
      }
    });
  };

  return (
    <>
      <SideBar />
      <MainWrapper>
        <PlanBoxItem clients={client} plannerId={plannerId} data={planBoxdata} />
        <Chat clients={client} />
      </MainWrapper>
    </>
  );
}

export default Planner;

