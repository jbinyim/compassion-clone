import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "react-responsive";
import { useRecoilState } from "recoil";
import { modalId } from "../../atoms";
import { ChildI, getBabyInfo } from "../../api";
import { useNavigate } from "react-router-dom";
import Modal from "../modals/Modal";
import SquareBtn from "../buttons/SquareBtn";
import SquareColorBtn from "../buttons/SquareColorBtn";
import share from "../../img/childrenpage/ico_sns_share.png";
import loadingImg from "../../img/icon/loading.gif";
import {
  Container,
  Inner,
  ListToggleBox,
  ListToggle,
  ToggleIcon,
  List,
  ListCardBox,
  ListCard,
  TextBox,
  Title,
  Text,
  TextBold,
  Text02,
  Img,
  BtnBox,
  ShareBtn,
  BtnBottomBox,
  CartBtn,
  SeeMoreBtn,
  ListCardFalse,
  ShareBtnBox,
  ShareToggleBox,
  ShareToggle,
  FalseImg,
  LoadingGif,
} from "./ChildrenListStyled";

const ChildrenList = () => {
  const [listToggle, setListToggle] = useState(true);
  const [displayedItems, setDisplayedItems] = useState<ChildI[]>([]);
  const [itemsToShow, setItemsToShow] = useState(6);
  const [shareToggle, setShareToggle] = useState(false);
  const [modalToggle, setModalToggle] = useRecoilState(modalId);
  const navigate = useNavigate();

  const xl = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    if (xl) {
      setListToggle(false);
    } else {
      setListToggle(true);
    }
  }, [xl]);

  const onClickListToggle = (toggle: boolean) => {
    setListToggle(toggle);
  };

  const { data, isLoading } = useQuery<ChildI[]>({
    queryKey: ["babyList"],
    queryFn: getBabyInfo,
  });

  if (isLoading) return <LoadingGif src={loadingImg} alt="loading.gif" />;
  if (!data || data.length === 0) return <div>No data available</div>;

  const shuffledData = [...data].sort(() => 0.5 - Math.random());

  const getNewItems = () => {
    const remainingItems = shuffledData.filter(
      (item) => !displayedItems.includes(item)
    );

    if (remainingItems.length === 0) {
      alert("모든 아이템을 다 출력했습니다!");
      return;
    }

    const newItems = remainingItems.slice(0, itemsToShow);
    setDisplayedItems((prev) => [...prev, ...newItems]);
    setItemsToShow(itemsToShow + 6);
  };

  if (displayedItems.length === 0) {
    getNewItems();
  }

  const goToModal = (num: string) => {
    setModalToggle(num);
  };

  const goToSponsor = (num: string) => {
    navigate(`/sponsor?childId=${num}`);
  };

  return (
    <Container>
      <Inner>
        <ListToggleBox>
          <ListToggle
            onClick={() => onClickListToggle(true)}
            $listToggle={listToggle}
            className="rowBox"
          >
            <ToggleIcon viewBox="0 -960 960 960">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </ToggleIcon>
          </ListToggle>
          <ListToggle
            onClick={() => onClickListToggle(false)}
            $listToggle={listToggle}
            className="columnBox"
          >
            <ToggleIcon viewBox="0 -960 960 960">
              <path d="M340-540H200q-33 0-56.5-23.5T120-620v-140q0-33 23.5-56.5T200-840h140q33 0 56.5 23.5T420-760v140q0 33-23.5 56.5T340-540Zm-140-80h140v-140H200v140Zm140 500H200q-33 0-56.5-23.5T120-200v-140q0-33 23.5-56.5T200-420h140q33 0 56.5 23.5T420-340v140q0 33-23.5 56.5T340-120Zm-140-80h140v-140H200v140Zm560-340H620q-33 0-56.5-23.5T540-620v-140q0-33 23.5-56.5T620-840h140q33 0 56.5 23.5T840-760v140q0 33-23.5 56.5T760-540Zm-140-80h140v-140H620v140Zm140 500H620q-33 0-56.5-23.5T540-200v-140q0-33 23.5-56.5T620-420h140q33 0 56.5 23.5T840-340v140q0 33-23.5 56.5T760-120Zm-140-80h140v-140H620v140ZM340-620Zm0 280Zm280-280Zm0 280Z" />
            </ToggleIcon>
          </ListToggle>
        </ListToggleBox>
        <List>
          <ListCardBox $listToggle={listToggle}>
            {displayedItems.map((item, index) => (
              <>
                {listToggle ? (
                  <ListCard key={item.id}>
                    <Img src={item.img} alt="babyImg" />
                    <TextBox>
                      <Title>
                        안녕하세요! 저는 <span>{item.name}</span>입니다.
                      </Title>
                      <Text $listToggle={listToggle}>
                        <TextBold>{item.live}</TextBold>에 사는{" "}
                        <TextBold>{item.age}</TextBold>살{" "}
                        <TextBold>{item.sex}</TextBold>어린이에요.
                      </Text>
                      <Text02 $listToggle={listToggle}>
                        <TextBold>{item.birth}</TextBold>에 태어났어요.
                      </Text02>
                    </TextBox>
                    <BtnBox $listToggle={listToggle}>
                      <ShareBtn>
                        <img src={share} alt="shareImg" />
                      </ShareBtn>
                      <span onClick={() => goToModal(item.number)}>
                        <SquareBtn text="더 알아보기" btnName="childSee" />
                      </span>
                      <BtnBottomBox>
                        <CartBtn>
                          <svg
                            viewBox="0 -960 960 960"
                            height="24px"
                            width="24px"
                            fill="#5f6368"
                          >
                            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                          </svg>
                        </CartBtn>
                        <span onClick={() => goToSponsor(item.number)}>
                          <SquareColorBtn
                            text="바로 후원하기"
                            btnName="childNow"
                          />
                        </span>
                      </BtnBottomBox>
                    </BtnBox>
                  </ListCard>
                ) : (
                  <ListCardFalse key={item.id}>
                    <ShareBtnBox>
                      <ShareBtn>
                        <img src={share} alt="shareImg" />
                      </ShareBtn>
                    </ShareBtnBox>
                    <Title>
                      안녕하세요!
                      <br />
                      저는 <span>{item.name}</span>입니다.
                    </Title>
                    <FalseImg src={item.img} alt="babyImg" />
                    <div></div>
                    <Text $listToggle={listToggle}>
                      <TextBold>{item.live}</TextBold>에 사는{" "}
                      <TextBold>{item.age}</TextBold>살{" "}
                      <TextBold>{item.sex}</TextBold>어린이에요.
                    </Text>
                    <Text02 $listToggle={listToggle}>
                      <TextBold>{item.birth}</TextBold>에 태어났어요.
                    </Text02>
                    <BtnBox $listToggle={listToggle}>
                      <span onClick={() => goToModal(item.number)}>
                        <SquareBtn text="더 알아보기" btnName="childSee" />
                      </span>
                      <BtnBottomBox>
                        <CartBtn>
                          <svg
                            viewBox="0 -960 960 960"
                            height="24px"
                            width="24px"
                            fill="#5f6368"
                          >
                            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                          </svg>
                        </CartBtn>
                        <span onClick={() => goToSponsor(item.number)}>
                          <SquareColorBtn
                            text="바로 후원하기"
                            btnName="childNow"
                          />
                        </span>
                      </BtnBottomBox>
                    </BtnBox>
                  </ListCardFalse>
                )}
              </>
            ))}
          </ListCardBox>
          {displayedItems.length < data.length && (
            <SeeMoreBtn onClick={getNewItems}>더보기</SeeMoreBtn>
          )}
        </List>
      </Inner>
      {modalToggle !== "0" && <Modal />}
    </Container>
  );
};

export default ChildrenList;
