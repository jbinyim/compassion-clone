import styled from "styled-components";

export const Container = styled.div``;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  transform: translateY(-66px);
`;

export const FilterBox = styled.div<{ $toggle: boolean }>`
  height: ${(props) => (props.$toggle ? "487px" : "52px")};
  padding: 40px 56px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h4`
  font-size: 20px;
  font-weight: lighter;
  line-height: 52px;
`;

export const TitleBtn = styled.div`
  width: 128px;
  height: 48px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.endeavour};
  border-radius: 28px;
  color: ${({ theme }) => theme.colors.endeavour};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const ChveronDown = styled.svg<{ $toggle: boolean }>`
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.colors.endeavour};
  transform: ${(props) => props.$toggle && "rotate(180deg)"};
`;

export const FilterDesc = styled.div<{ $toggle: boolean }>`
  display: ${(props) => (props.$toggle ? "block" : "none")};
`;

export const DescTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const DescBox = styled.div`
  max-width: 330px;
  width: 100%;
  &.birth {
    max-width: 262px;
  }
  &.dontknow {
    max-width: 787px;
    width: 100%;
  }
`;

export const BoxTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const SexBtn = styled.div`
  width: 105px;
  height: 48px;
  text-align: center;
  font-size: 14px;
  line-height: 46px;
  color: ${({ theme }) => theme.colors.endeavour};
  border: 1px solid ${({ theme }) => theme.colors.endeavour};
  border-radius: 24px;
  cursor: pointer;
`;

export const Range = styled.input`
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  height: 46px;
  outline: none;
`;

export const DescBottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 100px;
`;

export const DontKnow = styled.div`
  width: 250px;
  height: 48px;
  text-align: center;
  font-size: 14px;
  line-height: 46px;
  color: ${({ theme }) => theme.colors.endeavour};
  border: 1px solid ${({ theme }) => theme.colors.endeavour};
  border-radius: 24px;
  cursor: pointer;
`;

export const FindBtnBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

export const FindBtn = styled.button`
  width: 320px;
  height: 48px;
  background: ${({ theme }) => theme.colors.endeavour};
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  outline: none;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: rgb(0, 67, 129);
  }
`;
