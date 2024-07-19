import React from "react";
import styled from "styled-components";
import BlueLineTitle from "../component/BlueLineTitle";
import leftTitle from "../../img/storypage/10026.png";
import rightTitle from "../../img/storypage/10027.png";
import { seriArr } from "../../util";
import SquareBtn from "../buttons/SquareBtn";

const Container = styled.div`
  margin-top: 40px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const DeclarationTitleBox = styled.div`
  text-align: center;
  margin-top: 80px;
`;

const DeclarationTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.endeavour};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 10%;
    width: 45px;
    height: 45px;
    background: url(${leftTitle}) center/cover no-repeat;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 10%;
    width: 45px;
    height: 45px;
    background: url(${rightTitle}) center/cover no-repeat;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 18px;
    line-height: 28px;
    &::before {
      width: 30px;
      height: 30px;
    }
    &::after {
      width: 30px;
      height: 30px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    &::before {
      left: 2%;
    }
    &::after {
      right: 2%;
    }
  }
`;

const SeriseBox = styled.div`
  margin-top: 80px;
`;

const SeriseTitle = styled.h4`
  font-size: 32px;
  font-weight: bold;
`;

const SeriseImgBox = styled.ul`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media ${({ theme }) => theme.mediaSize.l} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Serises = styled.li`
  text-align: center;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 416px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    height: 80%;
  }
`;

const ImgText = styled.p`
  font-size: 20px;
  font-weight: lighter;
  margin-top: 24px;
`;

const Declaration = () => {
  return (
    <Container>
      <Inner>
        <BlueLineTitle text="사명선언문" />
        <DeclarationTitleBox>
          <DeclarationTitle>
            컴패션은 꿈을 잃은 어린이들을
            <br />
            그리스도의 사랑으로 양육하기 위해 존재합니다.
          </DeclarationTitle>
        </DeclarationTitleBox>
        <SeriseBox>
          <SeriseTitle>사업 철학 시리즈</SeriseTitle>
          <SeriseImgBox>
            {seriArr.map((item, idx) => (
              <Serises key={idx}>
                <Img src={item.img} alt="seriImg" />
                <SquareBtn text="Download" btnName="download" />
                <ImgText>{item.name}</ImgText>
              </Serises>
            ))}
          </SeriseImgBox>
        </SeriseBox>
      </Inner>
    </Container>
  );
};

export default Declaration;
