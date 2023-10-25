import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages/app';

const styles = {
  body: {
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },
  code: {
    fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`
  }
};

document.body.style = styles.body;

const codeElements = document.querySelectorAll('code');
codeElements.forEach(element => {
  Object.assign(element.style, styles.code);
});

const root = createRoot(document.getElementById('root'));
root.render( <App />);
