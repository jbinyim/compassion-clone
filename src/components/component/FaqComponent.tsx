import React, { useState } from "react";
import styled from "styled-components";
import { supportFaqArr } from "../../util";
import loadingImg from "../../img/icon/loading.gif";

const ListBox = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.geyser};
  &:last-child {
    border-bottom: none;
  }
`;

const QuestionBox = styled.div`
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;
  cursor: pointer;
`;

const QusetionLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const QuestionIcon = styled.p`
  min-width: 48px;
  height: 48px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.lochmara};
  font-size: 18px;
  font-weight: bold;
  line-height: 48px;
  color: #fff;
  text-align: center;
  @media ${({ theme }) => theme.mediaSize.m} {
    min-width: 32px;
    height: 32px;
    font-size: 16px;
    line-height: 32px;
  }
`;

const Qusetion = styled.p`
  font-size: 16px;
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 14px;
  }
`;

const DownBtn = styled.svg<{ $isOpen: boolean }>`
  width: 30px;
  height: 30px;
  fill: #000;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

const AnswerBox = styled.div<{ $isOpen: boolean }>`
  height: auto;
  background: ${({ theme }) => theme.colors.aquaHaze};
  transition: all 0.4s;
  max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  padding: ${({ $isOpen }) => ($isOpen ? "24px 30px" : "0 30px")};
  overflow: hidden;
`;

const AnswerTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Answer = styled.p`
  font-size: 14px;
  @media ${({ theme }) => theme.mediaSize.m} {
    letter-spacing: -1px;
  }
`;

const AnswerIcon = styled(QuestionIcon)`
  background: ${({ theme }) => theme.colors.endeavour};
`;

interface FaqI {
  menuToggle: string;
}

const FaqComponent = ({ menuToggle }: FaqI) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggleAnswer = (idx: number) => {
    setIsOpen(isOpen === idx ? null : idx);
  };
  switch (menuToggle) {
    case "zero":
      return (
        <>
          {supportFaqArr.zero.map((item, idx) => (
            <ListBox key={idx}>
              <QuestionBox onClick={() => toggleAnswer(idx)}>
                <QusetionLeft>
                  <QuestionIcon>Q</QuestionIcon>
                  <Qusetion>{item.q}</Qusetion>
                </QusetionLeft>
                <DownBtn viewBox="0 -960 960 960" $isOpen={isOpen === idx}>
                  <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </DownBtn>
              </QuestionBox>
              <AnswerBox $isOpen={isOpen === idx}>
                <AnswerTextBox>
                  <AnswerIcon>A</AnswerIcon>
                  <Answer>{item.a}</Answer>
                </AnswerTextBox>
              </AnswerBox>
            </ListBox>
          ))}
        </>
      );
    case "one":
      return (
        <>
          {supportFaqArr.one.map((item, idx) => (
            <ListBox key={idx}>
              <QuestionBox onClick={() => toggleAnswer(idx)}>
                <QusetionLeft>
                  <QuestionIcon>Q</QuestionIcon>
                  <Qusetion>{item.q}</Qusetion>
                </QusetionLeft>
                <DownBtn viewBox="0 -960 960 960" $isOpen={isOpen === idx}>
                  <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </DownBtn>
              </QuestionBox>
              <AnswerBox $isOpen={isOpen === idx}>
                <AnswerTextBox>
                  <AnswerIcon>A</AnswerIcon>
                  <Answer>{item.a}</Answer>
                </AnswerTextBox>
              </AnswerBox>
            </ListBox>
          ))}
        </>
      );
    case "two":
      return (
        <>
          {supportFaqArr.two.map((item, idx) => (
            <ListBox key={idx}>
              <QuestionBox onClick={() => toggleAnswer(idx)}>
                <QusetionLeft>
                  <QuestionIcon>Q</QuestionIcon>
                  <Qusetion>{item.q}</Qusetion>
                </QusetionLeft>
                <DownBtn viewBox="0 -960 960 960" $isOpen={isOpen === idx}>
                  <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </DownBtn>
              </QuestionBox>
              <AnswerBox $isOpen={isOpen === idx}>
                <AnswerTextBox>
                  <AnswerIcon>A</AnswerIcon>
                  <Answer>{item.a}</Answer>
                </AnswerTextBox>
              </AnswerBox>
            </ListBox>
          ))}
        </>
      );
    default:
      return (
        <div>
          <img src={loadingImg} alt="loading" />
        </div>
      );
  }
};

export default FaqComponent;
