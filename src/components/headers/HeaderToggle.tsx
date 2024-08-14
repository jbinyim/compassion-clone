import React from "react";
import styled from "styled-components";
import logo from "../../img/logo/logo2.png";
import closeBtn from "../../img/icon/close.png";
import linkRight from "../../img/icon/headermenuRight.png";
import { headerToggleBtn } from "../../atoms";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.endeavour};
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const ToggleHead = styled.div`
  max-width: 1200px;
  margin: 40px auto 80px;
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.l} {
    justify-content: right;
    margin: 40px auto 0;
  }
`;

const LogoImg = styled.img`
  width: 144px;
  height: 56px;
  cursor: pointer;
  @media ${({ theme }) => theme.mediaSize.l} {
    display: none;
  }
`;

const CloseImg = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const MenuBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MenuTopBox = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 39px 4%;
  @media ${({ theme }) => theme.mediaSize.l} {
    flex-direction: column;
    gap: 64px;
    padding: 44px 10%;
  }
`;

const MenuTop = styled.li``;

const MainMenu = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.nero};
  margin-bottom: 48px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nero};
  cursor: pointer;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 20px;
  }
`;

const SubMenuBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SubMenu = styled.li`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.nero};
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 16px;
  }
`;

const MenuBottomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  @media ${({ theme }) => theme.mediaSize.l} {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    padding: 0 10%;
  }
`;

const MenuBottom = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.nero};
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 7px;
    right: -25px;
    display: inline-block;
    background: url(${linkRight}) center/cover no-repeat;
    width: 24px;
    height: 24px;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 18px;
  }
`;

const HeaderToggle = () => {
  const setMenuToggle = useSetRecoilState(headerToggleBtn);
  const navigate = useNavigate();

  const pageRoute = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <Container>
      <ToggleHead>
        <LogoImg src={logo} alt="logo" onClick={() => pageRoute("")} />
        <CloseImg
          onClick={() => setMenuToggle(false)}
          src={closeBtn}
          alt="closeBtn"
        />
      </ToggleHead>
      <MenuBox>
        <MenuTopBox>
          <MenuTop>
            <MainMenu onClick={() => pageRoute("story")}>소개</MainMenu>
            <SubMenuBox>
              <SubMenu>한눈에 보는 컴패션</SubMenu>
              <SubMenu>컴패션의 양육</SubMenu>
              <SubMenu>컴패션이 돕는 나라</SubMenu>
              <SubMenu>컴패션의 투명경영</SubMenu>
              <SubMenu>컴패션 홍보대사</SubMenu>
              <SubMenu>찾아오시는 길</SubMenu>
              <SubMenu>FAQ</SubMenu>
            </SubMenuBox>
          </MenuTop>
          <MenuTop>
            <MainMenu onClick={() => pageRoute("children")}>
              어린이후원
            </MainMenu>
            <SubMenuBox>
              <SubMenu>1:1 어린이양육</SubMenu>
              <SubMenu>1:3 같이양육</SubMenu>
            </SubMenuBox>
          </MenuTop>
          <MenuTop>
            <MainMenu onClick={() => pageRoute("special")}>맞춤후원</MainMenu>
            <SubMenuBox>
              <SubMenu>주제별 양육보완후원</SubMenu>
              <SubMenu>기념일 후원</SubMenu>
              <SubMenu>우리들의 펀딩</SubMenu>
              <SubMenu>유산기부</SubMenu>
            </SubMenuBox>
          </MenuTop>
          <MenuTop>
            <MainMenu onClick={() => pageRoute("event")}>참여</MainMenu>
            <SubMenuBox>
              <SubMenu>캠페인/이벤트</SubMenu>
              <SubMenu>애드보킷</SubMenu>
              <SubMenu>컴패션메이트</SubMenu>
              <SubMenu>비전트립</SubMenu>
              <SubMenu>교회협력</SubMenu>
              <SubMenu>기업사회공헌</SubMenu>
              <SubMenu>컴패션스토어</SubMenu>
              <SubMenu>컴패션 추천하기</SubMenu>
            </SubMenuBox>
          </MenuTop>
          <MenuTop>
            <MainMenu onClick={() => pageRoute("news")}>소식</MainMenu>
            <SubMenuBox>
              <SubMenu>컴패션 소식</SubMenu>
              <SubMenu>공지사항</SubMenu>
              <SubMenu>언론보도</SubMenu>
              <SubMenu>인재채용</SubMenu>
            </SubMenuBox>
          </MenuTop>
        </MenuTopBox>
        <MenuBottomBox>
          <MenuBottom>기업사회공헌</MenuBottom>
          <MenuBottom>교회협력</MenuBottom>
          <MenuBottom>컴패션스토어</MenuBottom>
          <MenuBottom>컴패션메이트</MenuBottom>
          <MenuBottom>인재채용</MenuBottom>
        </MenuBottomBox>
      </MenuBox>
    </Container>
  );
};

export default HeaderToggle;
