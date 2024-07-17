import React from "react";
import styled from "styled-components";
import { nurtureBannerArr, yellowListArr } from "../../util";
import bgImg from "../../img/home/nanture/Image.png";
import bgLineImg from "../../img/home/nanture/bg_main_line_mid.png";

const Container = styled.div``;

const TopTextBox = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: -102px;
    right: -403px;
    width: 887px;
    height: 254px;
    background: url(${bgImg}) center/cover no-repeat;
  }
`;

const TopTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const TopText = styled.p`
  font-size: 24px;
  font-weight: lighter;
  margin-bottom: 80px;
`;

const RandomImg = styled.div`
  position: absolute;
  right: -180px;
  top: 202px;
`;

const BgSection = styled.div`
  width: 1651px;
  height: 728px;
  background: ${({ theme }) => theme.colors.iceberg};
  transform: translateY(150px);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -150px;
    top: 30%;
    width: 100%;
    height: 100%;
    background: url(${bgLineImg}) center/cover no-repeat;
  }
`;

const ListBox = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  border: 1px solid #f00;
`;

const Nurture = () => {
  let suffle = Math.floor(Math.random() * nurtureBannerArr.length);

  return (
    <Container>
      <TopTextBox>
        <TopTitle>꿈을 잃은 어린이들에게 그리스도의 사랑을</TopTitle>
        <TopText>
          세상 모든 어린이는 사랑받기에 마땅한 '소중한 존재'입니다
        </TopText>
        <RandomImg>
          <img src={nurtureBannerArr[suffle].img} alt="nurtureImg" />
        </RandomImg>
      </TopTextBox>
      <BgSection>
        <ListBox>
          {yellowListArr.map((item, idx) => (
            <div key={idx}>{item.title}</div>
          ))}
        </ListBox>
      </BgSection>
    </Container>
  );
};

export default Nurture;
