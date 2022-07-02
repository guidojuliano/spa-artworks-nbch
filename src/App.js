import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Artwork from "./pages/Artwork";
import Error404 from "./pages/Error404";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artwork/:id" element={<Artwork />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
