import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArtistsType } from "../db";

type Props = {
  artists: ArtistsType[];
};
interface AlbumType {
  albumId: string;
  title: string;
  year: number;
  cover: string;
  price: number;
}

export const AlbumPage = ({ artists }: Props) => {
  const { albumId } = useParams();
  const { id } = useParams();
  const [album, setAlbum] = useState<AlbumType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      let theId = +id;
      if (theId <= artists.length) {
        let theArtist = artists.filter((el) => el.id === theId);
        let theAlbum = theArtist[0].albums.filter(
          (el) => el.albumId === albumId
        );
        setAlbum(theAlbum);
      } else {
        navigate("*");
      }
    }
  }, []);

  return (
    <>
      {album &&
        album.map((el: any) => (
          <div className="py-5">
            <img
              src={require(`../images/albums/${el.cover}.jpg`)}
              style={{ width: "50%" }}
              alt=""
            />
            <h5>Title: {el.title}</h5>
            <h5>Year: {el.year}</h5>
            <h5>Price: ${el.price}</h5>
          </div>
        ))}
    </>
  );
};
