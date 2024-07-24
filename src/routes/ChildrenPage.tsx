import React from "react";
import styled from "styled-components";
import Banner from "../components/slides/Banner";
import bannerImg from "../img/childrenpage/bg_mtm_sponsorship_visual.jpg";
import bannerImgRes from "../img/childrenpage/bg_mtm_sponsorship_visual_mobile.png";
import Filter from "../components/childrenContents/Filter";
import ChildrenList from "../components/childrenContents/ChildrenList";
import Sponsor from "../components/childrenContents/Sponsor";
import Support from "../components/homeContents/Support";
import Benefit from "../components/childrenContents/Benefit";
import SupportFaq from "../components/childrenContents/SupportFaq";
import bottomImg from "../img/childrenpage/bg_bottom_banner_visual_01.jpg";
import BottomRes from "../img/childrenpage/bg_bottom_banner_visual_01_mobile.png";
import SquareColorBtn from "../components/buttons/SquareColorBtn";

const Container = styled.div``;

const SupportBox = styled.div`
  margin-top: 180px;
`;

const BgBottomBox = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 360px;
  background: url(${bottomImg}) center/cover no-repeat;
  @media ${({ theme }) => theme.mediaSize.m} {
    background: url(${BottomRes}) center/cover no-repeat;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const BottomTitle = styled.h4`
  font-size: 40px;
  font-weight: bold;
  line-height: 52px;
  color: #fff;
  padding-top: 74px;
  margin-left: 100px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding-top: 50px;
    margin-left: 0;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 32px;
  }
`;

const BottomTextBox = styled.div`
  margin-top: 48px;
  margin-left: 100px;
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    margin-top: 35px;
    margin-left: 0;
    flex-direction: column;
    gap: 30px;
  }
`;

const BottomText = styled.p`
  font-size: 20px;
  color: #fff;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    letter-spacing: -1px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 16px;
  }
`;

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
      <Sponsor />
      <SupportBox>
        <Support />
      </SupportBox>
      <Benefit />
      <SupportFaq />
      <BgBottomBox>
        <Inner>
          <BottomTitle>
            지금 어린이를
            <br />
            후원해주세요
          </BottomTitle>
          <BottomTextBox>
            <BottomText>
              자금 월 45,000원을 후원을 결심한다면,
              <br />한 어린이가 건강하게 꿈을 찾으며 성잘할 수 있습니다.
            </BottomText>
            <SquareColorBtn text="지금 결연하기" btnName="childpagenow" />
          </BottomTextBox>
        </Inner>
      </BgBottomBox>
    </Container>
  );
};

export default ChildrenPage;
