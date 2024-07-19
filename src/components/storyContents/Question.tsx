import React from "react";
import styled from "styled-components";
import { questionArr } from "../../util";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.blackSqueeze};
  padding: 64px 0 80px;
  margin-top: 40px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const QuestionTitle = styled.h4`
  font-size: 32px;
  font-weight: bold;
`;

const QuestionBox = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const QuestionList = styled.div`
  width: 588px;
  height: 122px;
  background: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.endeavour};
    h4,
    h3 {
      color: #fff;
    }
    img {
      width: 200px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.xxl} {
    width: 100%;
  }
`;

const QNumber = styled.h4`
  font-size: 40px;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.endeavour};
  margin-left: 32px;
`;

const Text = styled.h3`
  width: 270px;
  font-size: 20px;
  letter-spacing: -1px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    width: calc(270px + 30%);
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    width: calc(270px + 10%);
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 16px;
    width: calc(270px- 30px);
    margin-left: 30px;
  }
`;

const Img = styled.img`
  width: 154px;
  height: 100%;
  transition: all 0.5s;
`;

const Question = () => {
  return (
    <Container>
      <Inner>
        <QuestionTitle>
          세상을 변화시킬
          <br />
          10가지 질문
        </QuestionTitle>
        <QuestionBox>
          {questionArr.map((item) => (
            <QuestionList key={item.id}>
              <QNumber>{item.id}</QNumber>
              <Text>
                {item.text}
                <br />
                {item.text02}
              </Text>
              <Img src={item.resImg} alt="qImg" />
            </QuestionList>
          ))}
        </QuestionBox>
      </Inner>
    </Container>
  );
};

export default Question;
