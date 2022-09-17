import React, { useState } from "react";
import instance from "./apiConfig";

export default function AppSpotifyGroupTwo() {
  const [artistsSearch, setArtistsSearch] = useState([]);
  const [tracks, setTracks] = useState([]);
  //artistsSearch: lưu dữ liệu artis khi search => list artis result

  return (
    <div>
      {/*Input component: search ấn enter  => call api*/}
      {/*List result artis */}
      {/* click item in arties => tracks component*/}
    </div>
  );
}
