import React from "react";
import styled from "styled-components";
import Banner from "../components/slides/Banner";
import bannerImg from "../img/member/bg_join_banner.png";
import bannerResImg from "../img/member/bg_join_banner_mob.png";
import MemberFooter from "../components/footers/MemberFooter";

const Container = styled.div``;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const Title = styled.h4`
  font-size: 16px;
  margin: 100px 0 50px;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 24px;
  padding: 24px;
  max-width: 586px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.blackSqueeze2};
  box-sizing: border-box;
  cursor: pointer;
`;

const Img = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 15px;
`;

const BoldText = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 13px;
  letter-spacing: -1px;
`;

const KakoBox = styled.div`
  max-width: 586px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1d100;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const KakoText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 48px;
`;

const Member = () => {
  return (
    <Container>
      <Banner
        image={bannerImg}
        resImg={bannerResImg}
        title="회원가입"
        text="컴패션 회원가입을 환영합니다!"
      />
      <Inner>
        <Title>
          회원유형에 따라 가입절차가 상이합니다.
          <br />
          해당하는 회원유형을 선택하여 진행해주시기 바랍니다.
        </Title>
        <Box>
          <Img
            src="https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/ico_individual.png"
            alt="onlymember"
          />
          <div>
            <BoldText>개인 회원</BoldText>
            <Text>일반 개인 또는 14세 미만의 개인</Text>
          </div>
        </Box>
        <Box>
          <Img
            src="https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/ico_group.png"
            alt="onlymember"
          />
          <div>
            <BoldText>기업/단체 회원</BoldText>
            <Text>
              사업자등록번호가 있는 기업 또는
              <br />
              사업자등록번호가 없는 단체,교회부서 또는 모임
            </Text>
          </div>
        </Box>
        <Box>
          <Img
            src="https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/ico_church.png"
            alt="onlymember"
          />
          <div>
            <BoldText>교회 회원</BoldText>
            <Text>
              사업자등록번호 또는 고유등록번호가 있는 교회 (교회 당 1계정만 생성
              가능)
            </Text>
          </div>
        </Box>
        <KakoBox>
          <Icon
            src="https://www.compassion.or.kr/resources/fo/compassion/assets/images/common/ico_kakao_24.png"
            alt="kako"
          />
          <KakoText>카카오계정 로그인</KakoText>
        </KakoBox>
      </Inner>
      <MemberFooter />
    </Container>
  );
};

export default Member;
