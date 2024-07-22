import React, { useState } from "react";
import { ctry } from "../../util";
import {
  Container,
  Inner,
  FilterBox,
  TitleBox,
  Title,
  TitleBtn,
  ChveronDown,
  FilterDesc,
  DescTop,
  DescBox,
  BoxTitle,
  BtnBox,
  SexBtn,
  Range,
  Select,
  DescBottom,
  DontKnow,
  FindBtnBox,
  FindBtn,
} from "./FilterStyled";

const Filter = () => {
  const [filterToggle, setFilterToggle] = useState(false);

  return (
    <Container>
      <Inner>
        <FilterBox $toggle={filterToggle}>
          <TitleBox>
            <Title>컴패션에는 어떤 아이들이 있나요?</Title>
            <TitleBtn onClick={() => setFilterToggle((prev) => !prev)}>
              <span>필터</span>
              <ChveronDown viewBox="0 -960 960 960" $toggle={filterToggle}>
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </ChveronDown>
            </TitleBtn>
          </TitleBox>
          <FilterDesc $toggle={filterToggle}>
            <DescTop>
              <DescBox>
                <BoxTitle>성별</BoxTitle>
                <BtnBox>
                  <SexBtn>전체</SexBtn>
                  <SexBtn>남자</SexBtn>
                  <SexBtn>여자</SexBtn>
                </BtnBox>
              </DescBox>
              <DescBox>
                <BoxTitle>나이</BoxTitle>
                <Range type="range" min={0} max={20} />
              </DescBox>
              <DescBox>
                <BoxTitle>국가</BoxTitle>
                <Select name="contry" id="contry" defaultValue="all">
                  <option value="all" selected>
                    전체
                  </option>
                  {ctry.map((item, idx) => (
                    <option key={idx} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Select>
              </DescBox>
            </DescTop>
            <DescBottom>
              <DescBox className="birth">
                <BoxTitle>아이 생일 찾기</BoxTitle>
                <select name="month" id="month" defaultValue="0">
                  <option value="0" selected>
                    월
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select name="s_day" id="s_day" defaultValue="0">
                  <option value="0" selected>
                    일
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                </select>
              </DescBox>
              <DescBox className="dontknow">
                <BoxTitle>어떤 어린이를 후원해야 할 지 모르겠어요</BoxTitle>
                <BtnBox>
                  <DontKnow>오늘이 생일인 어린이</DontKnow>
                  <DontKnow>몸이 불편한 어린이</DontKnow>
                  <DontKnow>한부모가정/조손가정/고아 어린이</DontKnow>
                </BtnBox>
              </DescBox>
            </DescBottom>
            <FindBtnBox>
              <FindBtn>어린이 찾기</FindBtn>
            </FindBtnBox>
          </FilterDesc>
        </FilterBox>
      </Inner>
    </Container>
  );
};

export default Filter;
