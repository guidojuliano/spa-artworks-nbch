import Header from "../components/Header";
import { Container } from "@mui/material";
import "../App.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtwork } from "../functions/functions";
import Preloader from "../components/Preloader";

function Artwork() {
  const [artwork, setArtwork] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getArtwork(id).then((data) => {
      setArtwork(data);
    });
  }, []);

  return (
    <>
      <div className="artwork-content" id="artwork">
        {artwork !== null ? (
          <Container>
            <h1>{artwork.data.title}</h1>
            <h4>{artwork.data.artist_title}</h4>
            <img
              src={`https://www.artic.edu/iiif/2/${artwork.data.image_id}/full/843,/0/default.jpg`}
              alt={artwork.data.title}
              className="artwork-image"
            />
          </Container>
        ) : (
          <Preloader />
        )}
      </div>
    </>
  );
}
export default Artwork;
