import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.endeavour};
  padding-bottom: 10px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: calc(100% + 300px);
    height: 1px;
    background: ${({ theme }) => theme.colors.endeavour};
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 16px;
  }
`;

interface BluelineI {
  text: string;
}

const BlueLineTitle = ({ text }: BluelineI) => {
  return <Title>{text}</Title>;
};

export default BlueLineTitle;
