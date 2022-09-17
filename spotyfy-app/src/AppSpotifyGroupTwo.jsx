import React, { useState } from "react";
import instance from "./apiConfig";
import ListArtists from "./components/ListArtists";

export default function AppSpotifyGroupTwo() {
  const [artistsSearch, setArtistsSearch] = useState([]);
  const [tracks, setTracks] = useState([]);
  //artistsSearch: lưu dữ liệu artis khi search => list artis result

  return <ListArtists />;
}
