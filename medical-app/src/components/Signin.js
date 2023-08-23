import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Signin.css";

const Signin = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="OuterContainer">
      <div className="InnerContainer">
        <h2 className="heading">&#xf270; Chat Room</h2>
        <div className="input-form">
          <h2>
            Name:
            <input
              placeholder="Enter your Name"
              className="Inputbox Namebox"
              type="text"
              onChange={(event) => setName(event.target.value)}
            ></input>{" "}
          </h2>
          <h2>
            Room:
            <input
              placeholder="Enter RoomID"
              className="Inputbox Roombox"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            ></input>
          </h2>
        </div>
        <div className="flex justify-center">
          <Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chatroom?name=${name}&room=${room}`}
          >
            <button className="w-full btn btn-success mx-6 text-2xl">
              Join Chat
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Signin;
