import React, { useState } from "react";
import styled from "styled-components";
import BlueLineTitle from "../component/BlueLineTitle";
import bottomImg from "../../img/storypage/storyBottom.png";
import HistoryDesc from "./HistoryDesc";

const Container = styled.div`
  margin-top: 180px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const DateBox = styled.div`
  max-width: 1200px;
  height: auto;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const DateBtn = styled.div<{ $active: boolean }>`
  max-width: 144px;
  width: 100%;
  height: 46px;
  border: 1px solid ${({ theme }) => theme.colors.endeavour};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${(props) => (props.$active ? "#fff" : "#005eb8")};
  background: ${(props) => (props.$active ? "#005eb8" : "#fff")};
  cursor: pointer;
  flex: 1 1 144px;
  @media ${({ theme }) => theme.mediaSize.l} {
    width: 20%;
    flex: 1 1 20%;
  }
`;

const HistoryDescBox = styled.div`
  margin-top: 96px;
`;

const BottomImgBox = styled.div<{ $bgIMg: string }>`
  width: 1200px;
  height: 225px;
  background: url(${(props) => props.$bgIMg}) center no-repeat;
  margin: 200px auto 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.mediaSize.xl} {
    width: 95%;
    background: ${({ theme }) => theme.colors.endeavour};
  }
`;

const BottomImgTitle = styled.h4`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  letter-spacing: -1px;
`;

const GiveBtn = styled.p`
  width: 104px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  padding-bottom: 5px;
  border-bottom: 1px solid #fff;
  margin-top: 40px;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    right: 4px;
    width: 1px;
    height: 10px;
    background: #fff;
    transform: rotate(-45deg);
  }
`;

const historyDate = ["1950", "1960", "1970", "1990", "2000", "2010", "2020"];

const History = () => {
  const [historyToggle, setHistoryToggle] = useState("1950");

  const handClick = (btnName: string) => {
    setHistoryToggle(btnName);
  };

  return (
    <Container>
      <Inner>
        <BlueLineTitle text="히스토리" />
        <DateBox>
          {historyDate.map((item) => (
            <DateBtn
              key={item}
              $active={historyToggle === item}
              onClick={() => handClick(item)}
            >
              {item}
            </DateBtn>
          ))}
        </DateBox>
        <HistoryDescBox>
          <HistoryDesc historyToggle={historyToggle} />
        </HistoryDescBox>
        <BottomImgBox $bgIMg={bottomImg}>
          <div>
            <BottomImgTitle>
              어린이가 자라고 후원자도 자라는
              <br />
              우리는 컴패션입니다
            </BottomImgTitle>
            <GiveBtn>후원하기</GiveBtn>
          </div>
        </BottomImgBox>
      </Inner>
    </Container>
  );
};

export default History;
