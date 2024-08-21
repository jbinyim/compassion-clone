import styled from "styled-components";
import psImg from "../../img/member/ico_password_show.png";

const Container = styled.div``;

const Inner = styled.div`
  max-width: 588px;
  width: 100%;
  margin: 50px auto 100px;
`;

const InfoText = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Label = styled.label`
  p {
    font-size: 12px;
    margin-bottom: 4px;
  }
  span {
    position: relative;
  }
  input {
    width: 100%;
    height: 48px;
    padding: 0 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    outline: none;
    margin-bottom: 30px;
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.endeavour};
    }
  }
`;

const WarnText = styled.p`
  margin-bottom: 30px;
`;

const PsShowBtn = styled.button<{ $psShow: boolean }>`
  position: absolute;
  top: 0;
  right: 10px;
  width: 20px;
  height: 20px;
  background: url(${psImg}) no-repeat 0 0;
  background-size: 100%;
  background-position: ${(props) => (props.$psShow ? "0 -20px" : "0 0")};
  border: none;
  cursor: pointer;
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    width: 100%;
  }
`;

export const design = {
  Container,
  Inner,
  InfoText,
  Label,
  WarnText,
  PsShowBtn,
  BtnBox,
};
