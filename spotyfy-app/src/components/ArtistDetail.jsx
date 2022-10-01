import React, { useEffect, useState } from "react";
import { getArtistTopTrack } from "../apiConfig";

export default function ArtistDetail({ artist }) {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    getArtistTopTrack(artist.id).then((res) => {
      setAlbum(res);
      console.log(res);
    });
  }, [artist.id]);
  return (
    <>
      <div
        style={{
          background: "white",
          height: "200px",
          overflow: "hidden",
          marginTop: "30px",
        }}
        className="d-flex align-items-start rounded"
      >
        <div className="w-25">
          <img
            src={artist.images[0].url}
            style={{ objectFit: "contain" }}
            className="w-100"
            height="200px"
          />
        </div>
        <div className="w-75 p-2 fw-bold fs-5">
          <span className="d-flex align-items-center" style={{gap: '8px' }} >
            <svg
              role="img"
              height="24"
              width="24"
              viewBox="0 0 24 24"
            >
              <path d="M10.814.5a1.658 1.658 0 012.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 011.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 01-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 01-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 01-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 010-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 011.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 00-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 00-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
            </svg>
            <span className="fw-italic">
              Nghệ sĩ được xác minh
            </span>
          </span>
          <div>Tên: {artist.name}</div>
          <div>Nơi hoạt động: {artist.genres.map((a) => `${a} `)} </div>
          <div>Số người theo dõi: {artist.followers.total} người </div>
          <div>Độ phổ biến: {artist.popularity}% </div>
        </div>
      </div>
      <div className="text-white mt-5 d-flex flex-wrap">
        {album.map((item) => (
          <div
            style={{
              background: "#2a2a2a",
              borderRadius: "5px",
              margin: "0 15px",
              marginTop: "20px",
              height: "auto",
              minWidth: "400px",
              padding: "20px",
            }}
            key={item.id}
          >
            <img
              src={item.album.images[0].url}
              style={{ height: "300px", objectFit: "cover" }}
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
            <div style={{ color: "#6a6a6a" }}>
              {item.artists.map((a) => `${a.name} `)}
              <div>Ngày phát hành: {item.album.release_date}</div>
              <p>Thời lượng: {Math.floor(item.duration_ms/60000)}:{Math.floor((item.duration_ms / 1000) % 60)} phút</p>
              <audio controls className="w-100">
                <source src={item.preview_url} />
              </audio>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
