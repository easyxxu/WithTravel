import React from "react";
import styled from "styled-components";
import Japan from "../assets/japan.jpg";
const BannerContainer = styled.div`
  position: relative;
`;
const BannerImg = styled.img`
  width: 100%;
  height: 450px;
  object-fit: center;
`;
const BannerExplain = styled.p`
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  font-size: 30px;
  font-family: var(--base--font);
`;
const BannerLink = styled.a`
  position: absolute;
  right: 30px;
  bottom: 30px;
  color: #e3eaf4;
  font-size: 62px;
  font-family: var(--point--font);
`;
export default function Banner() {
  return (
    <BannerContainer>
      <BannerImg src={Japan} alt="japan" />
      <BannerExplain>위드트래블과 함께 여행 계획을 세워볼까요?</BannerExplain>
      <BannerLink href="#">japan</BannerLink>
    </BannerContainer>
  );
}
