import React, { useState } from "react";
import instance from "./apiConfig";
import InputSearch from "./components/InputSearch";
import Panigation from "./components/Panigation";

export default function AppSpotifyGroupTwo() {
  const [artistsSearch, setArtistsSearch] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [offset, setOffset] = useState(0);
  //artistsSearch: lưu dữ liệu artis khi search => list artis result
  const onUpdateArticelSearch = (articles, listTrack) => {
    setArtistsSearch(articles);
    setTracks(listTrack)
  };
  return (
    <div>
      <InputSearch
        offset={offset}
        onUpdateArticelSearch={onUpdateArticelSearch}
      />
      {/*Input component: search ấn enter  => call api*/}
      {/*List result artis */}
      {/* click item in arties => tracks component*/}
      <Panigation
      artistsSearch={artistsSearch}
      tracks={tracks}
      offset={offset}
      setOffset={setOffset}
      />
    </div>
  );
}
