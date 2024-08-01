import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
`;

const Banner = styled.div`
  width: 100%;
  height: 160px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 400;
  @media ${({ theme }) => theme.mediaSize.l} {
    height: 100px;
    font-size: 24px;
  }
`;

const GraphBox = styled.div`
  width: 100%;
  height: 200px;
  background: #f8f8fb;
  border-top: 1px solid ${({ theme }) => theme.colors.geyser};
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.mediaSize.l} {
    padding: 0 4%;
  }
`;

const GraphInner = styled.div`
  display: flex;
  p {
    text-align: center;
    width: 233px;
    font-size: 18px;
    font-weight: 700;
    position: relative;
    margin-top: 40px;
    &::before {
      content: "";
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 30px;
    }
    &:first-child {
      color: ${({ theme }) => theme.colors.endeavour};
      &::before {
        background: url("https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/ico_process_member_02.png")
          no-repeat center;
        background-size: 100%;
      }
      &::after {
        content: "";
        position: absolute;
        top: -25px;
        right: -45%;
        width: 88%;
        height: 2px;
        background: ${({ theme }) => theme.colors.geyser};
        @media ${({ theme }) => theme.mediaSize.l} {
          width: 86%;
        }
        @media ${({ theme }) => theme.mediaSize.m} {
          width: 83%;
        }
      }
    }
    &:nth-child(2) {
      color: ${({ theme }) => theme.colors.gray};
      &::before {
        background: url("https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/ico_process_member_03.png")
          no-repeat center;
        background-size: 100%;
      }
      &::after {
        content: "";
        position: absolute;
        top: -25px;
        right: -45%;
        width: 88%;
        height: 2px;
        background: ${({ theme }) => theme.colors.geyser};
      }
    }
    &:nth-child(3) {
      color: ${({ theme }) => theme.colors.gray};
      &::before {
        background: url("https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/ico_process_member_03.png")
          no-repeat center;
        background-size: 100%;
      }
    }
    @media ${({ theme }) => theme.mediaSize.l} {
      width: 150px;
      font-size: 16px;
    }
    @media ${({ theme }) => theme.mediaSize.m} {
      width: 120px;
      letter-spacing: -1px;
      font-size: 14px;
    }
  }
`;

interface BannerColorI {
  text: string;
}

const BannerColor = ({ text }: BannerColorI) => {
  return (
    <Container>
      <Banner>
        <h4>{text}</h4>
      </Banner>
      <GraphBox>
        <GraphInner>
          <p>후원 정보</p>
          <p>후원자 정보</p>
          <p>결제 및 후원 완료</p>
        </GraphInner>
      </GraphBox>
    </Container>
  );
};

export default BannerColor;
