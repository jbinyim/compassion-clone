import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { specialBannerArr } from "../../util";
import bgImg from "../../img/home/bg_special_object.png";
import leftBtn from "../../img/icon/leftbox.png";
import rightBtn from "../../img/icon/rigthtbox.png";
import SquareBtn from "../buttons/SquareBtn";
import SquareColorBtn from "../buttons/SquareColorBtn";

const Container = styled.div`
  width: 1560px;
  margin-left: auto;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 538px;
    height: 728px;
    background: url(${bgImg}) no-repeat 0 0;
    position: absolute;
    left: -194px;
    bottom: -70px;
  }
  .slick-slide {
    margin: 0 12px;
  }
  .slick-arrow {
    display: none !important;
  }
  @media screen and (max-width: 1560px) {
    padding-left: 40px;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    &::before {
      /* width: 350px; */
      height: 572px;
    }
  }
`;

const SlideBox = styled.div<{ $bgImg: string }>`
  width: 100%;
  height: 559px;
  background: url(${(props) => props.$bgImg}) center/cover no-repeat;
  box-shadow: 0 6px 14px -2px rgba(0, 0, 0, 0.25);
  @media ${({ theme }) => theme.mediaSize.xl} {
    height: 436px;
  }
`;

const Title = styled.h2`
  margin-top: 288px;
  margin-left: 32px;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.nero};
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 26px;
    margin-top: 200px;
    letter-spacing: -1px;
    margin-left: 20px;
  }
`;

const Text = styled.p`
  height: 96px;
  margin: 10px 32px 30px;
  font-size: 16px;
  font-weight: lighter;
  line-height: normal;
  color: ${({ theme }) => theme.colors.alto};
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 14px;
    margin: 10px 20px 30px;
  }
`;

const SlideBtnBox = styled.div`
  margin: 0 32px 46px;
  display: flex;
  gap: 8px;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  left: 0;
  bottom: -130px;
  @media ${({ theme }) => theme.mediaSize.m} {
    display: none;
  }
  @media screen and (max-width: 1560px) {
    margin-left: 2%;
  }
`;

const Btn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const MainSubSlide = () => {
  let sliderRef = useRef<Slider>(null);

  const m = useMediaQuery({ maxWidth: 1024 });

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <Container>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {specialBannerArr.map((item, idx) => (
            <SlideBox
              key={idx}
              $bgImg={item.img}
              style={m ? { width: 300 } : { width: 384 }}
            >
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
              <SlideBtnBox>
                <SquareBtn text="자세히 보기" btnName="specialSee" />
                <SquareColorBtn text="바로 후원하기" btnName="specialGive" />
              </SlideBtnBox>
            </SlideBox>
          ))}
        </Slider>
        <BtnBox>
          <Btn className="button" onClick={previous}>
            <img src={leftBtn} alt="leftBtn" />
          </Btn>
          <Btn className="button" onClick={next}>
            <img src={rightBtn} alt="rightBtn" />
          </Btn>
        </BtnBox>
      </div>
    </Container>
  );
};

export default MainSubSlide;
