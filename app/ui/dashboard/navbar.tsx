import styled from 'styled-components';
import ThemeSwitch from './rightContainer/header/theme-switch'
import React from 'react'
import Language from './rightContainer/header/language';
export default function Navbar() {
  return (
    <NavContainer>      
        <ThemeSwitch/>
        <Language/>
    </NavContainer>
  )
}
const NavContainer = styled.div`
  width: 97%;
  background: #fff;
  margin: 16px auto;
  padding: 15px;
  border-radius: 9px;
`;