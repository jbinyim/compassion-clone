import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoBlue from "../img/logo/logoActive.png";
import psImg from "../img/member/ico_password_show.png";
import SquareColorBtn from "../components/buttons/SquareColorBtn";

const Container = styled.div`
  width: 100%;
  height: 945px;
  background: url("https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/bg_loginpage.jpg")
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.mediaSize.m} {
    background: url("https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/bg_login_mobile.png")
      no-repeat center left;
  }
`;

const Box = styled.div`
  width: 588px;
  padding: 36px 0 32px;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media ${({ theme }) => theme.mediaSize.m} {
    width: 90vw;
  }
`;

const Logo = styled.img`
  width: 120px;
  height: 46px;
  margin-bottom: 20px;
`;

const PsBox = styled.span`
  max-width: 282px;
  width: 100%;
  position: relative;
  @media ${({ theme }) => theme.mediaSize.m} {
    max-width: 414px;
  }
`;

const TextBox = styled.input`
  max-width: 282px;
  width: 100%;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.alto};
  padding: 0 12px;
  font-size: 15px;
  @media ${({ theme }) => theme.mediaSize.m} {
    max-width: 414px;
  }
`;

const PsShow = styled.button<{ $psShowToggle: boolean }>`
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 0;
  width: 20px;
  height: 20px;
  background: url(${psImg}) no-repeat 0 0;
  background-size: 100%;
  background-position: ${(props) => (props.$psShowToggle ? "0 -20px" : "0 0")};
  border: none;
  cursor: pointer;
`;

const CheckBox = styled.div`
  max-width: 282px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  margin-bottom: 20px;
  label {
    cursor: pointer;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    max-width: 414px;
  }
`;

const Check = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const TextBtnBox = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;

const TextBtn = styled.li`
  font-size: 12px;
  margin: 0 8px;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 5px;
    right: -9px;
    width: 1px;
    height: 9px;
    background: ${({ theme }) => theme.colors.gray};
    cursor: default;
  }
  &:last-child::after {
    width: 0;
  }
`;

const KakoBox = styled.div`
  max-width: 282px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1d100;
  border-radius: 4px;
  cursor: pointer;
  @media ${({ theme }) => theme.mediaSize.m} {
    max-width: 414px;
  }
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
  const [psShowToggle, setPsShowToggle] = useState(false);
  return (
    <Container>
      <Box>
        <Logo src={logoBlue} alt="logo" />
        <TextBox type="text" placeholder="아이디/ID" />
        <PsBox>
          <TextBox
            type={psShowToggle ? "text" : "password"}
            placeholder="비밀번호/Password"
          />
          <PsShow
            onClick={() => setPsShowToggle((prev) => !prev)}
            $psShowToggle={psShowToggle}
          >
            마스킹 보기
          </PsShow>
        </PsBox>
        <CheckBox>
          <Check type="checkbox" id="stayLogin" />
          <label htmlFor="stayLogin">로그인 상태유지</label>
        </CheckBox>
        <SquareColorBtn text="로그인 / Signin" btnName="signUp login" />
        <TextBtnBox>
          <TextBtn>아이디 찾기</TextBtn>
          <TextBtn>비밀번호 찾기</TextBtn>
          <TextBtn>
            <Link to={"/member"}>회원가입</Link>
          </TextBtn>
        </TextBtnBox>
        <KakoBox>
          <Icon
            src="https://www.compassion.or.kr/resources/fo/compassion/assets/images/common/ico_kakao_24.png"
            alt="kako"
          />
          <KakoText>카카오계정 로그인</KakoText>
        </KakoBox>
      </Box>
    </Container>
  );
};

export default Login;
