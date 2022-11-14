import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Filters/Filter.css";
import "./Icons.css";
type IconPropsType = {
  icon: IconProp;
};

export const Icon = (props: IconPropsType) => {
  const mouseOverHandler = (e: React.MouseEvent) => {
    e.currentTarget.classList.add("icon-hover");
  };
  const mouseLeaveHandler = (e: React.MouseEvent) => {
    e.currentTarget.classList.remove("icon-hover");
  };
  return (
    <div
      className="col-1 rounded bg-yellow text-center"
      style={{ padding: "15px 30px", cursor: "pointer" }}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <FontAwesomeIcon
        icon={props.icon}
        style={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%",
          color: "white",
        }}
        size="xl"
      />
    </div>
  );
};
