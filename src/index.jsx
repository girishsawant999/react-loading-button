import propTypes from 'prop-types';
import React from 'react';
import { CircleNotchSolid } from './Components/Loaders';
import './style.scss';

const When = ({ isTrue, children }) => {
  if (!isTrue) return null;
  return children;
};

const removeProps = (props, ...args) => {
  const newProps = { ...props };
  args.forEach((arg) => {
    delete newProps[arg];
  });
  return newProps;
};

const classes = (...args) => args.join(' ').trim();

const Button = function (props) {
  const { children, disabled, loading, buttonType, className } = props;
  const buttonProps = removeProps(
    props,
    'children',
    'disabled',
    'loading',
    'buttonType',
    'className',
  );

  return (
    <button
      disabled={disabled || loading}
      className={classes(buttonType, className)}
      {...buttonProps}
    >
      <When isTrue={loading}>
        <span>
          <CircleNotchSolid />
        </span>
      </When>
      <span>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  loading: false,
  disabled: false,
  buttonType: 'primary',
};

Button.propTypes = {
  children: propTypes.node.isRequired,
  loading: propTypes.bool,
  disabled: propTypes.bool,
  buttonType: propTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'success',
    'warning',
    'info',
    'light',
    'dark',
    'glass',
  ]),
};

export default Button;
