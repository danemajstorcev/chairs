import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import CardsCont from "./components/CardsCont";
import ErrorPage from "./components/ErrorPage";
import CardDetail from "./components/CardDetail";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CardsCont />} />
        <Route path="/product/:id" element={<CardDetail />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
