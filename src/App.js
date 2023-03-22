import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";

import Footer from "./component/Footer/Footer";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import MovieDetail from "./component/MovieDetail/MovieDetail";
import "./App.css";
import Header from "./component/Header/Header";



function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/movie/:imdbID" element={<MovieDetail/>} />
            <Route element={<PageNotFound/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;