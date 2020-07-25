import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({
  color,
  size,
  onClick,
  disabled,
  className,
  children,
  ...props
}) => {
  return (
    <span
      {...props}
      onClick={disabled ? undefined : onClick}
      className={classnames(
        'text-white',
        'inline-block',
        'rounded',
        'transition-colors',
        'ease-in-out',
        'duration-300',
        'cursor-pointer',
        className,
        {
          'bg-teal-400 hover:bg-teal-300': color === 'primary',
          'bg-purple-400 hover:bg-purple-300': color === 'secondary',
          'bg-red-400 hover:bg-red-300': color === 'danger',
          'bg-yellow-400 hover:bg-yellow-300': color === 'warning',
          'bg-green-400 hover:bg-green-300': color === 'success',
          'text-sm px-2 h-6 leading-6': size === 'sm',
          'text-base px-3 h-8 leading-8': size === 'md',
          'text-lg px-4 h-10 leading-10': size === 'lg'
        }
      )}
    >
      {children}
    </span>
  );
};

Button.defaultProps = {
  color: 'primary',
  size: 'md',
  onClick: () => null,
  disabled: false,
  className: undefined
};

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'warning',
    'success'
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default Button;
