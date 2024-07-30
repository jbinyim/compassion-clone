import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getBabyInfo, ChildI } from "../../api";
import { useLocation } from "react-router-dom";

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 64px auto 0;
`;

const CardBox = styled.div`
  width: 100%;
  height: 282px;
  display: flex;
  gap: 40px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 64px;
`;

const Img = styled.img`
  max-width: 384px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const Card = styled.div`
  padding: 40px 40px 0 0;
  width: 100%;
`;

const BlueTitle = styled.p`
  padding: 0 18px;
  width: 120px;
  height: 28px;
  line-height: 28px;
  color: #fff;
  border-radius: 14px;
  font-size: 12px;
  letter-spacing: -1px;
  text-align: center;
  background: ${({ theme }) => theme.colors.lochmara};
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 47px;
`;

const Name = styled.h4`
  font-size: 24px;
  font-weight: bold;
  margin-right: 10px;
`;

const Info = styled.p`
  font-size: 14px;
  margin: 0 10px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
    width: 1px;
    height: 10px;
    background: #000;
  }
  &:last-child::after {
    width: 0;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.capeCod};
  span {
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }
`;

const Cards = () => {
  const location = useLocation();
  const childId = new URLSearchParams(location.search).get("childId");
  const { data, isLoading } = useQuery<ChildI[]>({
    queryKey: ["babyLisk"],
    queryFn: getBabyInfo,
  });

  if (!data || isLoading) return <div>loading</div>;
  if (!data) return <div>데이터를 불러오는 데 실패했습니다.</div>;

  const mixData = Math.floor(Math.random() * data.length);

  const render = (item: ChildI) => {
    return (
      <Inner>
        <CardBox>
          <Img src={item?.img} alt="babyImg" />
          <Card>
            <BlueTitle>1:1 어린이양육</BlueTitle>
            <InfoBox>
              <Name>{item?.name}</Name>
              <Info>{item?.live}</Info>
              <Info>{item?.age}살</Info>
              <Info>{item?.sex}</Info>
            </InfoBox>
            <Box>
              <p>후원유형</p>
              <p>정기후원</p>
            </Box>
            <Box>
              <p>매월 결제되는 후원금</p>
              <p>
                <span>45,000</span> 원
              </p>
            </Box>
          </Card>
        </CardBox>
      </Inner>
    );
  };

  if (childId === null) {
    return render(data[mixData]);
  } else {
    const isChildId = data.find((item) => item.number === childId);
    if (isChildId) {
      return render(isChildId);
    } else {
      return <div>해당 어린이를 찾을 수 없습니다.</div>;
    }
  }
};

export default Cards;
