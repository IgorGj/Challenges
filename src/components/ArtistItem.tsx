import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArtistsType } from "../db";
type Props = {
  el: ArtistsType;
  artists: ArtistsType[];
};

export const ArtistItem = ({ el, artists }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (el.id) {
      if (el.id > artists.length) {
        console.log("da");

        navigate("*");
      }
    }
  }, []);
  return (
    <Link to={`/artistPage/${el.id}`}>
      <div style={{ position: "relative", cursor: "pointer" }}>
        <img
          src={require(`../images/covers/${el.cover}.jpg`)}
          alt=""
          style={{ width: "100%" }}
        />
        <button
          className="btn btn-primary"
          style={{ position: "absolute", bottom: "0", left: "0" }}
        >
          {el.name}
        </button>
      </div>
    </Link>
  );
};
