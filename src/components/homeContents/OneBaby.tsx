import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { ChildI, getBabyInfo } from "../../api";

const OneBabyContainer = styled.div`
  position: relative;
  height: 716px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const OneBaby = () => {
  const { data, isLoading } = useQuery<ChildI[]>({
    queryKey: ["babyInfo"],
    queryFn: getBabyInfo,
  });

  if (isLoading) {
    console.log("loading");
  } else {
    console.log(data);
  }

  return (
    <OneBabyContainer>
      <Inner>
        <div>
          <h3>1:1 어린이양육</h3>
        </div>
        <div></div>
      </Inner>
    </OneBabyContainer>
  );
};

export default OneBaby;
