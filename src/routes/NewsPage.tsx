import React from "react";
import styled from "styled-components";
import Banner from "../components/slides/Banner";
import newBanner from "../img/news/10001.png";
import newBanner02 from "../img/news/10002.png";
import RecomendNews from "../components/newsContents/RecomendNews";
import Recent from "../components/newsContents/Recent";

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const NewsPage = () => {
  return (
    <div>
      <Banner
        image={newBanner}
        resImg={newBanner02}
        title="컴패션 소식"
        text="컴패션의 시선과 활동"
      />
      <Inner>
        <RecomendNews />
        <Recent/>
      </Inner>
    </div>
  );
};

export default NewsPage;
