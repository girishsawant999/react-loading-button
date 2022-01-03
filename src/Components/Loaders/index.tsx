import React, { lazy, Suspense } from 'react';

const BallTriangle = lazy(() => import(/* webpackChunkName: "BallTriangle" */ './BallTriangle'));
const Bars = lazy(() => import(/* webpackChunkName: "Bars" */ './Bars'));
const Puff = lazy(() => import(/* webpackChunkName: "Puff" */ './Puff'));
const HalfCircles = lazy(() => import(/* webpackChunkName: "HalfCircles" */ './HalfCircles'));
const FillingBox = lazy(() => import(/* webpackChunkName: "FillingBox" */ './FillingBox'));
const CircularStripes = lazy(
  () => import(/* webpackChunkName: "CircularStripes" */ './CircularStripes')
);
const Spinner = lazy(() => import(/* webpackChunkName: "Spinner" */ './Spinner'));
const CircleNotch = lazy(() => import(/* webpackChunkName: "CircleNotch" */ './CircleNotch'));
const ThreeDots = lazy(() => import(/* webpackChunkName: "ThreeDots" */ './ThreeDots'));

interface ILoaderProps {
  loader: string;
}
const Loaders: React.FC<ILoaderProps> = ({ loader }) => {
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

const withSuspense = (Component: React.FC<ILoaderProps>): React.FC<ILoaderProps> => {
  const SuspenseComponent = (props: ILoaderProps): JSX.Element => (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );

  return SuspenseComponent;
};

export default withSuspense(Loaders);
