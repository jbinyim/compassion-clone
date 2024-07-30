import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { modalId } from "../../atoms";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getBabyInfo, ChildI } from "../../api";
import { modalIconArr, modalImg } from "../../util";
import SquareBtn from "../buttons/SquareBtn";
import SquareColorBtn from "../buttons/SquareColorBtn";
import cardImg from "../../img/modal/modalIcon.png";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 10px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  overscroll-behavior: none;
  z-index: 12;
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${({ theme }) => theme.mediaSize.xxl} {
    margin: 0 4%;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 24px;
`;

const TopTitle = styled.h4`
  font-size: 24px;
  font-weight: bold;
`;

const Mid = styled.div`
  margin-top: 48px;
  padding: 0 102px;
  display: flex;
  gap: 100px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    gap: 50px;
    div {
      max-width: 100%;
      height: 100%;
    }
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    flex-direction: column;
    padding: 0 4%;
    gap: 0;
  }
`;

const Img = styled.img`
  max-width: 384px;
  width: 100%;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    width: 40%;
    height: 100%;
  }
  @media ${({ theme }) => theme.mediaSize.l} {
    max-width: 100%;
    width: 100%;
  }
`;

const MidTitle = styled.h4`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 45px;
  margin-top: 50px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    margin-bottom: 20px;
  }
`;

const BoldBlue = styled.span`
  color: ${({ theme }) => theme.colors.endeavour};
`;

const MidText = styled.p<{ $icon: string }>`
  font-size: 16px;
  margin-bottom: 8px;
  letter-spacing: -0.2px;
  padding-left: 48px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    background: url(${(props) => props.$icon}) no-repeat center;
    background-size: 24px;
  }
  @media ${({ theme }) => theme.mediaSize.xxl} {
    font-size: 14px;
  }
`;

const BlodBlack = styled.span`
  font-weight: bold;
`;

const BlueText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.endeavour};
  margin-top: 30px;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    font-size: 14px;
    margin-top: 15px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
  span {
    width: 100%;
  }
  @media ${({ theme }) => theme.mediaSize.xxl} {
    margin-top: 25px;
  }
`;

const Bottom = styled.div`
  padding: 8% 4%;
`;

const BottomTitle = styled.h4`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  @media ${({ theme }) => theme.mediaSize.l} {
    font-size: 20px;
  }
`;

const CardBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 56px;
  @media ${({ theme }) => theme.mediaSize.l} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.li`
  width: 100%;
`;

const CardImg = styled.img`
  width: 100%;
`;

const ModalBottom = styled.div`
  width: 90%;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  transform: translateY(-30px);
`;

const ModalBottomTitle = styled.h4`
  padding: 24px 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.geyser};
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.endeavour};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    background: url(${cardImg}) no-repeat 0 0;
    background-size: 60px;
  }
  &.modal02::before {
    background-position: 0 -120px;
  }
  &.modal03::before {
    background-position: 0 -60px;
  }
  &.modal04::before {
    background-position: 0 -240px;
  }
  &.modal05::before {
    background-position: 0 -180px;
  }
  &.modal06::before,
  &.modal07::before {
    background-position: 0 -420px;
  }
  &.modal08::before {
    background-position: 0 -360px;
  }
`;
const ModalBottomText = styled.p`
  padding: 16px 24px;
  font-size: 16px;
`;

const Modal = () => {
  const navigate = useNavigate();
  const [modalToggle, setModalToggle] = useRecoilState(modalId);

  const { data, isLoading } = useQuery<ChildI[]>({
    queryKey: ["babyList"],
    queryFn: getBabyInfo,
  });

  const isModal = data?.find((item) => item.number === modalToggle);

  const goToSponsor = (num: string) => {
    navigate(`/sponsor?childId=${num}`);
  };

  const loading = isLoading && isModal;

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <Container>
        <Inner>
          <Top>
            <TopTitle>어린이 정보</TopTitle>
            <svg
              onClick={() => setModalToggle("0")}
              viewBox="0 -960 960 960"
              height="24px"
              width="24px"
              fill="#000"
              cursor="pointer"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </Top>
          <Mid>
            <Img src={isModal?.img} alt="babyImg" />
            <div>
              <MidTitle>
                안녕하세요?
                <br />
                저는 <BoldBlue>{isModal?.name}</BoldBlue>입니다.
              </MidTitle>
              <MidText $icon={modalIconArr[0]}>
                어린이 번호: <BlodBlack>{isModal?.number}</BlodBlack>
              </MidText>
              <MidText $icon={modalIconArr[1]}>
                <BlodBlack>{isModal?.live}</BlodBlack>에 사는{" "}
                <BlodBlack>
                  {isModal?.age}살 {isModal?.sex}
                </BlodBlack>
                어린이에요.
              </MidText>
              <MidText $icon={modalIconArr[2]}>
                <BlodBlack>{isModal?.birth}</BlodBlack>에 태어났어요
              </MidText>
              <MidText $icon={modalIconArr[3]}>
                저는{" "}
                {isModal?.hoby.map((item) => (
                  <BlodBlack>{item}&nbsp;</BlodBlack>
                ))}
                을(를) 좋아해요.
              </MidText>
              <MidText $icon={modalIconArr[4]}>
                저는
                {isModal?.family.map((item) => (
                  <BlodBlack>{item}&nbsp;</BlodBlack>
                ))}
                와(과) 함께 살아요.
              </MidText>
              <BlueText>
                후원자님과 함께 컴패션에서 꿈을 키우고 싶어요.
                <br />
                저의 후원자님이 되어주시겠어요?
              </BlueText>
              <BtnBox>
                <SquareBtn text="기억해 둘래요" btnName="modalBtn" />
                {isModal && (
                  <span onClick={() => goToSponsor(isModal.number)}>
                    <SquareColorBtn text="바로 후원하기" btnName="modalBtn" />
                  </span>
                )}
              </BtnBox>
            </div>
          </Mid>
          <Bottom>
            <BottomTitle>
              {isModal?.name}은(는) 후원자님을 만나면
              <br />
              어떤 지원을 받나요?
            </BottomTitle>
            <CardBox>
              {modalImg.map((item) => (
                <Card key={item.id}>
                  <CardImg src={item.img} alt="modalimg" />
                  <ModalBottom>
                    <ModalBottomTitle className={item.id}>
                      {item.title}
                    </ModalBottomTitle>
                    <ModalBottomText>{item.text}</ModalBottomText>
                  </ModalBottom>
                </Card>
              ))}
            </CardBox>
          </Bottom>
        </Inner>
      </Container>
    );
  }
};

export default Modal;
