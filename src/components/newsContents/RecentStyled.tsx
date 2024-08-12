import styled from "styled-components";

const Container = styled.div`
  margin-top: 150px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.geyser};
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h4`
  font-size: 32px;
  letter-spacing: -1px;
  font-weight: bold;
`;

const SearchBox = styled.div`
  display: flex;
  gap: 15px;
`;

const Input = styled.input`
  width: 300px;
  height: 47px;
  padding: 0 12px;
  outline: none;
  border: 1px solid #000;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.endeavour};
  }
`;

const SearchBtn = styled.button`
  width: 100px;
  height: 47px;
  background: ${({ theme }) => theme.colors.endeavour};
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`;

const MidBox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Card = styled.div`
  display: flex;
  gap: 30px;
`;

const Img = styled.img`
  width: 282px;
  height: 200px;
  object-fit: cover;
  object-position: top;
`;

const TitleCard = styled.h4`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1px;
`;

const SubTextBox = styled.div`
  display: flex;
  margin: 20px 0 24px;
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
    &:first-child {
      padding-right: 10px;
      margin-right: 10px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 1px;
        height: 50%;
        background: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

const PageBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 50px 0 100px;
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

export const styles = {
  Container,
  TopBox,
  Title,
  SearchBox,
  Input,
  SearchBtn,
  MidBox,
  Card,
  Img,
  TitleCard,
  SubTextBox,
  PageBox,
  Page,
};
