import React from "react";
import styled from "styled-components";
import BannerColor from "../components/slides/BannerColor";
import Cards from "../components/SponsorContents/Cards";
import SponChose from "../components/SponsorContents/SponChose";
import SponPay from "../components/SponsorContents/SponPay";

const Container = styled.div``;

const Wraning = styled.div`
  width: 100%;
  height: 75px;
  background: ${({ theme }) => theme.colors.iceberg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  p {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -30px;
      width: 24px;
      height: 24px;
      background: url("https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/ico_warning_black_24x24.png")
        no-repeat center/cover;
      @media ${({ theme }) => theme.mediaSize.m} {
        width: 15px;
        height: 15px;
        left: -20px;
      }
    }
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 14px;
    letter-spacing: -1px;
    padding: 0 8%;
  }
`;

const Inner = styled.div`
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const Line = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.alto};
  margin: 0 auto 50px;
`;

const SponsorPage = () => {
  return (
    <Container>
      <BannerColor text="후원/결제" />
      <Wraning>
        <p>
          지금 이 어린이는 1시간 동안 후원자님에게만 보여집니다. 어린이가 오래
          기다리지 않도록 결연을 진행해주세요 :)
        </p>
      </Wraning>
      <Inner>
        <Cards />
        <SponChose
          max={190000}
          title="나의 후원 어린이에게"
          title2="생일 선물금을 보냅니다."
          text="1년에 한번 후원 어린이 생일 한달전에 양육 후원금과 함께 결제됩니다."
          boxname="sponchose01"
        />
        <Line />
        <SponChose
          max={100000}
          title="컴패션 모든 어린이들에게"
          title2="크리스마스 선물금을 보냅니다."
          text="올해 크리스마스 선물금은 오늘 결제되며, 내년부터는 1년에 한번 9월에 결제됩니다."
          boxname="sponchose02"
        />
        <SponPay />
      </Inner>
    </Container>
  );
};

export default SponsorPage;
