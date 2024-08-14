import React from "react";
import styled from "styled-components";
import { newsArr } from "./newsDB";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  margin: 80px 0 150px;
`;

const BigTitle = styled.h4`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 24px;
  }
`;

const Card = styled.div`
  padding: 0 8px;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 384px;
  object-fit: cover;
`;

const Title = styled.h4`
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  margin: 16px 0 24px;
`;

const Line = styled.p`
  width: 1px;
  height: 10px;
  background: ${({ theme }) => theme.colors.gray};
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -1px;
`;

interface newsI {
  text: string;
  first: number;
  sceond: number;
}

const RecomendNews = ({ text, first, sceond }: newsI) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <BigTitle>{text}</BigTitle>
      <div className="slider-container">
        <Slider {...settings}>
          {newsArr.slice(first, sceond).map((item, idx) => (
            <Card key={idx}>
              <Img src={item.img} alt="recomendImg" />
              <Title>{item.title}</Title>
              <Box>
                <p>{item.category}</p>
                <Line />
                <p>{item.date}</p>
              </Box>
              <Text>{item.text}</Text>
            </Card>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default RecomendNews;
