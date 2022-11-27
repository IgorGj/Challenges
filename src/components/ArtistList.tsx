import { ArtistsType } from "../db";
import { ArtistItem } from "./ArtistItem";

type Props = {
  artists: ArtistsType[];
};

export const ArtistList = ({ artists }: Props) => {
  return (
    <>
      <h1>Browse the Artists</h1>
      {artists?.map((el) => {
        return <ArtistItem el={el} artists={artists} />;
      })}
    </>
  );
};
