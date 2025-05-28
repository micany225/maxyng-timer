import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import App from "./App";

ReactDom.render(
  <React.StictMode>
    <App /> 
  </React.StictMode>,
  document.getElementById('root')
);