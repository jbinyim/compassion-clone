import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: ${({ theme }) => theme.colors.endeavour};
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.nero};
  cursor: pointer;
  transition: all 0.3s;
  &.w140h48 {
    width: 140px;
    height: 48px;
    @media ${({ theme }) => theme.mediaSize.l} {
      display: none;
    }
  }
  &.giveChild {
    width: 180px;
    height: 48px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.08);
    &:hover {
      background: rgb(0, 67, 129);
    }
  }
  &.seemoreGraph {
    width: 180px;
    height: 48px;
    background: #fff;
    color: ${({ theme }) => theme.colors.endeavour};
    @media ${({ theme }) => theme.mediaSize.l} {
      width: 160px;
    }
    @media ${({ theme }) => theme.mediaSize.m} {
      width: 210px;
    }
  }
`;

interface SColorI {
  text: string;
  btnName: string;
}

const SquareColorBtn = ({ text, btnName }: SColorI) => {
  return <Btn className={btnName}>{text}</Btn>;
};

export default SquareColorBtn;
