import React from "react";
import styled from "styled-components";

const BottomBox = styled.div`
  background: #f8f8fb;
  padding: 24px 0;
  text-align: center;
  margin-top: 120px;
`;
const BottomText = styled.p`
  font-size: 14px;
`;

const MemberFooter = () => {
  return (
    <BottomBox>
      <BottomText>
        회원가입이 어려우시거나 본인확인/인증이 안되시는 경우 한국 컴패션으로
        연락주시기 바랍니다.
        <br />
        후원지원팀 (02-740-1000 평일 9시~18시/공휴일 제외)
      </BottomText>
    </BottomBox>
  );
};

export default MemberFooter;
