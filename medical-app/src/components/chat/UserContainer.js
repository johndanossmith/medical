import { React } from "react";
import "../styles/UserContainer.css";
import onlineIcon from "../images/onlineIcon.png";

const UserContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div className="user-container">
        <h3 className="text-2xl text-center">Online Users</h3>
        <div className="activeContainer">
          {users.map(({ name }) => (
            <div
              key={name}
              className="activeItem border-2 rounded-md bg-green-600 my-3 mx-3"
            >
              <img
                alt="001"
                src="003.gif"
                className="w-15 h-10 rounded-full ml-3"
              />
              <p className="px-3">{name}</p>
              <img alt="Online Icon" src={onlineIcon} />
            </div>
          ))}
        </div>
      </div>
    ) : null}
  </div>
);

export default UserContainer;
