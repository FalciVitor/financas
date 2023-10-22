import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));

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

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
