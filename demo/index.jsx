import React, { useState } from 'react';
import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import Button from '../dist';
import './style.scss';

const App = () => {
  const [loading, setloading] = useState(true);

  const toggleLoading = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  };

  return (
    <div className="main-container">
      <div>
        <Button onClick={toggleLoading} loading={loading}>
          Primary Spinner
        </Button>

        <Button
          onClick={toggleLoading}
          loading={loading}
          buttonType="secondary"
          loader="circle-notch"
        >
          Secondary Circle-Notch
        </Button>

        <Button
          onClick={toggleLoading}
          loading={loading}
          buttonType="danger"
          loader="three-dots"
        >
          Danger Three-Dots
        </Button>

        <Button
          onClick={toggleLoading}
          loading={loading}
          buttonType="success"
          loader="ball-triangle"
        >
          Success Ball-Triangle
        </Button>

        <Button
          onClick={toggleLoading}
          loading={loading}
          buttonType="warning"
          loader="bars"
        >
          Warning Bars
        </Button>
        <Button
          onClick={toggleLoading}
          loading={loading}
          buttonType="info"
          loader="half-circles"
        >
          Info Half-Circles
        </Button>
        <Button
          onClick={toggleLoading}
          loading={loading}
          buttonType="light"
          loader="puff"
        >
          Light Puff
        </Button>
        <Button
          onClick={toggleLoading}
          loading={loading}
          buttonType="dark"
          loader="filling-box"
        >
          Dark Filling-Box
        </Button>
        <Button
          onClick={toggleLoading}
          loading={loading}
          buttonType="glass"
          loader="circular-stripes"
        >
          Glass Circular-Stripes
        </Button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
