import React from "react";
import styled from "styled-components";
import Banner from "../components/slides/Banner";
import bannerImg from "../img/childrenpage/bg_mtm_sponsorship_visual.jpg";
import bannerImgRes from "../img/childrenpage/bg_mtm_sponsorship_visual_mobile.png";
import Filter from "../components/childrenContents/Filter";
import ChildrenList from "../components/childrenContents/ChildrenList";

const Container = styled.div``;

const ChildrenPage = () => {
  return (
    <Container>
      <Banner
        image={bannerImg}
        resImg={bannerImgRes}
        title="1:1 어린이양육"
        text={
          <>
            한 달 45,000원으로 후원자는 어린이와 연결됩니다.
            <br />
            또한 어린이는 생존과 성장, 꿈을 이룰 수 있는 기회와도 연결됩니다.
            <br />
            어린이와 후원자가 함께 자라는 특별한 후원을 지금 시작해보세요.
          </>
        }
      />
      <Filter />
      <ChildrenList />
    </Container>
  );
};

export default ChildrenPage;
