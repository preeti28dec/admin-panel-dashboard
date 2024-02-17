"use client";
import React from "react";
import "./i18n";
import Navbar from "./ui/dashboard/navbar";
import Sidebar from "./ui/dashboard/sidebar";
import Footer from "./ui/dashboard/footer";
import RightSection from "./ui/dashboard/right-section";
import styled from "styled-components";
export default function ProviderView({ ...props }: any) {
  return (
      <MainContainer>
        <LeftContainer>
          <Sidebar />
        </LeftContainer>
        <RightContainer>
            <Navbar />
            <RightSection />
            <Footer />
        </RightContainer>
      </MainContainer>
  );
}
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const RightContainer = styled.div`
  width: 85%;
  height: 100vh;
  background:#f5f5f9;
`;

const LeftContainer = styled.div`
  width: 15%;
  height: 100vh;
  background: #fff;
`;
