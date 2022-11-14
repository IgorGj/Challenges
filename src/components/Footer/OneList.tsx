import React from "react";

export type OneListPropsType = {
  header: string;
  links: Array<string>;
};

export const OneList = (props: OneListPropsType) => {
  const mouseOverHandler = (e: React.MouseEvent) => {
    e.currentTarget.classList.add("text-yellow");
  };
  const mouseLeveHandler = (e: React.MouseEvent) => {
    e.currentTarget.classList.remove("text-yellow");
  };
  return (
    <div>
      <h3>{props.header}</h3>

      <ul className="list-unstyled">
        {props.links.map((el, index) => (
          <li
            key={index}
            onMouseOver={mouseOverHandler}
            onMouseLeave={mouseLeveHandler}
            style={{ cursor: "pointer" }}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
