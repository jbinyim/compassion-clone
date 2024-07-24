import React from "react";
import styled from "styled-components";
import { benfitListArr } from "../../util";
import BenfitList from "../../img/childrenpage/ico_supporters_benefit.png";
import BlueLineTitle from "../component/BlueLineTitle";
import SquareColorBtn from "../buttons/SquareColorBtn";

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
  height: 100%;
  background: ${({ theme }) => theme.colors.regalBlue};
`;

const Inner = styled.div`
  max-width: 1200px;
  height: 100%;
  transform: translateY(-180px);
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
  h2 {
    color: ${({ theme }) => theme.colors.glacier};
    @media ${({ theme }) => theme.mediaSize.l} {
      font-size: 20px;
    }
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
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 28px;
  }
`;

const BenefitListBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-top: 80px;
  margin-bottom: 56px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

const BenefitList = styled.li`
  width: 100%;
`;

const ListTop = styled.div`
  span {
    display: block;
    position: relative;
    font-size: 20px;
    font-weight: bold;
    line-height: 72px;
    color: ${({ theme }) => theme.colors.green};
    padding-left: 102px;
    @media ${({ theme }) => theme.mediaSize.xxl} {
      padding-left: 80px;
    }
    @media ${({ theme }) => theme.mediaSize.l} {
      font-size: 16px;
    }
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
    &.a202407230556::before {
      background-position: -72px 0;
    }
    &.a202407230557::before {
      background-position: -144px 0;
    }
    &.a202407230558::before {
      background-position: 0 -72px;
    }
    &.a202407230559::before {
      background-position: -72px -72px;
    }
    &.a2024072305510::before {
      background-position: -144px -72px;
    }
    &.a2024072305511::before {
      background-position: 0 -144px;
    }
    &.a2024072305512::before {
      background-position: -72px -144px;
    }
    &.a2024072305513::before {
      background-position: -144px -144px;
    }
  }
`;

const ListBottom = styled.div`
  width: 100%;
  margin-top: 24px;
  padding-top: 50px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -40px;
    width: 120%;
    height: 1px;
    background: ${({ theme }) => theme.colors.green};
    @media ${({ theme }) => theme.mediaSize.xxl} {
      width: 100%;
      left: 0;
    }
  }
`;

const BottomText = styled.p`
  font-size: 16px;
  font-weight: lighter;
  line-height: 24px;
  color: #fff;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    font-size: 14px;
  }
`;

const BottomBtn = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.jaggedIce};
  @media ${({ theme }) => theme.mediaSize.xxl} {
    font-size: 14px;
  }
`;

const BenfitBtnBox = styled.div`
  text-align: center;
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
              <BenefitList key={item.id}>
                <ListTop>
                  <span className={item.id}>{item.name}</span>
                </ListTop>
                <ListBottom>
                  <BottomText>{item.text}</BottomText>
                  <BottomBtn>{item.go}</BottomBtn>
                </ListBottom>
              </BenefitList>
            ))}
          </BenefitListBox>
          <BenfitBtnBox>
            <SquareColorBtn text="컴패션 어린이 후원하기" btnName="benfitBtn" />
          </BenfitBtnBox>
        </Inner>
      </Box>
      <BottomBgImg />
    </Container>
  );
};

export default Benefit;
