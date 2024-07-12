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
  &.w140h48 {
    width: 140px;
    height: 48px;
    @media ${({ theme }) => theme.mediaSize.l} {
      display: none;
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
