import React, { useState } from "react";
import instance from "./apiConfig";
import ListArtists from "./components/ListArtists";
import InputSearch from "./components/InputSearch";

export default function AppSpotifyGroupTwo() {
  const [artistsSearch, setArtistsSearch] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [offset, setOffset] = useState(0);
  //artistsSearch: lưu dữ liệu artis khi search => list artis result

  const onUpdateArticelSearch = (articles, listTrack) => {
    setArtistsSearch(articles);
    setTracks(listTrack);
  };
  return (
    <div>
      <InputSearch
        offset={offset}
        onUpdateArticelSearch={onUpdateArticelSearch}
      />
      <ListArtists />
      {/*Input component: search ấn enter  => call api*/}
      {/*List result artis */}
      {/* click item in arties => tracks component*/}
    </div>
  );
}
