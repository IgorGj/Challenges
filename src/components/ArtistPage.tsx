import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArtistsType } from "../db";
import { AlbumsList } from "./AlbumsList";

type Props = {
  artists: ArtistsType[];
};

export const ArtistPage = ({ artists }: Props) => {
  const [artist, setArtist] = useState<ArtistsType[]>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      let theId = +id;
      if (theId > artists.length) {
        navigate("*");
      } else {
        const theArtist = artists.filter((el) => el.id?.toString() === id);
        setArtist(theArtist);
      }
    }
  }, []);

  return (
    <div style={{ backgroundColor: "gray" }}>
      {artist?.map((el: ArtistsType) => {
        return (
          <div className="py-5">
            <img
              src={require(`../images/covers/${el.cover}.jpg`)}
              style={{ width: "50%" }}
              alt=""
            />
            <h1>{el.name}</h1>
            <p>{el.bio}</p>
            <div className="row">
              {el.albums.map((el) => {
                return <AlbumsList cover={el.cover} albumId={el.albumId} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
