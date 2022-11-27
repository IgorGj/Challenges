import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h5>Page Was Not Found</h5>
      <h5>
        Go to{" "}
        <Link to="/" style={{ color: "red" }}>
          HomePage
        </Link>
      </h5>
    </div>
  );
};
