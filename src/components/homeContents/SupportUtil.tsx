import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 180px;
  height: 180px;
  padding-top: 20px;
  background: ${({ theme }) => theme.colors.nero};
  @media ${({ theme }) => theme.mediaSize.xxl} {
    width: 19%;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    width: 32%;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    height: auto;
    padding-bottom: 15px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 88px;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: lighter;
  text-align: center;
  margin-top: 15px;
  @media ${({ theme }) => theme.mediaSize.m} {
    &:last-child {
      display: none;
    }
  }
  @media ${({ theme }) => theme.mediaSize.s} {
    display: none;
  }
`;

interface SupportYtilI {
  item: { img: string; text01: string; text02: string };
}

const SupportUtil = ({ item }: SupportYtilI) => {
  return (
    <Container>
      <Img src={item.img} alt="img" />
      <Text>{item.text01}</Text>
      <Text>{item.text02}</Text>
    </Container>
  );
};

export default SupportUtil;
