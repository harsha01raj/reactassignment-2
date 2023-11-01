import React from "react";
import "./styles.css";

const Avatar = ({ user }) => {
  const { name, imageUrl } = user;

  const avatarStyle = {
    borderRadius: "50%",
    border: "2px solid #000" // You can adjust the border color and thickness
  };

  return (
    <div>
      <img src={imageUrl} alt={name} style={avatarStyle} />
      <p>{name}</p>
    </div>
  );
};

const Button = ({ text }) => {
  return <button className="custom-button">{text}</button>;
};

export { Avatar, Button };
