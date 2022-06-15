import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <a className="link" href={props.href}>
        <h1 className="name">{props.name}</h1>
        <div className="link-svg ">{props.ico}</div>
        <p className="info">{props.href}</p>
      </a>
    </div>
  );
}

export default Card;
