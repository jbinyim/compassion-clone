import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Range } from "react-range";
import { useRecoilState } from "recoil";
import { sponState } from "../../atoms";

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
  @media ${({ theme }) => theme.mediaSize.l} {
    flex-direction: column;
  }
`;

const Label = styled.label`
  width: 300px;
  margin: 0 30px 0;
  @media ${({ theme }) => theme.mediaSize.l} {
    margin-left: 37px;
  }
`;

const CheckBox = styled.input<{ $isChecked: boolean }>`
  position: relative;
  height: 0;
  width: 32px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    background: url("https://www.compassion.or.kr/resources/fo/compassion/assets/images/common/ico_circle_check_24x24.png")
      no-repeat center;
    background-size: 100%;
    background-position: ${(props) => (props.$isChecked ? "0 -32px" : "0 0")};
    cursor: pointer;
  }
`;

const LabelText = styled.span`
  font-size: 16px;
  letter-spacing: -1px;
  line-height: 30px;
  cursor: pointer;
  p {
    font-size: 20px;
    font-weight: 400;
    span {
      color: #fff;
      background: ${({ theme }) => theme.colors.endeavour};
      font-weight: bold;
    }
  }
`;

const RangeBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${({ theme }) => theme.mediaSize.l} {
    margin-top: 50px;
  }
`;

const Track = styled.div`
  height: 6px;
  width: 100%;
  background: ${({ theme }) => theme.colors.alto};
  position: relative;
`;

const TrackSub = styled.div`
  background: ${({ theme }) => theme.colors.green};
  height: 8px;
`;

const TrackNum = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Thumb = styled.div<{ $isChecked: boolean }>`
  width: 24px;
  height: 24px;
  background: ${({ $isChecked }) => ($isChecked ? "#005eb8" : "#e0e0e0")};
  border-radius: 100%;
  position: absolute;
  top: 0;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const InputLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const MillonWraning = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

const Input = styled.input`
  width: 165px !important;
  height: 48px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.endeavour};
  outline: none;
  text-align: right !important;
  padding: 0 12px;
  @media ${({ theme }) => theme.mediaSize.l} {
    height: 40px;
    font-size: 20px;
  }
`;

interface sponChoseI {
  max: number;
  title: string;
  title2: string;
  text: string;
  boxname: string;
}

const SponChose = ({ max, title, title2, text, boxname }: sponChoseI) => {
  const [values, setValues] = useState([20000]);
  const [inputValue, setInputValue] = useRecoilState(sponState(boxname));
  const [isChecked, setIsChecked] = useState(false);

  const checkedBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);

    if (!e.target.checked) {
      setInputValue((prevState) => ({
        ...prevState,
        pay: "0",
      }));
      setValues([20000]);
    } else {
      setInputValue((prevState) => ({
        ...prevState,
        pay: "20000",
      }));
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue((prevState) => ({
      ...prevState,
      pay: value,
    }));

    const numericValue = Number(value);
    if (
      value &&
      numericValue >= 20000 &&
      numericValue <= max &&
      numericValue % 10000 === 0
    ) {
      setValues([numericValue]);
    } else if (value === "") {
      setValues([20000]);
    }
  };

  useEffect(() => {
    if (inputValue.id === "sponchose01") {
      if (Number(inputValue.pay) > 190000) {
        setValues([190000]);
        setInputValue((prevState) => ({
          ...prevState,
          pay: "190000",
        }));
      }
    }
    if (inputValue.id === "sponchose02") {
      if (Number(inputValue.pay) > 100000) {
        setValues([100000]);
        setInputValue((prevState) => ({
          ...prevState,
          pay: "100000",
        }));
      }
    }
  }, [inputValue, setInputValue]);

  const tracknumMax = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <Container>
      <Box>
        <CheckBox
          type="checkbox"
          id={boxname}
          onChange={(e) => checkedBox(e)}
          $isChecked={isChecked}
        />
        <Label htmlFor={boxname}>
          <LabelText>
            <p>
              <span>{title}</span>
              <br />
              {title2}
            </p>
            {text}
          </LabelText>
        </Label>
        <RangeBox>
          <Range
            step={10000}
            min={20000}
            max={max}
            values={values}
            onChange={(values) => {
              if (!isChecked) return;
              setValues(values);
              setInputValue((prevState) => ({
                ...prevState,
                pay: String(values[0]),
              }));
            }}
            renderTrack={({ props, children }) => (
              <Track {...props}>
                <TrackSub
                  className="range"
                  style={{
                    width: `${((values[0] - 20000) / (max - 20000)) * 100}%`,
                  }}
                />
                {children}
              </Track>
            )}
            renderThumb={({ props }) => (
              <Thumb {...props} key={props.key} $isChecked={isChecked} />
            )}
          />
          <TrackNum>
            <span>20,000</span>
            <span>{tracknumMax(max)}</span>
          </TrackNum>
          <InputBox>
            <InputLeft>
              <Input
                type="text"
                value={inputValue.pay}
                onChange={handleInputChange}
                disabled={!isChecked}
              />
              <p>원/년</p>
            </InputLeft>
            <MillonWraning>* 금액은 만원 단위로 지정가능합니다.</MillonWraning>
          </InputBox>
        </RangeBox>
      </Box>
    </Container>
  );
};

export default SponChose;
