import React from "react";
import styled from "styled-components";
import { quickArr } from "../../util";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.blackSqueeze3};
  @media ${({ theme }) => theme.mediaSize.l} {
    margin-top: 300px;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 64px 0;
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.mediaSize.m} {
    flex-direction: column;
  }
`;

interface qucikboxI {
  $bgImg: string;
  $colors: string;
}

const QucikBox = styled.div<qucikboxI>`
  width: 384px;
  height: 288px;
  background: ${(props) => props.$colors} url(${(props) => props.$bgImg})
    no-repeat 304px 42px;
  background-size: 40px;
  cursor: pointer;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    width: 32%;
    height: auto;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    width: 100%;
  }
`;

const Title = styled.h3`
  margin: 48px 32px 24px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const Text = styled.p`
  margin: 0 32px;
  font-size: 16px;
  font-weight: lighter;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.colors.glacier};
`;

const SeeMore = styled.p`
  margin: 57px 32px 45px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  width: 117px;
  padding-bottom: 7px;
  border-bottom: 1px solid #fff;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 12px;
    height: 1px;
    transform: rotate(45deg);
    position: absolute;
    right: -1px;
    bottom: 3px;
    background: #fff;
  }
`;

const QuickLink = () => {
  return (
    <Container>
      <Inner>
        {quickArr.map((item, idx) => (
          <QucikBox key={idx} $colors={item.colors} $bgImg={item.img}>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
            <Text>{item.text02}</Text>
            <SeeMore>자세히보기</SeeMore>
          </QucikBox>
        ))}
      </Inner>
    </Container>
  );
};

export default QuickLink;
