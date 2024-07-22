import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.img`
  width: 144px;
  height: 54px;
`;

const SubTitle = styled.h4`
  font-size: 32px;
  font-weight: bold;
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 20px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 13px;
  }
`;

interface HistoryComponentI {
  data: {
    title: string;
    subTitle: string;
    text: string;
    img: string;
  };
}

const HisoryComponent = ({ data }: HistoryComponentI) => {
  return (
    <Container>
      <Title src={data.title} alt="titleImg" />
      <SubTitle>{data.subTitle}</SubTitle>
      <Text>{data.text}</Text>
      <img src={data.img} alt="hisoryImg" />
    </Container>
  );
};

export default HisoryComponent;
