import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import StoryPage from "./routes/StoryPage";
import ChildrenPage from "./routes/ChildrenPage";
import SpecialPage from "./routes/SpecialPage";
import Member from "./routes/Member";
import Login from "./routes/Login";
import NotFindPage from "./routes/NotFindPage";
import CheckIdentify from "./components/registor/CheckIdentify";
import SponsorPage from "./routes/SponsorPage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/story", element: <StoryPage /> },
  { path: "/children", element: <ChildrenPage /> },
  { path: "/special", element: <SpecialPage /> },
  { path: "/sponsor/*", element: <SponsorPage /> },
  { path: "/member", element: <Member /> },
  { path: "/member/checkIdentify", element: <CheckIdentify /> },
  { path: "/login", element: <Login /> },
];

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const location = useLocation();
  const isNotFoundPage = !routes.some(
    (route) => route.path === location.pathname
  );

  return (
    <>
      {/* {!isNotFoundPage && <Header />} */}
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<NotFindPage />} />
      </Routes>
      <Footer />
      {/* {!isNotFoundPage && <Footer />} */}
    </>
  );
}

export default App;
