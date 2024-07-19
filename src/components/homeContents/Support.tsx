import React from "react";
import styled from "styled-components";
import graph from "../../img/home/home_graph.png";
import SquareBtn from "../buttons/SquareBtn";
import SquareColorBtn from "../buttons/SquareColorBtn";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 1200px;
  height: 393px;
  background: ${({ theme }) => theme.colors.endeavour};
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 1;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    flex-direction: row-reverse;
    justify-content: space-around;
    height: 450px;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    height: 365px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    height: 316px;
    padding: 0 30px;
    gap: 0;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    height: auto;
    flex-direction: column-reverse;
    gap: 38px;
    padding: 50px 30px;
  }
`;

const ImgBox = styled.div`
  width: 432px;
  margin-left: 38px;
  transform: translateY(-38px);
  img {
    width: 100%;
  }
  @media ${({ theme }) => theme.mediaSize.xxl} {
    width: 350px;
    transform: translateY(0);
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    width: 265px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    width: 216px;
    margin-left: 0;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    width: 305px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: #fff;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: bold;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 30px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 28px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.jaggedIce};
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 14px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  gap: 24px;
  @media ${({ theme }) => theme.mediaSize.m} {
    flex-direction: column;
  }
`;

const Support = () => {
  return (
    <Container>
      <ImgBox>
        <img src={graph} alt="graph" />
      </ImgBox>
      <TextBox>
        <Title>
          컴패션 후원금은
          <br />
          이렇게 사용됩니다!
        </Title>
        <Description>
          컴패션은 후원금의 80% 이상을 반드시 어린이
          <br />
          양육을 위해 사용한다는 원칙을 지킵니다.
        </Description>
        <BtnBox>
          <SquareColorBtn text="자세히 보기" btnName="seemoreGraph" />
          <Link
            to={"https://www.compassion.or.kr/c/2023compassion"}
            target="_blank"
          >
            <SquareBtn text="2023 사업성과보고" btnName="report2023" />
          </Link>
        </BtnBox>
      </TextBox>
    </Container>
  );
};

export default Support;
