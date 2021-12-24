import React, { useState } from 'react';
import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import Button from '../src';

const App = () => {
  const [loading, setloading] = useState(false);

  const toggleLoading = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  };

  return (
    <div>
      <Button onClick={toggleLoading} loading={loading}>
        Hello World
      </Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
