import React from "react";
import styled from "styled-components";
import plusBtn from "../../img/icon/btn_worldwide_plus.png";
import logo from "../../img/logo/logo.png";
import { IconArr } from "../../util";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.mineShaft};
`;

const FooterTopBox = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.doveGray};
`;

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.mediaSize.l} {
    justify-content: center;
  }
`;

const SubMenuBox = styled.ul`
  display: flex;
`;

const SubMenu = styled.li`
  padding: 18px 0;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 1px;
    height: 30%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.abbey};
  }
  &:last-child {
    &::after {
      width: 0;
    }
  }
  &:first-child {
    p {
      margin-left: 0;
      @media ${({ theme }) => theme.mediaSize.xxl} {
        margin-left: 22px;
      }
    }
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    &:nth-child(3),
    &:last-child {
      display: none;
    }
  }
`;

const MenuText = styled.p`
  margin: 0 22px;
  font-size: 14px;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.doveGray};
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const SubMenuRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 246px;
  border: 1px solid ${({ theme }) => theme.colors.doveGray};
  border-bottom: none;
  @media ${({ theme }) => theme.mediaSize.l} {
    display: none;
  }
`;

const SubMenuRightText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.doveGray};
`;

const FooterBottomBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media ${({ theme }) => theme.mediaSize.l} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0 4%;
  }
`;

const BottomLogo = styled.img`
  object-fit: contain;
  @media ${({ theme }) => theme.mediaSize.l} {
    order: -1;
  }
`;

const BottomCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media ${({ theme }) => theme.mediaSize.l} {
    order: 3;
  }
`;

const BottomTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

const BottomText = styled.p`
  font-size: 14px;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.gray};
`;

const IconBox = styled.div`
  display: flex;
  gap: 15px;
  @media ${({ theme }) => theme.mediaSize.l} {
    order: 1;
  }
`;

const IconImgs = styled.img`
  width: 30px;
  height: 20px;
  object-fit: contain;
  cursor: pointer;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 25px;
  padding-bottom: 60px;
`;

const Footer = () => {
  return (
    <Container>
      <FooterTopBox>
        <Inner>
          <FooterTop>
            <SubMenuBox>
              <SubMenu>
                <MenuText>이용약관</MenuText>
              </SubMenu>
              <SubMenu>
                <MenuText>개인정보처리방침</MenuText>
              </SubMenu>
              <SubMenu>
                <MenuText>인재채용</MenuText>
              </SubMenu>
              <SubMenu>
                <MenuText>FAQ</MenuText>
              </SubMenu>
              <SubMenu>
                <MenuText>원격지원</MenuText>
              </SubMenu>
            </SubMenuBox>
            <SubMenuRight>
              <SubMenuRightText>Compassion Worldwide</SubMenuRightText>
              <img src={plusBtn} alt="pluseBtn" />
            </SubMenuRight>
          </FooterTop>
        </Inner>
      </FooterTopBox>
      <FooterBottomBox>
        <BottomLogo src={logo} alt="logo" />
        <BottomCenter>
          <BottomTitle>한국컴패션</BottomTitle>
          <BottomText>
            서울시 용산구 한남대로 102-5 (한남동 723-41)석전빌딩(04418)
          </BottomText>
          <BottomText>
            사업자등록번호:108-82-05789
            <br />
            통신판매신고: 제2010-서울용산-00747호
            <br />
            대표자:서정인
          </BottomText>
          <BottomText>
            후원상담/안내:02-740-1000
            <br />
            이메일: info@compassion.or.kr
          </BottomText>
        </BottomCenter>
        <IconBox>
          {IconArr.map((item, idx) => (
            <IconImgs src={item} alt="icon" key={idx} />
          ))}
        </IconBox>
      </FooterBottomBox>
      <Copyright>
        <BottomText>
          ⓒ COMPASSION KOREA All Rights Reserved Contact us for more information
        </BottomText>
      </Copyright>
    </Container>
  );
};

export default Footer;
