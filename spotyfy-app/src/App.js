import "./App.css";
import { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import Artists from "./components/Artists";
import TrackDetail from "./components/TrackDetail";

function App() {
  const [data, setData] = useState([]);
  const [artist, setArtist] = useState(0);
  return (
    <>
      <div style={{ padding: "50px 0" }}>
        <SearchComponent setData={setData} setArtist={setArtist} />
        <Artists data={data} setArtist={setArtist} artist={artist} />
        <TrackDetail />
      </div>
    </>
  );
}

export default App;
