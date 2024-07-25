import React from "react";
import styled from "styled-components";
import bgImg from "../../img/specialpage/bestproduct/bg.png";
import { bestProduct } from "../../util";
import SquareBtn from "../buttons/SquareBtn";
import SquareColorBtn from "../buttons/SquareColorBtn";

const Container = styled.div`
  margin-top: 40px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -40px;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${bgImg}) left top no-repeat;
    background-size: 732px;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 55px;
  &.product02 {
    img {
      order: 2;
    }
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    flex-direction: column;
    &.product02 {
      img {
        order: -1;
      }
    }
  }
`;

const Img = styled.img`
  width: 588px;
  height: 386px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.15);
  @media ${({ theme }) => theme.mediaSize.xl} {
    width: 100%;
    object-fit: cover;
  }
`;

const TextBox = styled.div<{ $boxColor: string }>`
  width: 612px;
  height: 100%;
  padding: 56px 40px;
  background: ${(props) => props.$boxColor};
  @media ${({ theme }) => theme.mediaSize.xxl} {
    width: 50%;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    box-sizing: border-box;
    width: 100%;
    padding: 36px 24px;
  }
`;

const Title = styled.h4`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const TitleEg = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.alto};
`;

const Text = styled.p`
  font-size: 16px;
  color: #fff;
  margin: 26px 0 40px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 16px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  gap: 40px;
`;

const SpecialBestProduct = () => {
  return (
    <Container>
      <Inner>
        {bestProduct.map((item, idx) => (
          <ProductBox key={idx} className={item.product}>
            <Img src={item.img} alt="besproductImg" />
            <TextBox $boxColor={item.color}>
              <Title>{item.title}</Title>
              <TitleEg>{item.titleEg}</TitleEg>
              <Text>{item.text}</Text>
              <BtnBox>
                <SquareBtn text="자세히보기" btnName={item.btnclass} />
                <SquareColorBtn text="바로 후원하기" btnName={item.btnclass} />
              </BtnBox>
            </TextBox>
          </ProductBox>
        ))}
      </Inner>
    </Container>
  );
};

export default SpecialBestProduct;
