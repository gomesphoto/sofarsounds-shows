import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from '../assets/img/arrow.svg';
import { randomID } from '../helpers/utilities';
import { colors, fonts, transitions } from '../styles';

const StyledShowsList = styled.div`
  width: 100%;
`;

const StyledShow = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  border: 1px solid rgb(${colors.grey});
  border-radius: 2px;
  display: flex;
`;

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    line-height: 1;
  }
`;

const StyledDate = styled(StyledLabel)`
  width: 10%;
  border-right: 1px solid rgb(${colors.grey});
  justify-content: center;
  align-items: center;
`;

const StyledEvent = styled(StyledLabel)`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: ${transitions.base};
  &:hover {
    background: rgba(${colors.grey}, 0.15);
  }
`;

const StyledDay = styled.div`
  font-size: ${fonts.h3};
`;

const StyledMonth = styled.div`
  font-size: ${fonts.small};
  font-weight: 900;
`;

const StyledWeekday = styled.div`
  font-size: ${fonts.h6};
  color: rgb(${colors.grey});
`;

const StyledLocation = styled.div`
  font-size: ${fonts.large};
  font-weight: 900;
  margin-top: 2px;
`;

const StyledArrow = styled.img`
  height: 20px;
  position: absolute;
  top: calc(50% - 10px);
  right: 10px;
`;

const ShowsList = ({ shows, ...otherProps }) => (
  <StyledShowsList {...otherProps}>
    {shows.map(show => (
      <StyledShow key={randomID()}>
        <StyledDate>
          <StyledDay>{show.date.dayOfMonth}</StyledDay>
          <StyledMonth>{show.date.month.toUpperCase()}</StyledMonth>
        </StyledDate>
        <StyledEvent>
          <StyledWeekday>
            {show.date.dayOfWeek.toUpperCase()}
          </StyledWeekday>
          <StyledLocation>
            {show.location}
          </StyledLocation>
        </StyledEvent>
        <StyledArrow src={arrow} alt="link" />
      </StyledShow>
    ))}
  </StyledShowsList>
);

ShowsList.propTypes = {
  shows: PropTypes.array.isRequired
}

export default ShowsList;
