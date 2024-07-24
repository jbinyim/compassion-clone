import React, { useState } from "react";
import styled from "styled-components";
import FaqComponent from "../component/FaqComponent";

const Container = styled.div`
  margin-top: 190px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
`;

const MenuBox = styled.ul`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media ${({ theme }) => theme.mediaSize.m} {
    gap: 15px;
  }
`;

const Menu = styled.li<{ $menuToggle: boolean }>`
  width: 180px;
  height: 52px;
  border: 1px solid ${({ theme }) => theme.colors.endeavour};
  border-radius: 28px;
  font-size: 18px;
  font-weight: bold;
  line-height: 52px;
  text-align: center;
  color: ${(props) => (props.$menuToggle ? "#fff" : "#005eb8")};
  cursor: pointer;
  background: ${(props) => (props.$menuToggle ? "#005eb8" : "#fff")};
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 15px;
  }
  @media ${({ theme }) => theme.mediaSize.s} {
    font-size: 14px;
    letter-spacing: -1px;
  }
`;

const FaqBox = styled.ul`
  margin-top: 50px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

const SupportFaq = () => {
  const [menuToggle, setMenuToggle] = useState("zero");

  const onClickMenu = (num: string) => {
    setMenuToggle(num);
  };

  return (
    <Container>
      <Inner>
        <Title>자주 묻는 질문</Title>
        <MenuBox>
          <Menu
            onClick={() => onClickMenu("zero")}
            $menuToggle={menuToggle === "zero"}
          >
            후원금
          </Menu>
          <Menu
            onClick={() => onClickMenu("one")}
            $menuToggle={menuToggle === "one"}
          >
            컴패션
          </Menu>
          <Menu
            onClick={() => onClickMenu("two")}
            $menuToggle={menuToggle === "two"}
          >
            1:1 어린이양육
          </Menu>
        </MenuBox>
        <FaqBox>
          <FaqComponent menuToggle={menuToggle} />
        </FaqBox>
      </Inner>
    </Container>
  );
};

export default SupportFaq;
