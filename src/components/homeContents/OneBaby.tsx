import React from "react";
import styled from "styled-components";

const OneBabyContainer = styled.div`
  position: relative;
  height: 716px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const OneBaby = () => {
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
