# Tone-Sequencer

This project serves two purposes:
1. familiarize myself with [Tone.js](https://tonejs.github.io/)
2. familiarize myself with [Redux Toolkit](https://redux-toolkit.js.org/)

## Set Up Redux Toolkit

In the root dir:
`npm i @reduxjs/toolkit`

In index.js:
1. Change 
```javaScript
import ReactDOM from 'react-dom/client'`
```
> to 
```javaScript
import { createRoot } from 'react-dom/client'`
```

2. Add 
```javaScript
import { Provider } from 'react-redux';
import { store } from './app/store';
```

3. Change 
```javaScript
const root = ReactDOM.createRoot(document.getElementById('root'));
```
> to
```javaScript
const container = document.getElementById('root');
const root = createRoot(container);
```
4. Wrap the `<App />` element with `<Provider store{store}>`
```javaScript
<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>
```
5. The end result should look like this:
```javaScript
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```












