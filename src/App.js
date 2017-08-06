import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;


const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header />
        <StyledMain>
          Hello World
        </StyledMain>
      </StyledApp>
    );
  }
}

export default App;
