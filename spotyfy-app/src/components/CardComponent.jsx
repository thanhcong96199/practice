import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getTracks } from "../callAPI";

export default function CardComponent({ item, setTracks }) {
  // const [showTracks, setShowTracks] = useState(false);

  // const handleShowTracks = (e) => {
  //   setShowTracks((prve) => !prve);
  // };

  const handleListTracks = (id) => {
    console.log(id, "id");
    getTracks(id).then((result) => {
      setTracks(result.data.tracks);
      console.log(result, "result");
    });
  };
  return (
    <Card style={{ width: "17rem" }}>
      <Card.Img
        style={{ height: "270px" }}
        variant="top"
        src={
          item?.images[0]?.url === undefined
            ? `https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png`
            : item.images[0].url
        }
      />
      <Card.Body style={{ backgroundColor: "#1B1F22" }}>
        <Card.Title style={{ color: "#fff" }}>
          Artist:&nbsp;
          {item.name.length > 20 ? item.name.slice(0, 15) + "..." : item.name}
        </Card.Title>
        <Card.Text
          style={{ height: "100px", color: "#fff", overflow: "hidden" }}
        >
          <b>Followers: </b>
          {item.followers.total} subs <br />
          <b>Genres: </b>
          {item.genres.length > 0 ? item.genres.join(", ") : "Unknow"}
          <br />
          <b>Popularity: </b>
          {item.popularity}
        </Card.Text>
        <Button
          onClick={() => handleListTracks(item.id)}
          style={{
            backgroundColor: "#1db954",
            color: "#ddd",
            border: "none",
            outline: "none",
          }}
        >
          List Tracks
        </Button>
      </Card.Body>
    </Card>
  );
}
// bấm vào nút list tracks lây ra id của artits gọi đến hàm getTrack(id)
// nhận đc kq render ra UI
