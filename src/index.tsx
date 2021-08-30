import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import './index.css';
import {pathToRegexp} from 'path-to-regexp'
const regx = pathToRegexp('/home', [], {end: false});
console.log(regx); // /^\/home\/?(?=\/|$)/i
console.log(regx.test('/home'));
console.log(regx.test('/home/'));
console.log(regx.test('/home//'));
console.log(regx.test('/home/2'));

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

