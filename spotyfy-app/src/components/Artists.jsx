import React from "react";
import ArtistDetail from "./ArtistDetail";

export default function Artists({ data, artist, setArtist}) {
  return (
    <>
      {artist ? (
        <ArtistDetail artist={artist} />
      ) : (
        <div
          className="d-flex flex-wrap w-100"
          style={{ marginTop: "50px", cursor: "pointer" }}
        >
          {data.map((item) => (
            <div
              style={{
                background: "#2a2a2a",
                borderRadius: "5px",
                margin: "0 15px",
                marginTop: "20px",
                width: "215px",
                height: "290px",
                padding: "20px",
              }}
              key={item.id}
              onClick={() => setArtist(item)}
            >
              <img
                src={item.images[0].url}
                style={{ height: "182px", objectFit: "cover" }}
                className="w-100"
              />
              <div
                style={{
                  padding: "15px 0 5px 0",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }}
              >
                {item.name}
              </div>
              <div style={{ color: "#6a6a6a" }}>{item.type}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
