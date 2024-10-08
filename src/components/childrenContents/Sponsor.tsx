import React from "react";
import styled from "styled-components";
import { sponsorDescArr } from "../../util";

const Container = styled.div`
  margin-top: 120px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 28px;
    line-height: 40px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 20px;
    line-height: 32px;
  }
`;

const SponsorDesc = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.iceberg};
  margin-top: 170px;
  padding-bottom: 120px;
`;

const DescMenus = styled.ul`
  display: flex;
  gap: 24px;
  transform: translateY(-90px);
  @media ${({ theme }) => theme.mediaSize.m} {
    gap: 5px;
  }
  @media ${({ theme }) => theme.mediaSize.s} {
    gap: 10px;
  }
`;

const DescMenu = styled.li`
  text-align: center;
  img {
    width: 180px;
    height: 180px;
    border-radius: 180px;
    @media ${({ theme }) => theme.mediaSize.xl} {
      width: 120px;
      height: 120px;
    }
    @media ${({ theme }) => theme.mediaSize.s} {
      width: 100px;
      height: 100px;
    }
  }
  p {
    margin-top: 16px;
    font-size: 20px;
    font-weight: bold;
    @media ${({ theme }) => theme.mediaSize.xl} {
      font-size: 16px;
    }
    @media ${({ theme }) => theme.mediaSize.s} {
      font-size: 14px;
    }
  }
`;

const DescListBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    gap: 9px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`;

const DescList = styled.div`
  max-width: 100%;
  padding: 77px 20px 40px;
  background: #fff;
  box-sizing: border-box;
  text-align: center;
  @media ${({ theme }) => theme.mediaSize.xl} {
    padding: 45px 2%;
  }
`;

const DescTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.endeavour};
  margin-bottom: 8px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 16px;
  }
`;

const DescText = styled.p`
  font-size: 16px;
  font-weight: lighter;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 14px;
  }
`;

const Sponsor = () => {
  return (
    <Container>
      <Inner>
        <Title>
          어린이가 자라고
          <br />
          후원자도 자라는
          <br />
          우리는 컴패션입니다
        </Title>
      </Inner>
      <SponsorDesc>
        <Inner>
          <DescMenus>
            <DescMenu>
              <img
                src="https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/img_growup_tab_01.png"
                alt="growupImg"
              />
              <p>어린이가 자라고</p>
            </DescMenu>
            <DescMenu>
              <img
                src="https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/img_growup_tab_02.png"
                alt="growupImg"
              />
              <p>후원자도 자라는</p>
            </DescMenu>
            <DescMenu>
              <img
                src="https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/img_growup_tab_03.png"
                alt="growupImg"
              />
              <p>우리는 컴패션</p>
            </DescMenu>
          </DescMenus>
          <DescListBox>
            {sponsorDescArr.map((item, idx) => (
              <DescList key={idx}>
                <img src={item.img} alt="sponsordescImg" />
                <DescTitle>{item.title}</DescTitle>
                <DescText>{item.text01}</DescText>
                <DescText>{item.text02}</DescText>
              </DescList>
            ))}
          </DescListBox>
        </Inner>
      </SponsorDesc>
    </Container>
  );
};

export default Sponsor;
