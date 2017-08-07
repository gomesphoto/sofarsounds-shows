import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, transitions } from '../styles';

const StyledMenu = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  border: 1px solid rgb(${colors.green});
  border-radius: 2px;
`;

const StyledMenuItem = styled.div`
  border-right: 1px solid rgb(${colors.green});
  background: ${({ selected }) => selected ? `rgb(${colors.green})` : `rgb(${colors.white})`};
  color: ${({ selected }) => selected ? `rgb(${colors.white})` : `rgb(${colors.green})`};
  width: 100%;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${transitions.base};
  &:nth-last-child(1) {
    border: none;
  }
  &:hover {
    background: ${({ selected }) => !selected ? `rgba(${colors.green}, 0.1)` : `rgb(${colors.green})`};
  }
`;

const Menu = ({ genre, onSelectGenre,...otherProps }) => (
  <StyledMenu {...otherProps}>
    <StyledMenuItem
      onClick={() => onSelectGenre("rock")}
      selected={genre === "rock"}
    >
      ROCK
    </StyledMenuItem>
    <StyledMenuItem
      onClick={() => onSelectGenre("folk")}
      selected={genre === "folk"}
    >
      FOLK
    </StyledMenuItem>
    <StyledMenuItem
      onClick={() => onSelectGenre("jazz")}
      selected={genre === "jazz"}
    >
      JAZZ
    </StyledMenuItem>
    <StyledMenuItem
      onClick={() => onSelectGenre("all")}
      selected={genre === "all"}
    >
      ALL
    </StyledMenuItem>
  </StyledMenu>
);

Menu.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Menu;
