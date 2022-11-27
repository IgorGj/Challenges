import { Link } from "react-router-dom";
import "./style.css";

export const Navbar = () => {
  return (
    <Link to="/">
      <div className="row flex-direction-column" style={{ cursor: "pointer" }}>
        <div className="col-12">
          <img
            src={require("../images/raw/Girls-Listen-Music_0.jpg")}
            style={{ width: "100%" }}
            alt=""
          />
          <h1 className="centered text-white">Music DB</h1>
        </div>
      </div>
    </Link>
  );
};
