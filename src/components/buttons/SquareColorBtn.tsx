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
    @media ${({ theme }) => theme.mediaSize.s} {
      font-size: 13px;
      letter-spacing: -1px;
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
  &.specialGive {
    width: 167px;
    height: 48px;
    &:hover {
      background: rgb(0, 67, 129);
    }
  }
  &.childNow {
    width: 100%;
    &:hover {
      background: rgb(0, 67, 129);
    }
  }
  &.benfitBtn {
    width: 320px;
    height: 48px;
    &:hover {
      background: rgb(0, 67, 129);
    }
  }
  &.childpagenow {
    width: 180px;
    height: 48px;
    &:hover {
      background: rgb(0, 67, 129);
    }
    @media ${({ theme }) => theme.mediaSize.xxl} {
      max-width: 414px;
      width: 100%;
    }
    @media ${({ theme }) => theme.mediaSize.l} {
      width: 180px;
    }
  }
  &.best {
    max-width: 218px;
    width: 100%;
    height: 48px;
    &:hover {
      background: rgb(0, 67, 129);
    }
  }
  &.shareBtn {
    max-width: 165px;
    width: 100%;
    height: 48px;
    &:hover {
      background: rgb(0, 67, 129);
    }
    @media ${({ theme }) => theme.mediaSize.l} {
      max-width: 245px;
    }
  }
  &.signUp {
    width: 200px;
    height: 48px;
    margin-bottom: 20px;
    &.login {
      max-width: 282px;
      width: 100%;
      margin-bottom: 0;
      @media ${({ theme }) => theme.mediaSize.m} {
        max-width: 414px;
      }
      &:hover {
        background: rgb(0, 67, 129);
      }
    }
  }
  &.errBtn {
    max-width: 280px;
    width: 100%;
    height: 48px;
    &:hover {
      background: rgb(0, 67, 129);
    }
  }
  &.modalBtn {
    max-width: 180px;
    width: 100%;
    height: 48px;
    &:hover {
      background: rgb(0, 67, 129);
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
