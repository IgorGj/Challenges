import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Links.css";

export const Actions = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="me-2 hoverEffect"
        style={{ cursor: "pointer" }}
      />
      <FontAwesomeIcon
        icon={faBagShopping}
        className="hoverEffect"
        style={{ cursor: "pointer" }}
      />
    </>
  );
};
