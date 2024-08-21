import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { infoState } from "../../atoms";
import BannerColor from "../slides/BannerColor";
import { design } from "./InputInfoStyled";
import SquareBtn from "../buttons/SquareBtn";
import SquareColorBtn from "../buttons/SquareColorBtn";
import { useNavigate } from "react-router-dom";

const InputInfo = () => {
  const [inputInfo, setInputInfo] = useRecoilState(infoState);
  const [psShow, setPsShow] = useState(false);
  const [psPlusShow, setPsPlusShow] = useState(false);
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputCheckPw, setInputCheckPw] = useState(true);
  const [checkId, setCheckId] = useState(false);
  const [checkPw, setCheckPw] = useState(false);
  const navigate = useNavigate();

  const handleIdBlur = () => {
    if (!inputId) {
      setCheckId(true);
    } else {
      setCheckId(false);
    }
  };
  const handlePwBlur = () => {
    if (!inputPw) {
      setCheckPw(true);
    } else {
      setCheckPw(false);
    }
  };

  const conformPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputPw !== e.target.value) {
      setInputCheckPw(true);
    } else {
      setInputCheckPw(false);
    }
  };

  const postInfo = () => {
    if (inputId === "" && inputPw === "") {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    } else {
      alert("회원가입 완료되었습니다.");
      setInputInfo((prev) => ({
        ...prev,
        id: inputId,
        pw: inputPw,
      }));
      navigate("/");
    }
  };

  console.log(inputId, inputPw);

  return (
    <design.Container>
      <BannerColor text="개인 회원가입" />
      <design.Inner>
        <design.InfoText>기본정보 입력</design.InfoText>
        <design.Label>
          <p>이름</p>
          <input type="text" value={inputInfo.name} disabled />
        </design.Label>
        <design.Label>
          <p>법정생년월일</p>
          <input type="text" value={inputInfo.birth} disabled />
        </design.Label>
        <design.InfoText>아이디 생성</design.InfoText>
        <design.Label>
          <p>아이디</p>
          {checkId && (
            <design.WarnText style={{ color: "red" }}>
              아이디를 입력해주세요
            </design.WarnText>
          )}
          <input
            type="text"
            placeholder="아이디 (6~12자 이내)"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            onBlur={handleIdBlur}
          />
        </design.Label>
        <design.Label>
          <p>비밀번호</p>
          {checkPw && (
            <design.WarnText style={{ color: "red" }}>
              비밀번호를 입력해주세요
            </design.WarnText>
          )}
          <span>
            <input
              type={psShow ? "text" : "password"}
              placeholder="영문, 숫자 조합으로 최소 8자 이상"
              value={inputPw}
              onChange={(e) => setInputPw(e.target.value)}
              onBlur={handlePwBlur}
            />
            <design.PsShowBtn
              $psShow={psShow}
              onClick={() => setPsShow((prev) => !prev)}
            />
          </span>
        </design.Label>
        <design.Label>
          <p>비밀번호 확인</p>
          {inputCheckPw && (
            <design.WarnText style={{ color: "red" }}>
              비밀번호가 일치하지 않습니다.
            </design.WarnText>
          )}
          <span>
            <input
              type={psPlusShow ? "text" : "password"}
              placeholder="비밀번호 재확인"
              onChange={(e) => conformPw(e)}
            />
            <design.PsShowBtn
              $psShow={psShow}
              onClick={() => setPsPlusShow((prev) => !prev)}
            />
          </span>
        </design.Label>
        <design.BtnBox>
          <span>
            <SquareBtn text="취소" btnName="memberBtn" />
          </span>
          <span onClick={postInfo}>
            <SquareColorBtn text="다음" btnName="memberBtn" />
          </span>
        </design.BtnBox>
      </design.Inner>
    </design.Container>
  );
};

export default InputInfo;
