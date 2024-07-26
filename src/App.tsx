import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import StoryPage from "./routes/StoryPage";
import ChildrenPage from "./routes/ChildrenPage";
import SpecialPage from "./routes/SpecialPage";
import Member from "./routes/Member";
import Login from "./routes/Login";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/children" element={<ChildrenPage />} />
        <Route path="/special" element={<SpecialPage />} />
        <Route path="/member" element={<Member />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
