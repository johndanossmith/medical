import React, { useEffect, useState } from "react";
import queryString from "query-string"; //used to get data from URL
import io from "socket.io-client";

import UserContainer from "./chat/UserContainer";
import InfoBar from "./chat/InfoBar";
import Input from "./chat/Input";
import Messages from "./chat/Messages";
import ScrollToBottom from "react-scroll-to-bottom";

import "./styles/Chatroom.css";

let socket;

const Chatroom = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "http://localhost:5000/";

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    }); //to send an event - join is event name and the values of name and room
    //are sent to backend

    return () => {
      console.log("=======>disconect");
      socket.emit("disconnected");
      socket.off();
    };
  }, [ENDPOINT]);

  //to update messages array whenever a message is sent by admin or user
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  //function for sending messages
  const sendMessage = (event) => {
    //to prevent refresh when we press key
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div>
      <div className="outer">
        <div className="chat-container">
          <div className="search-container" style={{ background: "#74b816" }}>
            <h1 className="text-4xl font-semibold">Chat App</h1>
          </div>

          <div className="conversation-list" style={{ background: "#74b816" }}>
            <UserContainer users={users} />
          </div>

          <div
            className="new-message-container"
            style={{ background: "#74b816" }}
          ></div>

          <div className="chat-title">
            <InfoBar room={room} />
          </div>

          <ScrollToBottom className="chat-message-list">
            <Messages messages={messages} name={name} />
          </ScrollToBottom>

          <div className="chat-form">
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
