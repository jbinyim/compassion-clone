import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerToggleBtn, headerMHover } from "../../atoms";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderToggle from "./HeaderToggle";
import SquareBtn from "../buttons/SquareBtn";
import SquareColorBtn from "../buttons/SquareColorBtn";
import HedaerHover from "./HedaerHover";
import closeBtn from "../../img/icon/close.png";
import logo from "../../img/logo/logo2.png";
import logoActive from "../../img/logo/logoActive.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const HBannerBox = styled.div<{ $closeX: boolean }>`
  width: 100%;
  height: ${(props) => (props.$closeX ? "57px" : "0")};
  background: ${({ theme }) => theme.colors.endeavour};
  transition: all 0.3s;
  @media ${({ theme }) => theme.mediaSize.l} {
    height: ${(props) => (props.$closeX ? "52px" : "0")};
  }
  div {
    ${(props) => !props.$closeX && "display: none"}
  }
`;

const HBanner = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HBannerLeft = styled.div`
  display: flex;
  align-items: center;
`;

const BannerEn = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.nero};
  margin-right: 20px;
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 16px;
  }
`;

const BannerText = styled.p`
  font-size: 14px;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.nero};
  margin-right: 35px;
  @media ${({ theme }) => theme.mediaSize.l} {
    display: none;
  }
`;

const Close = styled.img`
  width: 30px;
  cursor: pointer;
`;

const HeadingBox = styled.div<{ $yScroll: number }>`
  position: fixed;
  top: ${(props) => props.$yScroll > 57 && "0"};
  left: 0;
  z-index: 10;
  width: 100%;
  transition: all 0.3s;
  background: ${(props) => (props.$yScroll > 57 ? "#fff" : "transparent")};
  border: 1px solid
    ${(props) => (props.$yScroll > 57 ? "#e0e0e0" : "transparent")};
  color: ${(props) => (props.$yScroll > 57 ? "#000" : "#fff")};
  &:hover {
    border-bottom: 1px solid #e0e0e0;
    background: #fff;
    color: #000;
    .logo {
      background: url(${logoActive}) center/cover no-repeat;
    }
    svg {
      fill: #000;
    }
  }
`;

const Heading = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 111px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1280px) {
    padding: 0 4%;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    height: 84px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    height: 60px;
  }
`;

const LogoImg = styled.div<{ $yScroll: number }>`
  width: 144px;
  height: 54px;
  background: ${(props) =>
    props.$yScroll > 57
      ? `url(${logoActive}) center/cover no-repeat`
      : `url(${logo}) center/cover no-repeat`};
  cursor: pointer;
  @media ${({ theme }) => theme.mediaSize.l} {
    width: 104px;
    height: 40px;
  }
`;

const HeadingRight = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
`;

const MenuBox = styled.ul`
  display: flex;
  gap: 67px;
  margin-right: 70px;
  @media screen and (max-width: 1280px) {
    gap: 38px;
    margin-right: 0;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    display: none;
  }
`;

const Menu = styled.li`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -1px;
  cursor: pointer;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;

const Icons = styled.svg<{ $yScroll: number }>`
  width: 30px;
  height: 34px;
  fill: ${(props) => (props.$yScroll > 57 ? "#000" : "#fff")};
  cursor: pointer;
