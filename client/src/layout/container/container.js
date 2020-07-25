import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Container = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={classnames('container', 'mx-auto', 'px-6', className)}
    >
      {children}
    </div>
  );
};

export default Container;
