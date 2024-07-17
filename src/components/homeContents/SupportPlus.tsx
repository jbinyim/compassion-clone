import React from "react";
import styled from "styled-components";
import SupportUtil from "./SupportUtil";
import { supportImgArr } from "../../util";

const Container = styled.div`
  position: relative;
`;

const BgContainer = styled.div`
  position: absolute;
  width: 86%;
  height: 716px;
  top: -84px;
  left: 0;
  background: ${({ theme }) => theme.colors.iceberg};
  @media ${({ theme }) => theme.mediaSize.xxl} {
    max-width: 1200px;
    width: 100%;
    height: 536px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TextContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1200px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.endeavour};
  margin-top: 70px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    font-size: 32px;
    padding: 0 47px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 24px;
  }
`;

const Descirption = styled.p`
  max-width: 588px;
  font-size: 16px;
  margin-top: 40px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    max-width: 100%;
    padding: 0 47px;
    margin-top: 20px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 13px;
  }
`;

const UtilBox = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 47px;
    margin-top: 20px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    gap: 10px;
  }
`;

const SupportPlus = () => {
  return (
    <Container>
      <BgContainer />
      <TextContainer>
        <Title>
          정직하고 효율적인 후원금 사용으로
          <br />
          어린이 양육에 집중합니다
        </Title>
        <Descirption>
          한국컴패션은 2003년 설립 때부터 세계 4대 회계법인인
          KPMG(삼정회계법인)의 철저한 외부 감사를 받아왔으며
          ‘공익법인회계기준’과 ‘사회복지법인 재무회계규칙’에 따라 운영 한
          재무보고서와 감사보고서를 투명하게 공개하고 있습니다.
        </Descirption>
        <UtilBox>
          {supportImgArr.map((item, idx) => (
            <SupportUtil key={idx} item={item} />
          ))}
        </UtilBox>
      </TextContainer>
    </Container>
  );
};

export default SupportPlus;
