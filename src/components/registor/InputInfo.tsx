import React from "react";
import { useRecoilState } from "recoil";
import { infoState } from "../../atoms";
import BannerColor from "../slides/BannerColor";

const InputInfo = () => {
  const [inputInfo, setInputInfo] = useRecoilState(infoState);

  console.log(inputInfo);

  return (
    <div>
      <BannerColor text="개인 회원가입" />
    </div>
  );
};

export default InputInfo;
