import React from 'react';
import './styles/main.css';
import Header from './layout/header';
import Container from './layout/container';
import Bingo from './components/bingo';

function App() {
  return (
    <div className='App'>
      <Header />
      <Container>
        <Bingo />
      </Container>
    </div>
  );
}

export default App;
