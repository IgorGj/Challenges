import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ArtistList } from "./components/ArtistList";
import { Navbar } from "./components/Navbar";
import { ArtistPage } from "./components/ArtistPage";
import { AlbumPage } from "./components/AlbumPage";
import { useEffect, useState } from "react";
import artists, { ArtistsType } from "./db";
import { NotFound } from "./components/NotFound";

function App() {
  const [theArtists, setTheArtists] = useState<ArtistsType[]>([]);

  useEffect(() => {
    // simuliram fetch od backend...
    setTheArtists(artists);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ArtistList artists={theArtists} />} />
        <Route
          path="/artistPage/:id"
          element={<ArtistPage artists={theArtists} />}
        />
        <Route
          path="/artistPage/:id/:albumId"
          element={<AlbumPage artists={theArtists} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
