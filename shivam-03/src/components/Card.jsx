import React from "react";

const Card = (props) => {
    console.log(props);
  return (
    <div className="card">
      <image src={props.img} alt="image" />
      <img src={props.img} alt="image" />
      <h1>hi {props.user} your age is {props.age} </h1>
    </div>
  );
};

export default Card;