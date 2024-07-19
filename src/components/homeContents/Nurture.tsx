import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { nurtureBannerArr, yellowListArr } from "../../util";
import bgImg from "../../img/home/nanture/Image.png";
import bgLineImg from "../../img/home/nanture/bg_main_line_mid.png";

const Container = styled.div``;

const TopTextBox = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: -102px;
    right: -403px;
    width: 887px;
    height: 254px;
    background: url(${bgImg}) center/contain no-repeat;
  }
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
    &::before {
      width: 487px;
      top: -150px;
      right: 10px;
    }
  }
`;

const TopTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 24px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 30px;
    line-height: 40px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 28px;
    line-height: 34px;
    font-weight: 700;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 24px;
  }
  @media ${({ theme }) => theme.mediaSize.s} {
    font-size: 18px;
    letter-spacing: -1px;
  }
`;

const TopText = styled.p`
  font-size: 30px;
  font-weight: lighter;
  margin-bottom: 80px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 24px;
    letter-spacing: -0.5px;
    font-weight: 400;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 13px;
  }
`;

const RandomImg = styled.div`
  /* max-width: 1183px; */
  width: 100%;
  position: absolute;
  right: -180px;
  top: 202px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    right: -4%;
    img {
      width: 96%;
    }
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    img {
      width: 83%;
    }
  }
`;

const BgSection = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -150px;
    top: 30%;
    width: 100%;
    height: 100%;
    background: url(${bgLineImg}) center/cover no-repeat;
    z-index: 1;
  }
`;

const BgColor = styled.div`
  width: 86%;
  height: 728px;
  background: ${({ theme }) => theme.colors.iceberg};
  transform: translateY(150px);
`;

const ListBox = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -20%);
  @media ${({ theme }) => theme.mediaSize.xxl} {
    gap: 11px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    flex-direction: column;
    gap: 24px;
    top: 100%;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    top: 80%;
  }
`;

const List = styled.div<{ $bgImg: string }>`
  width: 384px;
  height: 533px;
  background: #fff url(${(props) => props.$bgImg}) no-repeat right 40px top 40px;
  background-size: auto 120px;
  box-shadow: 4px 10px 20px 0 rgba(0, 0, 0, 0.16);
  @media ${({ theme }) => theme.mediaSize.xxl} {
    width: 32%;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    background-size: auto 80px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    width: 90%;
    height: auto;
    padding-bottom: 24px;
    margin: 0 auto;
  }
`;

const ListTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.endeavour};
  margin: 212px 40px 0;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    margin: 212px 24px 0;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 26px;
    margin: 140px 24px 0;
  }
`;

const ListText = styled.p`
  font-size: 16px;
  line-height: 30px;
  margin: 16px 40px 0;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    margin: 16px 24px 0;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    font-size: 14px;
  }
`;

const Nurture = () => {
  let suffle = Math.floor(Math.random() * nurtureBannerArr.length);

  const m = useMediaQuery({ maxWidth: 768 });

  return (
    <Container>
      <TopTextBox>
        <TopTitle>꿈을 잃은 어린이들에게 그리스도의 사랑을</TopTitle>
        <TopText>
          세상 모든 어린이는 사랑받기에 마땅한 '소중한 존재'입니다
        </TopText>
        <RandomImg>
          {m ? (
            <img src={nurtureBannerArr[suffle].resImg} alt="nurtureImg" />
          ) : (
            <img src={nurtureBannerArr[suffle].img} alt="nurtureImg" />
          )}
        </RandomImg>
      </TopTextBox>
      <BgSection>
        <BgColor />
        <ListBox>
          {yellowListArr.map((item, idx) => (
            <List key={idx} $bgImg={item.img}>
              <ListTitle>
                we love
                <br />
                {item.title}
              </ListTitle>
              <ListText>{item.text}</ListText>
            </List>
          ))}
        </ListBox>
      </BgSection>
    </Container>
  );
};

export default Nurture;
