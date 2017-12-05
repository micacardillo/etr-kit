import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

window.onerror = function (msg, url, lineNo, columnNo, error) {
  // ... handle error ...
  console.log('windows error', msg, url, lineNo, columnNo, error);
};

render(<App />, document.getElementById('root'));
