import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Thing from '../dist';

const App = () => {
  return (
    <div>
      Test
      <Thing />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
