import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import StoryPage from "./routes/StoryPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
