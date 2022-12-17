import { Link } from "react-router-dom";

interface Props {
  cuisine: string;
}
export const Button = ({ cuisine }: Props) => {
  return (
    <Link
      to={`/cusines/${cuisine}`}
      style={{
        backgroundColor: "#ff6247",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        borderColor: "white",
        textAlign: "center",
      }}
      className="col-1"
    >
      {cuisine}
    </Link>
  );
};
