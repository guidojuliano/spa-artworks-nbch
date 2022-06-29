import { allArtowrks } from "../functions/functions";
import { Container } from "@mui/material";
import * as React from "react";
import "../App.css";
import { TablesArtworks } from "../components/TablesArtworks";

function Home() {
  React.useEffect(() => {
    allArtowrks();
  }, []);
  return (
    <div className="home" id="home">
      <Container>
        <h1>Obras de arte</h1>
        <TablesArtworks />
      </Container>
    </div>
  );
}

export default Home;
