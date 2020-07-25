import React from 'react';
import Heading from '../heading';
import Container from '../container';

const Header = () => {
  return (
    <header className='bg-teal-300 text-white leading-10 py-2'>
      <Container>
        <Heading size='2xl'>Photography Bingo</Heading>
      </Container>
    </header>
  );
};

export default Header;
