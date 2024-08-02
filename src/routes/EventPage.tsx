import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Banner from "../components/slides/Banner";
import banner01 from "../img/event/10005.png";
import banner02 from "../img/event/10008.png";
import { eventArr } from "../util";

const Container = styled.div``;

const Inner = styled.div`
  padding-top: 100px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 100px 4% 0;
  }
`;

const MenuBox = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Menu = styled.li<{ $active: boolean }>`
  max-width: 144px;
  width: 100%;
  height: 46px;
  border: 1px solid ${({ theme }) => theme.colors.endeavour};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${(props) => (props.$active ? "#fff" : "#005eb8")};
  background: ${(props) => (props.$active ? "#005eb8" : "#fff")};
  cursor: pointer;
`;

const CardBox = styled.div`
  margin-top: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  gap: 50px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    grid-template-columns: repeat(2, 50%);
    gap: 15px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    grid-template-columns: repeat(1, 100%);
  }
`;

const Card = styled.div<{ $process: boolean }>`
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  gap: 40px;
  padding: 40px 205px 40px 20px;
  position: relative;
  &::after {
    content: "${(props) => (props.$process ? "진행중" : "마감")}";
    position: absolute;
    top: -24px;
    right: 32px;
    width: 145px;
    height: 145px;
    border-radius: 100%;
    text-align: center;
    line-height: 145px;
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => (props.$process ? "#000" : "#768692")};
    background: ${(props) => (props.$process ? "#ffd100" : "#d9e1e2")};
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    padding: 0;
    flex-direction: column;
    gap: 0;
    &::after {
      top: 0;
      right: 0;
      width: 95px;
      height: 95px;
      line-height: 95px;
      opacity: 0.5;
    }
  }
`;

const Img = styled.img`
  max-width: 410px;
  width: 100%;
  height: 170px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    max-width: 100%;
  }
`;

const TextBox = styled.div`
  overflow: hidden;
  width: 100%;
  @media ${({ theme }) => theme.mediaSize.xl} {
    padding: 24px;
  }
`;

const Category = styled.p`
  display: inline-block;
  padding: 0 30px;
  height: 28px;
  line-height: 28px;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  border-radius: 14px;
  background: #003f77;
`;

const Title = styled.h4`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  line-height: 45px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Text = styled.p`
  width: 100%;
  height: 70px;
  font-size: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.geyser};
  @media ${({ theme }) => theme.mediaSize.xl} {
    font-size: 14px;
  }
`;

const Date = styled.p`
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 10px;
`;

const PageBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 50px 0 150px;
`;

const Page = styled.li<{ $num: boolean }>`
  width: 40px;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  background: #fff;
  border: 1px solid ${(props) => (props.$num ? "#005eb8" : "#d9e1e2")};
  color: ${(props) => (props.$num ? "#005eb8" : "#000")};
  cursor: pointer;
`;

const menuArr = ["전체", "캠페인", "이벤트"];

interface eventArrI {
  img: string;
  category: string;
  title: string;
  text?: string;
  date: string;
  process: string;
}

const EventPage = () => {
  const [menuToggle, setMenuToggle] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [showItem, setShowItem] = useState(5);
  const [filteredEvents, setFilteredEvents] = useState<eventArrI[]>(eventArr);
  const [display, setDisplay] = useState<eventArrI[]>([]);

  const handClick = (btnName: string) => {
    setMenuToggle(btnName);
    setCurrentPage(1);
  };

  const pageClick = (index: number) => {
    setCurrentPage(index + 1);
    window.scrollTo(0, 600);
  };

  const getPage = () => {
    const pageItems = filteredEvents.slice(
      (currentPage - 1) * showItem,
      currentPage * showItem
    );
    setDisplay(pageItems);
  };

  useEffect(() => {
    if (menuToggle === "전체") {
      setFilteredEvents(eventArr);
    } else {
      setFilteredEvents(
        eventArr.filter((event) => event.category === menuToggle)
      );
    }
    setCurrentPage(1);
  }, [menuToggle]);

  useEffect(() => {
    getPage();
  }, [currentPage, filteredEvents]);

  const totalPages = Math.ceil(filteredEvents.length / showItem);

  return (
    <Container>
      <Banner
        image={banner01}
        resImg={banner02}
        title="캠페인/이벤트"
        text="다양한 캠페인/이벤트에 참여하며 후원의 기쁨을 함께 누리세요"
      />
      <Inner>
        <MenuBox>
          {menuArr.map((item, idx) => (
            <Menu
              key={idx}
              $active={menuToggle === item}
              onClick={() => handClick(item)}
            >
              {item}
            </Menu>
          ))}
        </MenuBox>
        <CardBox>
          {display.map((item, index) => (
            <Card key={index} $process={item.process === "진행중"}>
              <Img src={item.img} alt="eventImg" />
              <TextBox>
                <Category>{item.category}</Category>
                <Title>{item.title}</Title>
                <Text>{item.text}</Text>
                <Date>{item.date}</Date>
              </TextBox>
            </Card>
          ))}
        </CardBox>
        <PageBox>
          {Array.from({ length: totalPages }, (_, index) => (
            <Page
              key={index + 1}
              onClick={() => pageClick(index)}
              $num={currentPage === index + 1}
            >
              {index + 1}
            </Page>
          ))}
        </PageBox>
      </Inner>
    </Container>
  );
};

export default EventPage;
