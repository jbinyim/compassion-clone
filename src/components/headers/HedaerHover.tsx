import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { headerMHover } from "../../atoms";
import hoverImg from "../../img/logo/10002.jpg";
import SquareBtn from "../buttons/SquareBtn";
import SquareColorBtn from "../buttons/SquareColorBtn";
import { memberHeaderHoverBtn } from "../../util";
import { Link } from "react-router-dom";

const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.alto};
  padding: 48px 4%;
`;

const HoverBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
`;

const HoverLeft = styled.div`
  width: 257px;
  h4 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const HoverCenter = styled.ul`
  width: 523px;
`;

const SubMenu = styled.li`
  font-size: 18px;
  margin-bottom: 24px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.endeavour};
  }
`;

const HoverRight = styled.div`
  width: 358px;
  padding-left: 88px;
  border-left: 1px solid ${({ theme }) => theme.colors.alto};
  height: 360px;
  overflow: hidden;
  img {
    width: 270px;
    height: auto;
  }
`;

const MemberContainer = styled.div`
  width: 280px;
  position: absolute;
  top: 112px;
  right: 350px;
  background: #fff;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`;

const MemberTop = styled.div`
  padding: 27px 40px;
`;

const MemberTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 25px;
  span {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.endeavour};
  }
`;

const MemberListBox = styled.ul`
  display: flex;
  flex-direction: column;
`;

const MemberList = styled.li`
  padding: 16px 38px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MemberText = styled.p`
  font-size: 14px;
`;

interface hoverI {
  menuId: number;
}

const HedaerHover = ({ menuId }: hoverI) => {
  const setMouseHover = useSetRecoilState(headerMHover);
  if (menuId === 0) {
    return (
      <Container onMouseLeave={() => setMouseHover(false)}>
        <HoverBox>
          <HoverLeft>
            <h4>소개</h4>
            <p>
              컴패션의 어제와 오늘
              <br /> 그리고 내일
            </p>
          </HoverLeft>
          <HoverCenter>
            <SubMenu>한눈에 보는 컴패션</SubMenu>
            <SubMenu>컴패션의 양육</SubMenu>
            <SubMenu>컴패션이 돕는 나라</SubMenu>
            <SubMenu>컴패션의 투명경영</SubMenu>
            <SubMenu>컴패션 홍보대사</SubMenu>
            <SubMenu>찾아오시는 길</SubMenu>
            <SubMenu>FAQ</SubMenu>
          </HoverCenter>
          <HoverRight>
            <img src={hoverImg} alt="hoverImg" />
          </HoverRight>
        </HoverBox>
      </Container>
    );
  } else if (menuId === 1) {
    return (
      <Container onMouseLeave={() => setMouseHover(false)}>
        <HoverBox>
          <HoverLeft>
            <h4>어린이 후원</h4>
            <p>
              후원자와 어린이가 함께 자라는
              <br /> 어린이 후원
            </p>
          </HoverLeft>
          <HoverCenter>
            <SubMenu>1:1 어린이양육</SubMenu>
            <SubMenu>1:3 같이양육</SubMenu>
          </HoverCenter>
          <HoverRight>
            <img src={hoverImg} alt="hoverImg" />
          </HoverRight>
        </HoverBox>
      </Container>
    );
  } else if (menuId === 2) {
    return (
      <Container onMouseLeave={() => setMouseHover(false)}>
        <HoverBox>
          <HoverLeft>
            <h4>맞춤후원</h4>
            <p>
              양육에 가치를 더하는
              <br /> 당신을 위한 맞춤 후원
            </p>
          </HoverLeft>
          <HoverCenter>
            <SubMenu>주제별 양육보완후원</SubMenu>
            <SubMenu>기념일후원</SubMenu>
            <SubMenu>우리들의 펀딩</SubMenu>
            <SubMenu>유산기부</SubMenu>
          </HoverCenter>
          <HoverRight>
            <img src={hoverImg} alt="hoverImg" />
          </HoverRight>
        </HoverBox>
      </Container>
    );
  } else if (menuId === 3) {
    return (
      <Container onMouseLeave={() => setMouseHover(false)}>
        <HoverBox>
          <HoverLeft>
            <h4>참여</h4>
            <p>
              어린이를 위해, 컴패션과 함께하는
              <br /> 참여 활동
            </p>
          </HoverLeft>
          <HoverCenter>
            <SubMenu>캠페인/이벤트</SubMenu>
            <SubMenu>애드보킷</SubMenu>
            <SubMenu>컴패션메이트</SubMenu>
            <SubMenu>비전트립</SubMenu>
            <SubMenu>교회협력</SubMenu>
            <SubMenu>기업사회공헌</SubMenu>
            <SubMenu>컴패션스토어</SubMenu>
            <SubMenu>컴패션 추천하기</SubMenu>
          </HoverCenter>
          <HoverRight>
            <img src={hoverImg} alt="hoverImg" />
          </HoverRight>
        </HoverBox>
      </Container>
    );
  } else if (menuId === 4) {
    return (
      <Container onMouseLeave={() => setMouseHover(false)}>
        <HoverBox>
          <HoverLeft>
            <h4>소식</h4>
            <p>
              어린이, 후원자
              <br /> 우리들의 컴패션 이야기
            </p>
          </HoverLeft>
          <HoverCenter>
            <SubMenu>컴패션 소식</SubMenu>
            <SubMenu>공지사항</SubMenu>
            <SubMenu>언론보도</SubMenu>
            <SubMenu>인재채용</SubMenu>
          </HoverCenter>
          <HoverRight>
            <img src={hoverImg} alt="hoverImg" />
          </HoverRight>
        </HoverBox>
      </Container>
    );
  } else if (menuId === 5) {
    return (
      <MemberContainer>
        <MemberTop>
          <MemberTitle>
            <span>후원자님</span>, 반갑습니다!
          </MemberTitle>
          <Link to={"/login"}>
            <SquareBtn text="로그인 / Sign in" btnName="signIn" />
          </Link>
          <Link to={"/member"}>
            <SquareColorBtn text="회원가입 / Sign up" btnName="signUp" />
          </Link>
        </MemberTop>
        <MemberListBox>
          {memberHeaderHoverBtn.map((item, idx) => (
            <MemberList key={idx}>
              <MemberText>{item}</MemberText>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
            </MemberList>
          ))}
        </MemberListBox>
      </MemberContainer>
    );
  } else {
    return <></>;
  }
};

export default HedaerHover;
