import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.mineShaft};
`;

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubMenuBox = styled.ul`
  display: flex;
`;

const SubMenu = styled.li`
  padding: 18px 0;
`;

const MenuText = styled.p`
  border-right: 1px solid ${({ theme }) => theme.colors.doveGray};
  margin: 0 22px;
`;

const Footer = () => {
  return (
    <Container>
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
          <p>Compassion Worldwide</p>
        </FooterTop>
        <div>z</div>
      </Inner>
    </Container>
  );
};

export default Footer;
