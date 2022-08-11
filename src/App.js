import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import EventListener from "./components/common/EventListener";
import GlobalStyle from "./components/common/globalStyle";
import Lending from "./routers/lending/Lending";
import Margin from "./routers/trading/Margin";
import Spot from "./routers/trading/Spot";
import Trading from "./routers/trading/Trading";
import "./util/ReactToastify.css";

export default function App() {
  return (
    <AppBox className="appBox">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Sarabun:wght@500;600&display=swap"
        rel="stylesheet"
      />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <HashRouter>
        <GlobalStyle />
        <EventListener />

        <Routes>
          <Route path="/" element={<Lending />} />
          <Route path="/spot" element={<Spot />} />
          <Route path="/margin" element={<Margin />} />
        </Routes>
      </HashRouter>
    </AppBox>
  );
}

const AppBox = styled.div``;
