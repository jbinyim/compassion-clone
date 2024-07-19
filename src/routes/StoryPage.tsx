import React from "react";
import styled from "styled-components";
import Banner from "../components/slides/Banner";
import bannerImg from "../img/storypage/banner.png";
import bannerImgRes from "../img/storypage/bannerREs.png";
import Declaration from "../components/storyContents/Declaration";
import Question from "../components/storyContents/Question";
import History from "../components/storyContents/History";

const Container = styled.div``;

const Inner = styled.div``;

const StoryPage = () => {
  return (
    <Container>
      <Banner
        image={bannerImg}
        resImg={bannerImgRes}
        title="한눈에 보는 컴패션"
        text="컴패션(COMPASSION)을 소개합니다"
      />
      <Inner>
        <Declaration />
        <Question />
        <History />
      </Inner>
    </Container>
  );
};

export default StoryPage;
