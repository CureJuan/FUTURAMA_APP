import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DetallePersonaje from "./components/DetallePersonaje";
import Personajes from "./components/Personajes";
import Inicio from "./components/Inicio";
import Episodios from "./components/Episodios";
import DetalleEpisodios from "./components/DetalleEpisodios";
import Casting from "./components/Casting";
import logo from "./image/logo.png"

function App() {

  return (
    <Router>
      <div className="container mt-3">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/characters" className="btn btn-dark">
            Personajes
          </Link>
          <Link to="/episodios" className="btn btn-dark">
            Episodios
          </Link>
          <Link to="/casting" className="btn btn-dark">
            Actores
          </Link>
          <img src={logo} className="logo" alt="imagen" />
        </div>
        <hr />
        <Routes>
          <Route
            exact
            path="/characters/:id"
            element={<DetallePersonaje />}
          ></Route>
          <Route
            exact
            path="/episodes/:id"
            element={<DetalleEpisodios />}
          ></Route>
          <Route exact path="/casting" element={<Casting />}></Route>
          <Route exact path="/characters" element={<Personajes />}></Route>
          <Route exact path="/episodios" element={<Episodios />}></Route>
          <Route exact path="/" element={<Inicio />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
