import React from "react";
import styled from "styled-components";
import MainSubSlide from "../slides/MainSubSlide";

const Container = styled.div`
  margin-top: 820px;
  margin-bottom: 268px;

  @media ${({ theme }) => theme.mediaSize.xl} {
    margin-top: 650px;
  }
`;

const TitleBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 190px;
  position: relative;
  z-index: 1;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    margin-bottom: 100px;
    padding: 0 4%;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.endeavour};
  padding-bottom: 12px;
  margin-bottom: 52px;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 391px;
    height: 1px;
    background: ${({ theme }) => theme.colors.endeavour};
    position: absolute;
    left: -290px;
    bottom: 0;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const SubTitle = styled.h4`
  font-size: 40px;
  font-weight: bold;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 30px;
    line-height: 40px;
    font-weight: 700;
  }
`;

const Special = () => {
  return (
    <Container>
      <TitleBox>
        <Title>맞춤후원</Title>
        <SubTitle>
          양육에 가치를 더하는
          <br />
          당신을 위한, 맞춤 후원
        </SubTitle>
      </TitleBox>
      <MainSubSlide />
    </Container>
  );
};

export default Special;
