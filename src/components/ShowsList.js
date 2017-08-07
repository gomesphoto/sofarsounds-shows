import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { randomID } from '../helpers/utilities';

const StyledShowsList = styled.div`
  width: 100%;
`;

const StyledShow = styled.div`
  width: 100%;
`;

const ShowsList = ({ shows, ...otherProps }) => (
  <StyledShowsList {...otherProps}>
    {shows.map(show => (
      <StyledShow key={randomID()}>
        {show.location}
      </StyledShow>
    ))}
  </StyledShowsList>
);

ShowsList.propTypes = {
  shows: PropTypes.array.isRequired
}

export default ShowsList;
