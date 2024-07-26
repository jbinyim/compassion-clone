import React, { useState } from "react";
import styled from "styled-components";
import BlueLineTitle from "../component/BlueLineTitle";
import { togeterArr } from "../../util";

const Container = styled.div`
  margin-top: 90px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const TogeterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 40px 0 30px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.15);
`;

const ImgBox = styled.div`
  box-sizing: border-box;
  height: 252px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 252px;
  object-fit: cover;
`;

const ImgText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  line-height: 48px;
  background: rgba(118, 134, 146, 0.78);
`;

const TextBox = styled.div`
  width: 100%;
  background: #fff;
  padding: 40px 24px;
  box-sizing: border-box;
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const MidBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const BlueText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.endeavour};
`;

const Clear = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
`;

const Progress = styled.progress`
  width: 100%;
  && {
    appearance: none;
    height: 15px;
  }

  &&::-webkit-progress-bar {
    background-color: #e0e0e0;
    border-radius: 10px;
  }

  &&::-webkit-progress-value {
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 10px;
  }

  &&::-moz-progress-bar {
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 10px;
  }
`;

const GrayText = styled(BlueText)`
  color: #000;
`;

const BtnBox = styled.div`
  text-align: center;
  margin-bottom: 120px;
`;

const SeemoreBtn = styled.button`
  width: 320px;
  height: 48px;
  background: #fff;
  outline: none;
  border: 1px solid #000;
  font-size: 15px;
  cursor: pointer;
`;

const SpecialTogater = () => {
  const [cardToggle, setCardToggle] = useState(3);
  return (
    <Container>
      <Inner>
        <BlueLineTitle text="함께하는 나눔 프로젝트" />
        <TogeterBox>
          {togeterArr.slice(0, cardToggle).map((item, idx) => (
            <Card key={idx}>
              <ImgBox>
                <Img src={item.img} alt="togeterImg" />
                {item.day === "x" && (
                  <ImgText>목표 금액에 달성하였습니다.</ImgText>
                )}
              </ImgBox>
              <TextBox>
                <Title>{item.title}</Title>
                <MidBox>
                  <Clear>
                    <BlueText>{item.clear}%</BlueText>달성
                  </Clear>
                  {item.day === "x" ? (
                    <Clear>모금 기간 종료</Clear>
                  ) : (
                    <Clear>
                      <BlueText>{item.day}</BlueText>일 남았어요
                    </Clear>
                  )}
                </MidBox>
                <Progress value={item.clear} max={100} />
                <MidBox>
                  <Clear>
                    <BlueText>{item.nowmoney}</BlueText>원
                  </Clear>
                  <Clear>
                    <GrayText>{item.maxmoney}</GrayText>원
                  </Clear>
                </MidBox>
              </TextBox>
            </Card>
          ))}
        </TogeterBox>
        {cardToggle !== 4 && (
          <BtnBox>
            <SeemoreBtn onClick={() => setCardToggle(4)}>더보기</SeemoreBtn>
          </BtnBox>
        )}
      </Inner>
    </Container>
  );
};

export default SpecialTogater;
