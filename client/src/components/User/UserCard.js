import { useState } from "react";
import "./UserCard.css";

function UserCard(props) {
  const handleDelete = () => {
    const userdiv = document.getElementById(`${props.user._id}`);
    userdiv.style.display = "none";

    fetch(`http://localhost:3001/user`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: props.user._id,
        action: "delete",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="usercard-wrapper" id={props.user._id}>
      <div className="usercard-header">
        <img src={props.user.avatar} ></img>
      </div>
      <div className="usercard-body">
        <p>Username: {props.user.username}</p>
        <p>
          {props.user.firstName} {props.user.lastName}
        </p>
        <p>{props.user.email}</p>
      </div>
    </div>
  );
}

export default UserCard;
