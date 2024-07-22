import React, { useState } from "react";
import styled from "styled-components";
import YouTube, { YouTubeProps } from "react-youtube";
import HisoryComponent from "../component/HisoryComponent";
import { historyData } from "../../util";

const VideoBox = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid ${({ theme }) => theme.colors.endeavour};
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface histpryDescI {
  historyToggle: string;
}

const HistoryDesc = ({ historyToggle }: histpryDescI) => {
  const [loading] = useState(true);
  const opts: YouTubeProps["opts"] = {
    height: "560",
    width: "996",
    playerVars: {
      autoplay: 0,
    },
  };

  if (historyToggle === "1950") {
    return (
      <VideoBox>
        {loading && <Spinner />}
        <YouTube videoId="_jljlD2bwSw" opts={opts} />
      </VideoBox>
    );
  } else if (historyToggle === "1960") {
    return <HisoryComponent data={historyData[0]} />;
  } else if (historyToggle === "1970") {
    return <HisoryComponent data={historyData[1]} />;
  } else if (historyToggle === "1990") {
    return <HisoryComponent data={historyData[2]} />;
  } else if (historyToggle === "2000") {
    return <HisoryComponent data={historyData[3]} />;
  } else if (historyToggle === "2010") {
    return <HisoryComponent data={historyData[4]} />;
  } else if (historyToggle === "2020") {
    return <HisoryComponent data={historyData[5]} />;
  }
  return <div>{historyToggle}</div>;
};

export default HistoryDesc;
