import React from 'react';

const BingoItem = ({ children }) => {
  return (
    <td>
      <div className='text-center'>{children}</div>
    </td>
  );
};

export default BingoItem;
