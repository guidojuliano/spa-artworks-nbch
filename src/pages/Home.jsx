import Header from "../components/Header";
import { allArtowrks } from "../functions/functions";
import { Container } from "@mui/material";
import * as React from "react";
import "../App.css";
function Home() {
  React.useEffect(() => {
    allArtowrks();
  }, []);
  return (
    <div className="home" id="home">
      <Header />
      <Container>
        <h1>Obras de arte</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisl eget consectetur sagittis, nisl nunc egestas nisi,
          euismod aliquam nisl nunc eget.
        </p>
      </Container>
    </div>
  );
}

export default Home;
