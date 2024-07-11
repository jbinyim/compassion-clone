import React from "react";
import styled from "styled-components";

const HBannerBox = styled.div`
  width: 100%;
  height: 57px;
  background: ${({ theme }) => theme.colors.endeavour};
`;

const HBanner = styled.div`
  border: 1px solid #f00;
  max-width: 1200px;
  margin: 0 auto;
`;

const HBannerLeft = styled.div``;

const Header = () => {
  return (
    <div>
      <HBannerBox>
        <HBanner>
          <HBannerLeft>
            <p>Pray for Haiti</p>
            <p>아이티 어린이를 위해 기도해 주세요!</p>
            <button>자세히</button>
          </HBannerLeft>
          <div></div>
        </HBanner>
      </HBannerBox>
    </div>
  );
};

export default Header;
