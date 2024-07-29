import React from "react";
import styled from "styled-components";
import logo from "../img/logo/logoActive.png";
import SquareBtn from "../components/buttons/SquareBtn";
import SquareColorBtn from "../components/buttons/SquareColorBtn";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 160px;
  height: 59px;
`;

const ErrIcon = styled.img`
  width: 140px;
  height: 140px;
  margin-top: 100px;
`;

const ErrTitle = styled.h4`
  font-size: 21px;
  font-weight: bold;
  margin: 40px 0 30px;
`;

const ErrText = styled.p`
  font-size: 16px;
`;

const BtnBox = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  gap: 30px;
  span {
    width: 100%;
  }
`;

const NotFindPage = () => {
  const nabigation = useNavigate();

  const onClickNav = (nav: string) => {
    if (nav === "back") {
      nabigation(-1);
    } else {
      nabigation("/");
    }
  };

  return (
    <Container>
      <Inner>
        <Logo src={logo} alt="logo" />
        <ErrIcon
          src="https://www.compassion.or.kr/resources/fo/compassion/assets/images/common/img_error_common.png"
          alt="errorlogo"
        />
        <ErrTitle>페이지 오류</ErrTitle>
        <ErrText>일시적인 오류로 인해 해당 기능을 사용할 수 없습니다.</ErrText>
        <ErrText>잠시후에 다시 시도해줏제요. 404</ErrText>
        <BtnBox>
          <span onClick={() => onClickNav("back")}>
            <SquareBtn text="이전 페이지로 이동" btnName="errBtn" />
          </span>
          <span onClick={() => onClickNav("home")}>
            <SquareColorBtn text="컴패션 메인으로 이동" btnName="errBtn" />
          </span>
        </BtnBox>
      </Inner>
    </Container>
  );
};

export default NotFindPage;
