import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-bottom: 100px;
`;

const TextBox = styled.div`
  text-align: center;
  margin-top: 50px;
  p {
    letter-spacing: -1px;
  }
`;

const WarnText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const InputBox = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  width: 588px;
  margin-bottom: 50px;
  p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    height: 48px;
    padding: 0 10px;
    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.endeavour};
    }
  }
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    display: inline-block;
    width: 100%;
  }
`;

export const style = {
  Container,
  TextBox,
  WarnText,
  InputBox,
  Label,
  BtnBox,
};
