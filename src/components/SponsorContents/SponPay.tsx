import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { sponState } from "../../atoms";
import SquareColorBtn from "../buttons/SquareColorBtn";

const Container = styled.div``;

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 30px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const TotalPay = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

const TotalText = styled.h4`
  font-size: 24px;
  font-weight: bold;
  span {
    color: ${({ theme }) => theme.colors.endeavour};
  }
`;

const BtnBox = styled.div`
  margin: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    width: 100%;
    text-align: center;
  }
`;

const SponPay = () => {
  const [inputValue01] = useRecoilState(sponState("sponchose01"));
  const [inputValue02] = useRecoilState(sponState("sponchose02"));

  const yearValue = Number(inputValue01.pay) + Number(inputValue02.pay);
  const totalPayValue = yearValue + 45000;

  const formattedValue = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const onclickCheckPay = () => {
    if (totalPayValue % 5000 !== 0) {
      alert("금액은 만원 단위로 지정가능합니다.");
    }
  };

  return (
    <Container>
      <Inner>
        <Box>
          <Text>매월 결제되는 후원금</Text>
          <Text>45,000 원</Text>
        </Box>
        <Box>
          <Text>1년에 한번 결제되는 후원금</Text>
          <Text>{formattedValue(yearValue)} 원</Text>
        </Box>
      </Inner>
      <TotalPay>
        <TotalText>이달의 후원금액</TotalText>
        <TotalText>
          <span>{formattedValue(totalPayValue)}</span> 원
        </TotalText>
      </TotalPay>
      <BtnBox>
        <span onClick={onclickCheckPay}>
          <SquareColorBtn text="다음" btnName="payBtn" />
        </span>
      </BtnBox>
    </Container>
  );
};

export default SponPay;
