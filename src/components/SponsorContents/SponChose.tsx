import React, { useState } from "react";
import styled from "styled-components";
import { Range } from "react-range";

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
`;

const Label = styled.label`
  width: 270px;
  margin: 0 30px 0;
`;

const LabelText = styled.span`
  font-size: 16px;
  letter-spacing: -1px;
  line-height: 30px;
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
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

const Thumb = styled.div`
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.endeavour};
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
`;

const SponChose = () => {
  const [values, setValues] = useState([20000]);
  const [inputValue, setInputValue] = useState<string>("20000");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const numericValue = Number(value);
    if (
      value &&
      numericValue >= 20000 &&
      numericValue <= 190000 &&
      numericValue % 10000 === 0
    ) {
      setValues([numericValue]);
    } else if (value === "") {
      setValues([20000]);
    }
  };

  return (
    <Container>
      <Box>
        <input type="checkbox" id="birthSpon" />
        <Label htmlFor="birthSpon">
          <span />
          <LabelText>
            <p>
              <span>나의 후원 어린이에게</span>
              <br />
              생일 선물금을 보냅니다.
            </p>
            1년에 한번 후원 어린이 생일 한달전에 양육 후원금과 함께 결제됩니다.
          </LabelText>
        </Label>
        <RangeBox>
          <Range
            step={10000}
            min={20000}
            max={190000}
            values={values}
            onChange={(values) => {
              setValues(values);
              setInputValue(String(values[0]));
            }}
            renderTrack={({ props, children }) => (
              <Track {...props}>
                <TrackSub
                  className="range"
                  style={{
                    width: `${((values[0] - 20000) / (190000 - 20000)) * 100}%`,
                  }}
                />
                {children}
              </Track>
            )}
            renderThumb={({ props }) => <Thumb {...props} key={props.key} />}
          />
          <TrackNum>
            <span style={{ marginRight: "10px" }}>20,000</span>
            <span style={{ marginLeft: "10px" }}>190,000</span>
          </TrackNum>
          <InputBox>
            <InputLeft>
              <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                style={{ width: "100px", textAlign: "center" }}
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
