import React from "react";
import styled from "styled-components";
import Banner from "../components/slides/Banner";
import bannerImg from "../img/specialpage/banner.png";
import bannerResImg from "../img/specialpage/bannerRes.png";
import SpecialBestProduct from "../components/specialContents/SpecialBestProduct";
import SpecialShare from "../components/specialContents/SpecialShare";

const SpecialPage = () => {
  return (
    <div>
      <Banner
        image={bannerImg}
        resImg={bannerResImg}
        title="주제별 양육보완후원"
        text="모든 어린이가 부족함 없이 자랄 수 있도록 돕습니다"
      />
      <SpecialBestProduct />
      <SpecialShare />
    </div>
  );
};

export default SpecialPage;
