import React, { useRef } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { bannerImgArr, resBannerImgArr } from "../../util";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  overflow: hidden;
  .slick-arrow {
    z-index: 10;
    &::before {
      font-size: 80px;
      @media ${({ theme }) => theme.mediaSize.m} {
        font-size: 24px;
      }
    }
  }
  .slick-prev {
    left: 10%;
    @media ${({ theme }) => theme.mediaSize.xxxl} {
      left: 0;
    }
  }
  .slick-next {
    right: 10%;
    @media ${({ theme }) => theme.mediaSize.xxxl} {
      right: 60px;
    }
    @media ${({ theme }) => theme.mediaSize.m} {
      right: 5px;
    }
  }
  .slick-dots {
    bottom: 57px;
    li {
      margin: 0 16px;
      button {
        &::before {
          font-size: 15px;
        }
      }
      &.slick-active {
        button {
          &::before {
            color: ${({ theme }) => theme.colors.green};
          }
        }
      }
    }
  }
`;

const SlideImg = styled.img`
  width: 100%;
  height: 856px;
  object-position: center;
  object-fit: cover;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    height: 65vw;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    height: auto;
  }
`;

const SlideBtns = styled.div`
  display: inline-block;
  transform: translate(56.25vw, -82px);
  @media ${({ theme }) => theme.mediaSize.xxxl} {
    transform: translate(59.028vw, -82px);
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    transform: translate(65.477vw, -82px);
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    transform: translate(71.615vw, -82px);
  }
`;

const SlideBtn = styled.svg`
  width: 30px;
  height: 30px;
  fill: #fff;
  cursor: pointer;
`;

const MainSlide = () => {
  let sliderRef = useRef<Slider>(null);

  const m = useMediaQuery({ maxWidth: 500 });

  const play = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };
  const pause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Container>
      <div key={`slider-container`} className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {m
            ? resBannerImgArr.map((item, idx) => (
                <div key={idx}>
                  <SlideImg src={item} alt="slideImg" />
                </div>
              ))
            : bannerImgArr.map((item, idx) => (
                <div key={idx}>
                  <SlideImg src={item} alt="slideImg" />
                </div>
              ))}
        </Slider>
        <SlideBtns style={{ textAlign: "center" }}>
          <SlideBtn onClick={pause} viewBox="0 -960 960 960">
            <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" />
          </SlideBtn>
          <SlideBtn onClick={play} viewBox="0 -960 960 960">
            <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
          </SlideBtn>
        </SlideBtns>
      </div>
    </Container>
  );
};

export default MainSlide;
