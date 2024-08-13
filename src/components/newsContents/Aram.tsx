import React from "react";
import { sty } from "./AramStyled";
import { newsArr } from "./newsDB";

const Aram = () => {
  return (
    <sty.Container>
      <sty.AramTitle>알려드립니다</sty.AramTitle>
      <sty.CardBox>
        {newsArr.slice(21, 24).map((item) => (
          <sty.Card>
            <sty.Img src={item.img} alt="newsImg" />
            <sty.Title>{item.title}</sty.Title>
            <div>
              <p>{item.category}</p>
              <p>{item.date}</p>
            </div>
            <p>{item.text}</p>
          </sty.Card>
        ))}
      </sty.CardBox>
    </sty.Container>
  );
};

export default Aram;
