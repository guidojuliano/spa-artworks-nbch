import { Container } from "@mui/material";
import "../App.css";
import "../styles/Preloader.css";

function Preloader() {
  return (
    <>
      <Container>
        <div className="preloader__content">
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          
        </div>
      </Container>
    </>
  );
}

export default Preloader;