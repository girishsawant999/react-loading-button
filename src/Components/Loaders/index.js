import propTypes from 'prop-types';
import React from 'react';
import CircleNotch from './CircleNotch';
import Spinner from './Spinner';

const Loaders = ({ loader }) => {
  switch (loader) {
    case 'spinner':
      return <Spinner />;
    case 'circle-notch':
      return <CircleNotch />;
    default:
      return <Spinner />;
  }
};

Loaders.defaultProps = {
  loader: 'spinner',
};

Loaders.propTypes = {
  loader: propTypes.string.isRequired,
};

export default Loaders;
