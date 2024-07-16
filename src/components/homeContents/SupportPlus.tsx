import React from "react";
import styled from "styled-components";
import SupportUtil from "./SupportUtil";

const Container = styled.div`
  position: relative;
`;

const BgContainer = styled.div`
  position: absolute;
  width: 1651px;
  height: 716px;
  top: -84px;
  left: 0;
  background: ${({ theme }) => theme.colors.iceberg};
`;

const TextContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  border: 1px solid #f00;
`;

const SupportPlus = () => {
  return (
    <Container>
      <BgContainer />
      <TextContainer>
        <h3>
          정직하고 효율적인 후원금 사용으로
          <br />
          어린이 양육에 집중합니다
        </h3>
        <p>
          한국컴패션은 2003년 설립 때부터 세계 4대 회계법인인
          KPMG(삼정회계법인)의 철저한 외부 감사를 받아왔으며
          ‘공익법인회계기준’과 ‘사회복지법인 재무회계규칙’에 따라 운영 한
          재무보고서와 감사보고서를 투명하게 공개하고 있습니다.
        </p>
        <div></div>
      </TextContainer>
    </Container>
  );
};

export default SupportPlus;
