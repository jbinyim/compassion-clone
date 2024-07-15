import React from "react";
import styled from "styled-components";
import mainBg from "../img/home/mainBg.jpg";
import MainSlide from "../components/slides/MainSlide";
import OneBaby from "../components/homeContents/OneBaby";

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  height: 300vh;
`;

const MainContents = styled.div`
  width: 100%;
  height: 100%;
  background: url(${mainBg}) no-repeat 80% top;
  padding-top: 168px;
`;

const Home = () => {
  return (
    <Container>
      <MainSlide />
      <MainContents>
        <OneBaby />
      </MainContents>
    </Container>
  );
};

export default Home;
