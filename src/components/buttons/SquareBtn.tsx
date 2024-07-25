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
    @media ${({ theme }) => theme.mediaSize.m} {
      letter-spacing: -1px;
    }
    @media ${({ theme }) => theme.mediaSize.s} {
      font-size: 13px;
      letter-spacing: -1px;
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
  &.storySee {
    width: 180px;
    height: 48px;
    margin-left: 40px;
    margin-bottom: 15px;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  &.storySee02 {
    width: 180px;
    height: 48px;
    margin-left: 40px;
    color: #000;
    border: 1px solid #000;
    margin-bottom: 15px;
    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }
  &.download {
    position: absolute;
    z-index: 1;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 112px;
    height: 36px;
  }
  &.childSee {
    width: 100%;
    height: 48px;
    font-size: 14px;
    font-weight: lighter;
    border: 1px solid ${({ theme }) => theme.colors.endeavour};
    color: ${({ theme }) => theme.colors.endeavour};
    background: #fff;
    margin-top: 61px;
  }
  &.best {
    max-width: 218px;
    width: 100%;
    height: 48px;
  }
  &.shareBtn {
    max-width: 145px;
    width: 100%;
    height: 48px;
    color: ${({ theme }) => theme.colors.endeavour};
    border: 1px solid ${({ theme }) => theme.colors.endeavour};
    @media ${({ theme }) => theme.mediaSize.l} {
      max-width: 209px;
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
