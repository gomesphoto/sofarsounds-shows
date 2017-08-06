import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.svg';
import header from '../assets/img/header.jpg';
import { colors, responsive } from '../styles';

const StyledHeader = styled.div`
  background-color: rgb(${colors.dark});
  ${({ background }) => background && `background-image: url(${background})`};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33vw;
  @media (${responsive.sm.min}) {
    height: 20vw;
  }
`;

const StyledTitle = styled.h1`
  font-weight: 800;
  color: rgb(${colors.white});
`;

const StyledLogo = styled.img`
  width: 100px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Header = () => (
  <StyledHeader background={header}>
    <StyledLogo src={logo} alt="Sofar Sounds" />
    <StyledTitle>{'Find a Show!'}</StyledTitle>
  </StyledHeader>
);

export default Header;
