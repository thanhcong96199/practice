import React from "react";
import TracksDetail from "./TracksDetail";

export default function ListTrack({ tracks, setTracks }) {
  function renderListTracks(data) {
    if (data) {
      console.log(data.items);

      // const dataItems = data.items;
      return data?.map((item, index) => {
        return <TracksDetail key={index} item={item} setTracks={setTracks} />;
      });
    } else {
      console.log("error List Tracks");
    }
  }

  return <div>{renderListTracks(tracks)}</div>;
}