`;

const Header = () => {
  const [closeX, setCloaseX] = useState(true);
  const [menuId, setMenuId] = useState(10);
  const [menuToggle, setMenuToggle] = useRecoilState(headerToggleBtn);
  const [mouseHover, setMouseHover] = useRecoilState(headerMHover);
  const [yScroll, setYScroll] = useState(0);
  const navigate = useNavigate();

  const closeBanner = () => {
    setCloaseX(false);
  };

  const onScroll = () => {
    setYScroll(window.scrollY);
  };

  const menuHover = (id: number) => {
    setMenuId(id);
    setMouseHover(true);
  };

  const pageRoute = (name: string) => {
    navigate(`/${name}`);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const render = (state: number) => {
    return (
      <>
        <Container>
          <HBannerBox $closeX={closeX}>
            <HBanner>
              <HBannerLeft>
                <BannerEn>Pray for Haiti</BannerEn>
                <BannerText>아이티 어린이를 위해 기도해 주세요!</BannerText>
                <SquareBtn text="자세히보기" btnName="bannerBtn" />
              </HBannerLeft>
              <Close src={closeBtn} alt="closeBtn" onClick={closeBanner} />
            </HBanner>
          </HBannerBox>
          <HeadingBox
            $yScroll={state}
            onMouseLeave={() => setMouseHover(false)}
          >
            <Heading>
              <LogoImg
                className="logo"
                $yScroll={state}
                onClick={() => pageRoute("")}
              />
              <HeadingRight>
                <MenuBox>
                  <Menu
                    onMouseOver={() => menuHover(0)}
                    onClick={() => pageRoute("story")}
                  >
                    소개
                  </Menu>
                  <Menu
                    onMouseOver={() => menuHover(1)}
                    onClick={() => pageRoute("children")}
                  >
                    어린이후원
                  </Menu>
                  <Menu
                    onMouseOver={() => menuHover(2)}
                    onClick={() => pageRoute("special")}
                  >
                    맞춤후원
                  </Menu>
                  <Menu
                    onMouseOver={() => menuHover(3)}
                    onClick={() => pageRoute("event")}
                  >
                    참여
                  </Menu>
                  <Menu
                    onMouseOver={() => menuHover(4)}
                    onClick={() => pageRoute("news")}
                  >
                    소식
                  </Menu>
                </MenuBox>
                <IconBox>
                  <span onClick={() => pageRoute("sponsor")}>
                    <SquareColorBtn text="바로 후원하기" btnName="w140h48" />
                  </span>
                  <Icons
                    onClick={() => setMenuToggle(true)}
                    $yScroll={state}
                    viewBox="0 -960 960 960"
                  >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </Icons>
                  <Icons
                    $yScroll={state}
                    onMouseOver={() => menuHover(5)}
                    viewBox="0 -960 960 960"
                  >
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                  </Icons>
                  <Icons $yScroll={state} viewBox="0 -960 960 960">
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                  </Icons>
                </IconBox>
              </HeadingRight>
            </Heading>
            {mouseHover && <HedaerHover menuId={menuId} />}
          </HeadingBox>
          {menuToggle && <HeaderToggle />}
        </Container>
      </>
    );
  };

  if (
    window.location.pathname === "/sponsor" ||
    window.location.pathname === "/member/checkIdentify"
  ) {
    return render(58);
  } else {
    return render(yScroll);
  }
};

export default Header;

{
  /* <>
        <Container>
          <HBannerBox $closeX={closeX}>
            <HBanner>
              <HBannerLeft>
                <BannerEn>Pray for Haiti</BannerEn>
                <BannerText>아이티 어린이를 위해 기도해 주세요!</BannerText>
                <SquareBtn text="자세히보기" btnName="bannerBtn" />
              </HBannerLeft>
              <Close src={closeBtn} alt="closeBtn" onClick={closeBanner} />
            </HBanner>
          </HBannerBox>
          <HeadingBox
            $yScroll={yScroll}
            onMouseLeave={() => setMouseHover(false)}
          >
            <Heading>
              <LogoImg
                className="logo"
                $yScroll={yScroll}
                onClick={() => pageRoute("")}
              />
              <HeadingRight>
                <MenuBox>
                  <Menu
                    onMouseOver={() => menuHover(0)}
                    onClick={() => pageRoute("story")}
                  >
                    소개
                  </Menu>
                  <Menu
                    onMouseOver={() => menuHover(1)}
                    onClick={() => pageRoute("children")}
                  >
                    어린이후원
                  </Menu>
                  <Menu
                    onMouseOver={() => menuHover(2)}
                    onClick={() => pageRoute("special")}
                  >
                    맞춤후원
                  </Menu>
                  <Menu onMouseOver={() => menuHover(3)}>참여</Menu>
                  <Menu onMouseOver={() => menuHover(4)}>소식</Menu>
                </MenuBox>
                <IconBox>
                  <span onClick={() => pageRoute("sponsor")}>
                    <SquareColorBtn text="바로 후원하기" btnName="w140h48" />
                  </span>
                  <Icons
                    onClick={() => setMenuToggle(true)}
                    $yScroll={yScroll}
                    viewBox="0 -960 960 960"
                  >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </Icons>
                  <Icons
                    $yScroll={yScroll}
                    onMouseOver={() => menuHover(5)}
                    viewBox="0 -960 960 960"
                  >
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                  </Icons>
                  <Icons $yScroll={yScroll} viewBox="0 -960 960 960">
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                  </Icons>
                </IconBox>
              </HeadingRight>
            </Heading>
            {mouseHover && <HedaerHover menuId={menuId} />}
          </HeadingBox>
          {menuToggle && <HeaderToggle />}
        </Container>
      </> */
}
