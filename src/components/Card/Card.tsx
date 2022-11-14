import React from "react";
import "./Card.css";
export type CardPropsType = {
  name: string;
  price: number;
  gender?: string;
  brand?: string;
  image?: string;
  isActive?: boolean;
};

export const Card = (props: CardPropsType) => {
  let image = require(`../../img/${props.image}.png`);

  const hoverHandler = (e: React.MouseEvent) => {
    console.log();
    e.currentTarget.firstElementChild?.classList.add("zoom");
    e.currentTarget.lastElementChild?.classList.add("underline");
  };

  const leaveHandler = (e: React.MouseEvent) => {
    e.currentTarget.firstElementChild?.classList.remove("zoom");
    e.currentTarget.lastElementChild?.classList.remove("underline");
  };

  return (
    <div className="col-4 mb-3">
      <div
        className="card"
        style={{ cursor: "pointer" }}
        onMouseOver={hoverHandler}
        onMouseLeave={leaveHandler}
      >
        <img
          src={image}
          className="card-img-top mx-auto p-3"
          alt="..."
          style={{ width: "200px", height: "200px" }}
        />
        <div className="card-body bg-yellow">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.price} $</p>
        </div>
      </div>
    </div>
  );
};
