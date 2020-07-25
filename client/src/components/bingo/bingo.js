import React from 'react';
import BingoItem from './components/item';

const Bingo = () => {
  const card = [
    ['Item 1', 'Item 2 with a super long text', 'Item 3'],
    ['Item 4', 'Item 5', 'Item 6'],
    ['Item 7', 'Item 8 with longer text', 'Item 9']
  ];
  return (
    <table className='w-full'>
      {card.map((row) => (
        <tr>
          {row.map((item) => (
            <BingoItem>{item}</BingoItem>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Bingo;
