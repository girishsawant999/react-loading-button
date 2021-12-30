import propTypes from 'prop-types';
import React, { lazy, Suspense } from 'react';

const BallTriangle = lazy(() =>
  import(/* webpackChunkName: "BallTriangle" */ './BallTriangle'),
);
const Bars = lazy(() => import(/* webpackChunkName: "Bars" */ './Bars'));
const Puff = lazy(() => import(/* webpackChunkName: "Puff" */ './Puff'));
const HalfCircles = lazy(() =>
  import(/* webpackChunkName: "HalfCircles" */ './HalfCircles'),
);
const FillingBox = lazy(() =>
  import(/* webpackChunkName: "FillingBox" */ './FillingBox'),
);
const CircularStripes = lazy(() =>
  import(/* webpackChunkName: "CircularStripes" */ './CircularStripes'),
);
const Spinner = lazy(() =>
  import(/* webpackChunkName: "Spinner" */ './Spinner'),
);
const CircleNotch = lazy(() =>
  import(/* webpackChunkName: "CircleNotch" */ './CircleNotch'),
);
const ThreeDots = lazy(() =>
  import(/* webpackChunkName: "ThreeDots" */ './ThreeDots'),
);

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

const withSuspense = (Component) => (props) =>
  (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );

export default withSuspense(Loaders);
