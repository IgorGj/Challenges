import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Props = {
  cover?: string;
  albumId?: string;
};

export const AlbumsList = (props: Props) => {
  const { id } = useParams();

  return (
    <div className="col-6 p-0" style={{ cursor: "pointer" }}>
      <Link to={`/artistPage/${id}/${props.albumId}`}>
        <img
          src={require(`../images/albums/${props.cover}.jpg`)}
          style={{ width: "100%" }}
          alt=""
        />
      </Link>
    </div>
  );
};
