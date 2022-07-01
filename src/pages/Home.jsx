import { Container } from "@mui/material";
import * as React from "react";
import "../App.css";
import { TablesArtworks } from "../components/TablesArtworks";

function Home() {
  return (
    <div className="home" id="home">
      <Container>
        <TablesArtworks />
      </Container>
    </div>
  );
}

export default Home;
