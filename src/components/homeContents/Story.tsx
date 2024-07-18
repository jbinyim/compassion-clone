import React from "react";
import styled from "styled-components";
import story01 from "../../img/home/story/story1.jpg";
import story02 from "../../img/home/story/story3.jpg";
import SquareBtn from "../buttons/SquareBtn";
import ycircle from "../../img/home/story/bg_half_circle_object.png";
import rcircle from "../../img/home/story/bg_main_circle_object_02.png";
import bgLine from "../../img/home/story/bg_main_line_bot.png";

const Container = styled.div`
  margin-top: 300px;
  padding-bottom: 200px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 373px;
    left: 100px;
    width: 393px;
    height: 324px;
    background: url(${ycircle}) center/cover no-repeat;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 493px;
    height: 490px;
    background: url(${rcircle}) center/cover no-repeat;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    margin-top: 1000px;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
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
    left: -260px;
    bottom: 0;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const SubTitle = styled.p`
  font-size: 40px;
  font-weight: bold;
  line-height: 52px;
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 24px;
  }
`;

const Section01 = styled.div`
  margin-top: 97px;
  margin-bottom: 93px;
  position: relative;
  @media ${({ theme }) => theme.mediaSize.l} {
    margin-bottom: 400px;
  }
`;

const Story01Img = styled.img`
  width: 792px;
  height: 480px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    width: 60%;
    height: 100%;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    width: 92%;
  }
`;

const TextBox01 = styled.div`
  width: 480px;
  height: 480px;
  background: ${({ theme }) => theme.colors.endeavour};
  box-shadow: 0 6px 14px -2px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 52px;
  right: 0;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    right: 5%;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    width: 452px;
    height: auto;
    top: -10px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    top: 300px;
    left: 0;
    max-width: 680px;
    width: 92%;
  }
`;

const TextTitle = styled.h4`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -1px;
  color: #fff;
  margin: 40px 40px 0;
  padding-bottom: 27px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 56px;
    height: 3px;
    background: ${({ theme }) => theme.colors.green};
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 26px;
  }
`;

const TextDesc = styled.p`
  font-size: 16px;
  font-weight: lighter;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.jaggedIce};
  margin: 27px 40px 50px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 14px;
    margin-bottom: 25px;
  }
`;

const Section02 = styled.div`
  position: relative;
`;

const TextBox02 = styled.div`
  width: 480px;
  height: 480px;
  background: ${({ theme }) => theme.colors.green};
  box-shadow: 0 6px 14px -2px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;
  top: 52px;
  left: 0;
  @media ${({ theme }) => theme.mediaSize.xl} {
    width: 452px;
    height: auto;
    top: -10px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    top: 330px;
    left: 0;
    max-width: 680px;
    width: 92%;
  }
`;

const TextTitle02 = styled.h4`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -1px;
  color: #000;
  padding: 40px 40px 27px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 40px;
    width: 56px;
    height: 3px;
    background: ${({ theme }) => theme.colors.endeavour};
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 26px;
  }
`;

const TextDesc02 = styled.p`
  font-size: 16px;
  font-weight: lighter;
  line-height: 24px;
  color: #000;
  margin: 27px 40px 50px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 14px;
    margin-bottom: 25px;
  }
`;

const Story02Img = styled.img`
  width: 792px;
  height: 480px;
  position: absolute;
  top: 0;
  right: 0;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    width: 60%;
    height: 100%;
    right: 5%;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    width: 92%;
    left: 0;
    right: 0;
  }
`;

const Story = () => {
  return (
    <Container>
      <Inner>
        <div>
          <Title>소식/스토리</Title>
          <SubTitle>
            컴패션과 함께하는
            <br />
            이야기를 들려드립니다
          </SubTitle>
        </div>
        <Section01>
          <Story01Img src={story01} alt="storyImg" />
          <TextBox01>
            <TextTitle>
              20년 동안 지구 160바퀴, 전세계 가장 소외되고 가난한 곳을 향하는
              이유
            </TextTitle>
            <TextDesc>
              20년 동안 지구 160바퀴, 가장 소외되고 가난한 곳을 향하는 발걸음,
              한국컴패션 서정인 대표는 지난 20여 년간 가난의 대물림을 끊기 위해
              전 세계 곳곳을 다녔습니다. 그가 20년 넘게 이 일을 해올 수 있는
              원동력은 과연 무엇일까요?
            </TextDesc>
            <SquareBtn text="지금 보러가기" btnName="storySee" />
          </TextBox01>
        </Section01>
        <Section02>
          <TextBox02>
            <TextTitle02>
              우리가 기도할 때 하나님께서 일하십니다, 2024 컴패셔너 연합예배
            </TextTitle02>
            <TextDesc02>
              컴패션을 통해 예수님의 사랑을 경험하고 그 경험에 다른 이를
              초대하는 사람들, 컴패셔너들의 아름다운 외침, 기도를 하나님께
              연합하여 나아간 현장.
            </TextDesc02>
            <SquareBtn text="지금 보러가기" btnName="storySee02" />
          </TextBox02>
          <Story02Img src={story02} alt="storyimg" />
        </Section02>
      </Inner>
    </Container>
  );
};

export default Story;
