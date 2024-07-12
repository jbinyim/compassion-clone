import React from "react";
import styled from "styled-components";
import main from "../img/home/banner/1.haiti_pc_fin.jpg";

const Container = styled.div`
  width: 100%;
  height: 856px;
  background: url(${main}) center/cover no-repeat;
`;

const Home = () => {
  return <Container></Container>;
};

export default Home;
