import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { newsArr } from "./newsDB";
import { styles } from "./RecentStyled";

interface newsItemI {
  img: string;
  title: string;
  category: string;
  date: string;
  text: string;
}

const Recent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [display, setDisplay] = useState<newsItemI[]>([]);

  const pageClick = (index: number) => {
    setCurrentPage(index + 1);
    // window.scrollTo(0, 100);
  };

  const getPageItem = () => {
    const pageItem = newsArr.slice((currentPage - 1) * 5, currentPage * 5);
    setDisplay(pageItem);
  };

  const totalPage = Math.ceil(newsArr.length / 5);

  useEffect(() => {
    getPageItem();
  }, [currentPage]);

  return (
    <styles.Container>
      <styles.TopBox>
        <styles.Title>최신 콘텐츠</styles.Title>
        <styles.SearchBox>
          <styles.Input type="text" placeholder="컴패션 소식 검색" />
          <styles.SearchBtn>검색</styles.SearchBtn>
        </styles.SearchBox>
      </styles.TopBox>
      <styles.MidBox>
        {display.map((item) => (
          <styles.Card key={item.date}>
            <styles.Img src={item.img} alt="newImg" />
            <div>
              <styles.TitleCard>{item.title}</styles.TitleCard>
              <styles.SubTextBox>
                <p>{item.category}</p>
                <p>{item.date}</p>
              </styles.SubTextBox>
              <p>{item.text}</p>
            </div>
          </styles.Card>
        ))}
      </styles.MidBox>
      <styles.PageBox>
        {Array.from({ length: totalPage }, (_, index) => (
          <styles.Page
            key={index}
            onClick={() => pageClick(index)}
            $num={currentPage === index + 1}
          >
            {index + 1}
          </styles.Page>
        ))}
      </styles.PageBox>
    </styles.Container>
  );
};

export default Recent;
