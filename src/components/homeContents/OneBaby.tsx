import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { ChildI, getBabyInfo } from "../../api";
import SquareBtn from "../buttons/SquareBtn";
import SquareColorBtn from "../buttons/SquareColorBtn";
import loadingImg from "../../img/icon/loading.gif";
import { LoadingGif } from "../childrenContents/ChildrenListStyled";

const OneBabyContainer = styled.div`
  position: relative;
  margin-bottom: 180px;
  &::before {
    content: "";
    display: block;
    width: 1153px;
    height: 576px;
    background: ${({ theme }) => theme.colors.blackSqueeze3};
    position: absolute;
    bottom: 0;
    left: 0;
    @media ${({ theme }) => theme.mediaSize.xxl} {
      width: 70%;
      top: 17%;
    }
    @media ${({ theme }) => theme.mediaSize.xl} {
      height: 440px;
    }
    @media ${({ theme }) => theme.mediaSize.l} {
      top: 11%;
      height: 400px;
    }
    @media ${({ theme }) => theme.mediaSize.m} {
      top: 25%;
      width: 80%;
      height: 75%;
    }
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  height: 716px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 45px;
  position: relative;
  z-index: 1;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 50px;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    height: auto;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    flex-direction: column-reverse;
  }
`;

const InfoBox = styled.div`
  margin-top: 60px;
  z-index: 1;
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.endeavour};
  margin-bottom: 73px;
  padding-bottom: 12px;
  position: relative;
  &::after {
    content: "";
    display: block;
    min-width: 219px;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.endeavour};
    position: absolute;
    left: -222px;
    bottom: 0;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 20px;
    margin-bottom: 33px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 16px;
  }
`;

const Together = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 24px;
  span {
    color: ${({ theme }) => theme.colors.endeavour};
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 30px;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 28px;
  }
`;

const Info = styled.p`
  font-size: 16px;
  margin-bottom: 57px;
  b {
    font-weight: bold;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 14px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  gap: 24px;
`;

const ImgBox = styled.div`
  width: 485px;
  z-index: 2;
  img {
    width: 100%;
  }
  @media ${({ theme }) => theme.mediaSize.xxl} {
    width: 35%;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    width: 100%;
  }
`;

const SeemoreChild = styled.p`
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  right: 0;
  bottom: -50px;
  padding: 0 52px 6px 0;
  border-bottom: 1px solid #000;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 12px;
    height: 1px;
    background: #000;
    transform: rotate(45deg);
    position: absolute;
    right: -1px;
    bottom: 3px;
  }
`;

const OneBaby = () => {
  const { data, isLoading } = useQuery<ChildI[]>({
    queryKey: ["babyInfo"],
    queryFn: getBabyInfo,
  });

  let suffle = data && Number(Math.floor(Math.random() * data?.length));

  if (isLoading) {
    return <LoadingGif src={loadingImg} alt="loading.gif" />;
  } else {
    return (
      <OneBabyContainer>
        {suffle && data && (
          <Inner>
            <InfoBox>
              <Title>1:1 어린이양육</Title>
              <Together>
                함께 자라는 <br />
                <span>나</span> 그리고 <span>{data[suffle].name}</span>
              </Together>
              <Info>
                안녕하세요, <b>{data[suffle].live}</b>에 사는{" "}
                <b>{data[suffle].name}</b>
                입니다.
                <br />
                저는 <b>{data[suffle].age}</b>살 <b>{data[suffle].sex}</b>
                어린이에요.
                <br />
                <br />
                얼른 후원자님을 만나 편지를 주고받고 싶어요.
                <br />
                저의 후원자님이 되어주시겠어요?
              </Info>
              <BtnBox>
                <SquareBtn text="어린이 자세히보기" btnName="seemoreChild" />
                <SquareColorBtn text="어린이 후원하기" btnName="giveChild" />
              </BtnBox>
            </InfoBox>
            <ImgBox>
              <img src={data[suffle].img} alt="babyImg" />
            </ImgBox>
            <SeemoreChild>다른 어린이 더보기</SeemoreChild>
          </Inner>
        )}
      </OneBabyContainer>
    );
  }
};

export default OneBaby;
