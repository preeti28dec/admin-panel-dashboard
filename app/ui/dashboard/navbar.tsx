import styled from "styled-components";
import React from "react";
import Language from "./rightContainer/header/language";
export default function Navbar() {
  return (
    <NavContainer>
      <div className="flex justify-center items-center">
        <Language />
      </div>
    </NavContainer>
  );
}
const NavContainer = styled.div`
  width: 97%;
  background: #fff;
  margin: 16px auto;
  padding: 15px;
  border-radius: 9px;
`;
