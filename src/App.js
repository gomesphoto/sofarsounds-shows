import React, { Component } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        Hello World
      </StyledApp>
    );
  }
}

export default App;
