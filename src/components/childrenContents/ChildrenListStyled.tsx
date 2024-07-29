import styled from "styled-components";
import profile from "../../img/childrenpage/ico_children_family.png";
import birthImg from "../../img/childrenpage/ico_children_birth.png";

export const Container = styled.div`
  margin-top: 80px;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

export const ListToggleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 8px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    display: none;
  }
`;

export const ListToggle = styled.button<{ $listToggle: boolean }>`
  width: 72px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.endeavour};
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
  &.rowBox {
    background: ${(props) => (props.$listToggle === true ? "#005eb8" : "#fff")};
    svg {
      fill: ${(props) => (props.$listToggle === true ? "#fff" : "#005eb8")};
    }
  }
  &.columnBox {
    background: ${(props) =>
      props.$listToggle === false ? "#005eb8" : "#fff"};
    svg {
      fill: ${(props) => (props.$listToggle === false ? "#fff" : "#005eb8")};
    }
  }
`;

export const ToggleIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.endeavour};
`;
export const List = styled.div`
  margin-top: 24px;
`;

export const ListCardBox = styled.ul<{ $listToggle: boolean }>`
  max-width: 1200px;
  width: 100%;
  display: ${(props) => (props.$listToggle ? "flex" : "grid")};
  grid-template-columns: ${(props) =>
    props.$listToggle ? "none" : "repeat(3, 1fr)"};
  flex-direction: ${(props) => (props.$listToggle ? "column" : "none")};
  justify-content: ${(props) => (props.$listToggle ? "center" : "none")};
  align-items: ${(props) => (props.$listToggle ? "center" : "none")};
  gap: ${(props) => (props.$listToggle ? "24px" : "24px")};
  @media ${({ theme }) => theme.mediaSize.l} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ListCard = styled.li`
  display: flex;
  width: 100%;
  height: 296px;
  background: #fff;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
  transition: all 0.3s;
  overflow: hidden;
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.endeavour};
    background: ${({ theme }) => theme.colors.iceberg};
  }
`;

export const Img = styled.img`
  width: 296px;
  height: 296px;
  object-fit: cover;
  object-position: top;
`;

export const TextBox = styled.div`
  width: 570px;
  margin-left: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h4`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  margin-bottom: 32px;
  span {
    color: ${({ theme }) => theme.colors.endeavour};
  }
`;

export const Text = styled.p<{ $listToggle: boolean }>`
  font-size: 16px;
  font-weight: lighter;
  line-height: 24px;
  margin-top: 8px;
  margin-left: ${(props) => (props.$listToggle ? "48px" : "30px")};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: ${(props) => (props.$listToggle ? "-48px" : "-20px")};
    width: 24px;
    height: 24px;
    background: url(${profile}) center/cover no-repeat;
  }
`;

export const Text02 = styled(Text)`
  position: relative;
  margin-left: ${(props) => (props.$listToggle ? "48px" : "30px")};
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: ${(props) => (props.$listToggle ? "-48px" : "-20px")};
    width: 24px;
    height: 24px;
    background: url(${birthImg}) center/cover no-repeat;
  }
`;

export const TextBold = styled.span`
  font-weight: bold;
`;

export const BtnBox = styled.div<{ $listToggle: boolean }>`
  max-width: ${(props) => (props.$listToggle ? "214px" : "100%")};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 56px;
  span {
    width: 100%;
  }
`;

export const ShareBtn = styled.button`
  width: 44px;
  height: 44px;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.slateGray};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 16px;
  }
`;

export const BtnBottomBox = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  gap: 8px;
`;

export const CartBtn = styled.button`
  width: 72px;
  height: 48px;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.slateGray};
  border-radius: 4px;
  cursor: pointer;
  svg {
    fill: #768692;
  }
`;

export const SeeMoreBtn = styled.button`
  display: block;
  width: 320px;
  height: 48px;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.slateGray};
  border-radius: 4px;
  font-size: 15px;
  margin: 80px auto 0;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    border: 1px solid #000;
  }
`;

export const ListCardFalse = styled.li`
  max-width: 324px;
  height: auto;
  padding: 24px 24px 36px;
  background: #fff;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
  transition: all 0.3s;
  text-align: center;
  box-sizing: content-box;
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.endeavour};
    background: ${({ theme }) => theme.colors.iceberg};
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    max-width: 100%;
  }
`;

export const ShareBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 3px;
  gap: 5px;
`;
export const ShareToggleBox = styled.div`
  display: flex;
  gap: 5px;
  transition: all 0.3s;
`;
export const ShareToggle = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100px;
`;

export const FalseImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  object-fit: cover;
  object-position: top;
`;

export const LoadingGif = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
`;
