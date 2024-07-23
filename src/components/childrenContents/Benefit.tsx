import React from "react";
import styled from "styled-components";
import BlueLineTitle from "../component/BlueLineTitle";
import { benfitListArr } from "../../util";
import BenfitList from "../../img/childrenpage/ico_supporters_benefit.png";

const Container = styled.div`
  width: 100%;
`;

const BgImgBox = styled.div`
  width: 100%;
  height: 560px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/bg_supporters_benefit.png")
      center/cover no-repeat;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 1100px;

  background: ${({ theme }) => theme.colors.regalBlue};
`;

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
  h2 {
    color: ${({ theme }) => theme.colors.glacier};
    &::after {
      background: ${({ theme }) => theme.colors.glacier};
    }
  }
`;

const TitleText = styled.p`
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
  color: #fff;
  margin-top: 50px;
`;

const BenefitListBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-top: 80px;
`;

const BenefitList = styled.li``;

const ListTop = styled.div`
  span {
    display: block;
    position: relative;
    font-size: 20px;
    font-weight: bold;
    line-height: 72px;
    color: ${({ theme }) => theme.colors.green};
    padding-left: 102px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 72px;
      height: 72px;
      background: url(${BenfitList}) no-repeat 0 0;
      background-size: 216px;
    }
  }
`;

const ListBottom = styled.div`
  margin-top: 24px;
  padding-top: 50px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 117%;
    height: 1px;
    background: ${({ theme }) => theme.colors.green};
  }
`;

const BottomBgImg = styled.div`
  width: 100%;
  height: 160px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/bg_supporters_benefit_bottom.png")
      center/cover no-repeat;
  }
`;

const Benefit = () => {
  return (
    <Container>
      <BgImgBox />
      <Box>
        <Inner>
          <BlueLineTitle text="후원자 혜택" />
          <TitleText>
            컴패션과
            <br />
            함께하는 후원자는,
          </TitleText>
          <BenefitListBox>
            {benfitListArr.map((item) => (
              <BenefitList key={item.id} className={item.id}>
                <ListTop>
                  <span>{item.name}</span>
                </ListTop>
                <ListBottom>
                  <p>{item.text}</p>
                  <p>{item.go}</p>
                </ListBottom>
              </BenefitList>
            ))}
          </BenefitListBox>
          <div style={{ color: "#fff" }}>컴패션 어린이 후원하기</div>
        </Inner>
      </Box>
      <BottomBgImg />
    </Container>
  );
};

export default Benefit;
