import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

export const inject =( parentElementId, props) => { 
  debugger;
  console.log(parentElementId);
  ReactDOM.render(<App {...props}/>, document.getElementById(parentElementId));
}

export const unmount = parentElementId =>
  ReactDOM.unmountComponentAtNode(document.getElementById(parentElementId));
