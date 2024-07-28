import React from "react";
import styled from "styled-components";
import logoBlue from "../img/logo/logoActive.png";
import SquareColorBtn from "../components/buttons/SquareColorBtn";

const Container = styled.div`
  width: 100%;
  height: 945px;
  background: url("https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/bg_loginpage.jpg")
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 588px;
  padding: 36px 0 32px;
  background: rgba(255, 255, 255, 0.8);
`;

const KakoBox = styled.div`
  max-width: 586px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1d100;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const KakoText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 48px;
`;

const Login = () => {
  return (
    <Container>
      <Box>
        <img src={logoBlue} alt="logo" />
        <input type="text" />
        <input type="password" />
        <input type="checkbox" />
        <SquareColorBtn text="로그인 / Signin" btnName="signUp" />
        <ul>
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
          <li>회원가입</li>
        </ul>
        <KakoBox>
          <Icon
            src="https://www.compassion.or.kr/resources/fo/compassion/assets/images/common/ico_kakao_24.png"
            alt="kako"
          />
          <KakoText>카카오계정 로그인</KakoText>
          <p>f</p>
        </KakoBox>
      </Box>
    </Container>
  );
};

export default Login;
