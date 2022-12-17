import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container-fluid">
      <div
        className="row justify-content-between p-3"
        style={{ boxShadow: "1px 2px 12px " }}
      >
        <Link to="/" style={{ color: "black" }}>
          <h2>RESTARAUNT</h2>
        </Link>
        <Link to="/favorites">
          <span
            className="material-symbols-outlined"
            style={{ color: "red", fontSize: "30px" }}
          >
            favorite
          </span>
        </Link>
      </div>
    </div>
  );
};
