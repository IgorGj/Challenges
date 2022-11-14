import { CardPropsType } from "../Card/Card";
import { FiltersListAndFilterPropsType } from "./FiltersList";
import "./Filter.css";

export const Filter = (props: FiltersListAndFilterPropsType) => {
  const mouseOverHandler = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.tagName);
    if (e.currentTarget.tagName === "DIV") {
      e.currentTarget.classList.add("text-yellow-hover");
      e.currentTarget.nextElementSibling?.firstElementChild?.classList.add(
        "bg-yellow-hover"
      );
    } else if (e.currentTarget.tagName === "SPAN") {
      e.currentTarget.classList.add("bg-yellow-hover");
      e.currentTarget.parentElement?.parentElement?.firstElementChild?.classList.add(
        "text-yellow-hover"
      );
    }
  };
  const mouseLeaveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.tagName === "DIV") {
      e.currentTarget.classList.remove("text-yellow-hover");
      e.currentTarget.nextElementSibling?.firstElementChild?.classList.remove(
        "bg-yellow-hover"
      );
    } else if (e.currentTarget.tagName === "SPAN") {
      e.currentTarget.classList.remove("bg-yellow-hover");
      e.currentTarget.parentElement?.parentElement?.firstElementChild?.classList.remove(
        "text-yellow-hover"
      );
    }
  };

  return (
    <div className="row mb-2">
      <div
        className={
          props.isActive.filter === props.filter ? "col-6 text-yellow" : "col-6"
        }
        style={{ cursor: "pointer" }}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseLeaveHandler}
      >
        <div onClick={props.clickHandlerForFilter}>{props.filter}</div>
      </div>
      <div className="col-6 text-end">
        <span
          className={
            props.isActive.filter === props.filter
              ? "capsule bg-yellow"
              : "capsule"
          }
          style={{ cursor: "pointer" }}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseLeaveHandler}
        >
          {
            props.posts.filter((el: CardPropsType) => {
              if (
                props.filter?.toLowerCase() === "male" ||
                props.filter?.toLowerCase() === "female"
              ) {
                return el.gender?.toLowerCase() === props.filter?.toLowerCase();
              } else if (
                props.filter?.toLowerCase() !== "male" &&
                props.filter?.toLowerCase() !== "female" &&
                props.filter?.toLowerCase() !== "show all"
              ) {
                return el.brand?.toLowerCase() === props.filter?.toLowerCase();
              } else {
                return props.posts;
              }
            }).length
          }
        </span>
      </div>
    </div>
  );
};
