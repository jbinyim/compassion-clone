import React from "react";
import styled from "styled-components";

interface containerI {
  $img: string;
  $resImg: string;
}

const Container = styled.div<containerI>`
  width: 100%;
  height: 592px;
  background: url(${(props) => props.$img}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.xl} {
    height: 500px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    height: 420px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    width: 100%;
    height: 575px;
    background: url(${(props) => props.$resImg}) center/cover no-repeat;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  line-height: 59px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 35px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 28px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 20px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: lighter;
  line-height: 28px;
  text-align: center;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 13px;
  }
`;

interface BannerI {
  image: string;
  resImg: string;
  title: string;
  text: React.ReactNode;
}

const Banner = ({ image, resImg, title, text }: BannerI) => {
  return (
    <Container $img={image} $resImg={resImg}>
      <Box>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Box>
    </Container>
  );
};

export default Banner;
