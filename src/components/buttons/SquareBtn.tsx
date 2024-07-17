import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.nero};
  border: 1px solid ${({ theme }) => theme.colors.nero};
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  &.bannerBtn {
    font-size: 14px;
    padding: 5px 19px;
    @media ${({ theme }) => theme.mediaSize.l} {
      font-size: 12px;
      padding: 3px 13px;
    }
  }
  &.seemoreChild {
    color: ${({ theme }) => theme.colors.endeavour};
    border: 1px solid ${({ theme }) => theme.colors.endeavour};
    width: 180px;
    height: 48px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.08);
    &:hover {
      border: 1px solid #000;
      color: #000;
    }
  }
  &.report2023 {
    width: 204px;
    height: 48px;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    @media ${({ theme }) => theme.mediaSize.l} {
      width: 160px;
    }
    @media ${({ theme }) => theme.mediaSize.m} {
      width: 210px;
    }
  }
  &.specialSee {
    width: 144px;
    height: 48px;
    padding: 0 10px;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

interface squareBtnI {
  text: string;
  btnName: string;
}

const SquareBtn = ({ text, btnName }: squareBtnI) => {
  return <Btn className={btnName}>{text}</Btn>;
};

export default SquareBtn;
