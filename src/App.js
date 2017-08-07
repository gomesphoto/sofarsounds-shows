import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Menu from './components/Menu';
import ShowsList from './components/ShowsList';
import showsData from './assets/data/shows.json';

const StyledApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  padding: 20px;
  margin: 0 auto;
`;

class App extends Component {
  state = {
    genre: 'all',
    shows: showsData
  }
  onSelectGenre = (genre) => {
    let shows = showsData;
    if (genre !== 'all') shows = showsData.filter(show => show.genre === genre);
    this.setState({ genre, shows });
  }
  render() {
    return (
      <StyledApp>
        <Header />
        <StyledMain>
          <Menu genre={this.state.genre} onSelectGenre={this.onSelectGenre} />
          <ShowsList shows={this.state.shows} />
        </StyledMain>
      </StyledApp>
    );
  }
}

export default App;
