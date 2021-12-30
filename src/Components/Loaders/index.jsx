import propTypes from 'prop-types';
import React from 'react';
import BallTriangle from './BallTriangle';
import Bars from './Bars';
import CircleNotch from './CircleNotch';
import Puff from './Puff';
import HalfCircles from './HalfCircles';
import Spinner from './Spinner';
import ThreeDots from './ThreeDots';
import FillingBox from './FillingBox';
import CircularStripes from './CircularStripes';

const Loaders = ({ loader }) => {
  switch (loader) {
    case 'spinner':
      return <Spinner />;
    case 'circle-notch':
      return <CircleNotch />;
    case 'three-dots':
      return <ThreeDots />;
    case 'ball-triangle':
      return <BallTriangle />;
    case 'bars':
      return <Bars />;
    case 'puff':
      return <Puff />;
    case 'half-circles':
      return <HalfCircles />;
    case 'filling-box':
      return <FillingBox />;
    case 'circular-stripes':
      return <CircularStripes />;
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
