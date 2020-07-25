import React from 'react';
import classnames from 'classnames';

const Heading = ({ size, className, children, ...props }) => {
  return (
    <p
      {...props}
      className={classnames(className, {
        [`text-${size}`]: size
      })}
    >
      {children}
    </p>
  );
};

export default Heading;
