import React from "react";
import styled from "styled-components";
import BlueLineTitle from "../component/BlueLineTitle";
import bottomImg from "../../img/storypage/storyBottom.png";

const Container = styled.div`
  margin-top: 180px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const DateBox = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 16px;
`;

const DateBtn = styled.div`
  width: 144px;
  height: 46px;
  border: 1px solid ${({ theme }) => theme.colors.endeavour};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.endeavour};
  cursor: pointer;
`;

const HistoryDescBox = styled.div`
  margin-top: 96px;
`;

const BottomImgBox = styled.div<{ $bgIMg: string }>`
  width: 100%;
  height: 225px;
  background: url(${(props) => props.$bgIMg}) center/cover no-repeat;
  margin: 350px 0 80px;
`;

const historyDate = ["1950", "1960", "1970", "1990", "2000", "2010", "2020"];

const History = () => {
  return (
    <Container>
      <Inner>
        <BlueLineTitle text="히스토리" />
        <DateBox>
          {historyDate.map((item) => (
            <DateBtn key={item}>{item}</DateBtn>
          ))}
        </DateBox>
        <HistoryDescBox></HistoryDescBox>
        <BottomImgBox $bgIMg={bottomImg}></BottomImgBox>
      </Inner>
    </Container>
  );
};

export default History;
