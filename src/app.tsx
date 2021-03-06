import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './components/greeting';
import './style/index.scss';

// Needed for Typescript hot module
declare let module: any


ReactDOM.render(
    <Greeting message = "Starter: React, Typescript, Sass, Styled-Components, Webpack, HMR, Jest, React-Testing-Library" />,
    document.getElementById('root')
);

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
 }