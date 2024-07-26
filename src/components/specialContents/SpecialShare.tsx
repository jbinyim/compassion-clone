import React from "react";
import styled from "styled-components";
import bg from "../../img/specialpage/share/bg02.png";
import quote from "../../img/icon/ico_quotes_53x38.png";
import bgLine from "../../img/specialpage/bestproduct/bg_special_sponsorship_line.png";
import { shareList } from "../../util";
import SquareBtn from "../buttons/SquareBtn";
import SquareColorBtn from "../buttons/SquareColorBtn";

const Container = styled.div`
  margin-top: 75px;
  padding-bottom: 300px;
`;

const Bg = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url(${bg}) no-repeat center top;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -400px;
    left: 0;
    width: 100%;
    height: 575px;
    background: url(${bgLine}) center/cover no-repeat;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const ShareTopBox = styled.div`
  text-align: center;
  padding-top: 200px;
`;

const SubTitle = styled.h4`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -40px;
    left: 15%;
    width: 53px;
    height: 38px;
    background: url(${quote}) center/cover no-repeat;
    opacity: 0.3;
    @media ${({ theme }) => theme.mediaSize.m} {
      width: 26px;
      height: 19px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 26px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 14px;
  }
`;

const Title = styled.h3`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 30px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 26px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 18px;
  }
`;

const ListBox = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 384px;
  width: 100%;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.15);
  @media ${({ theme }) => theme.mediaSize.xl} {
    max-width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 252px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    height: auto;
  }
`;

const ListTextBox = styled.div`
  padding: 48px 32px 32px;
  background: #fff;
`;

const ListTitle = styled.h4`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -2px;
  color: ${({ theme }) => theme.colors.endeavour};
  @media ${({ theme }) => theme.mediaSize.xxl} {
    font-size: 20px;
  }
`;

const ListTitleEg = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
  @media ${({ theme }) => theme.mediaSize.xxl} {
    font-size: 18px;
  }
`;

const ListText = styled.p`
  font-size: 18px;
  margin: 24px 0 100px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 15px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const SpecialShare = () => {
  return (
    <Container>
      <Bg>
        <Inner>
          <ShareTopBox>
            <SubTitle>긴급 수술, 재해 복구, 학대 예방, 직업교육 등</SubTitle>
            <Title>
              모두에게 더 나은 미래를 만들기 위해
              <br />
              여러분들의 도움의 손길을 내밀어주세요
            </Title>
          </ShareTopBox>
          <ListBox>
            {shareList.map((item, idx) => (
              <List key={idx}>
                <Img src={item.img} alt="shareListImg" />
                <ListTextBox>
                  <ListTitle>{item.title}</ListTitle>
                  <ListTitleEg>{item.titleEg}</ListTitleEg>
                  <ListText>{item.text}</ListText>
                  <BtnBox>
                    <SquareBtn text="자세히 보기" btnName="shareBtn" />
                    <SquareColorBtn text="바로 후원하기" btnName="shareBtn" />
                  </BtnBox>
                </ListTextBox>
              </List>
            ))}
          </ListBox>
        </Inner>
      </Bg>
    </Container>
  );
};

export default SpecialShare;
