import React from "react";
import styled from "styled-components";
import BannerColor from "../components/slides/BannerColor";
import Cards from "../components/SponsorContents/Cards";

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
    }
  }
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
      <Cards />
    </Container>
  );
};

export default SponsorPage;
