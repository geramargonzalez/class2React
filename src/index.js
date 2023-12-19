import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js'

const rootDivElement = document.getElementById('root');

const root = ReactDom.createRoot(rootDivElement);

root.render(<App/>);
