import React from "react";
import styled from "styled-components";
import mainBg from "../img/home/mainBg.jpg";
import MainSlide from "../components/slides/MainSlide";
import OneBaby from "../components/homeContents/OneBaby";
import Support from "../components/homeContents/Support";
import SupportPlus from "../components/homeContents/SupportPlus";
import Special from "../components/homeContents/Special";
import Nurture from "../components/homeContents/Nurture";

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const MainContents = styled.div`
  width: 100%;
  height: auto;
  background: url(${mainBg}) no-repeat 80% top;
  padding-top: 168px;
  margin-bottom: 64px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding-top: 50px;
  }
`;

const Home = () => {
  return (
    <Container>
      <MainSlide />
      <MainContents>
        <OneBaby />
        <Support />
        <SupportPlus />
      </MainContents>
      <Special />
      <Nurture />
    </Container>
  );
};

export default Home;
