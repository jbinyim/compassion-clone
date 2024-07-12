import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.nero};
  border: 1px solid ${({ theme }) => theme.colors.nero};
  border-radius: 4px;
  font-family: "Noto Sans KR", sans-serif;
  cursor: pointer;
  &.bannerBtn {
    font-size: 14px;
    padding: 5px 19px;
    @media ${({ theme }) => theme.mediaSize.l} {
      font-size: 12px;
      padding: 3px 13px;
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
