import React, { useState } from "react";
import BannerColor from "../slides/BannerColor";
import { style } from "./CheckIdentifyStyled";
import SquareBtn from "../buttons/SquareBtn";
import SquareColorBtn from "../buttons/SquareColorBtn";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { infoState } from "../../atoms";

const CheckIdentify = () => {
  const [inputName, setInputName] = useState("");
  const [inputBirth, setInputBirth] = useState("");
  const [showNameWarning, setShowNameWarning] = useState(false);
  const [showBirthWarning, setShowBirthWarning] = useState(false);
  const [inputInfo, setInputInfo] = useRecoilState(infoState);
  const navigate = useNavigate();

  const handleNameBlur = () => {
    if (!inputName) {
      setShowNameWarning(true);
    } else {
      setShowNameWarning(false);
    }
  };

  const handleBirthBlur = () => {
    if (!inputBirth) {
      setShowBirthWarning(true);
    } else {
      setShowBirthWarning(false);
    }
  };

  const saveInfo = () => {
    if (inputName === "" && inputBirth === "") {
      alert("이름과 생년월일을 입력해주세요");
      return;
    } else {
      setInputInfo((prev) => ({
        ...prev,
        name: inputName,
        birth: inputBirth,
      }));
      navigate("/member/inputInfo");
    }
  };

  const gotoback = () => {
    navigate("/member");
  };

  return (
    <div>
      <BannerColor text="개인 회원가입" />
      <style.Container>
        <style.TextBox>
          <style.WarnText>
            안전한 회원가입을 위해 본인인증을 진행해주세요.
          </style.WarnText>
          <p>
            입력하신 개인 정보는 회원가입 여부 확인 및 입력 편의 제공, 본인인증
            목적으로만 이용됩니다.
          </p>
        </style.TextBox>
        <style.InputBox>
          <style.Label>
            <p>이름</p>
            <input
              type="text"
              placeholder="이름"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              onBlur={handleNameBlur}
            />
            {showNameWarning && (
              <span style={{ color: "red" }}>이름을 입력해주세요</span>
            )}
          </style.Label>
          <style.Label>
            <p>범정생년월일</p>
            <input
              type="text"
              placeholder="범정생년월일 8자리 (예: 20201205)"
              value={inputBirth}
              onChange={(e) => setInputBirth(e.target.value)}
              onBlur={handleBirthBlur}
            />
            {showBirthWarning && (
              <span style={{ color: "red" }}>생년월일을 입력해주세요</span>
            )}
          </style.Label>
          <style.BtnBox>
            <span onClick={gotoback}>
              <SquareBtn text="취소" btnName="memberBtn" />
            </span>
            <span onClick={saveInfo}>
              <SquareColorBtn text="다음" btnName="memberBtn" />
            </span>
          </style.BtnBox>
        </style.InputBox>
      </style.Container>
    </div>
  );
};

export default CheckIdentify;
