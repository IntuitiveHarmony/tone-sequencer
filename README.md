# Tone-Sequencer

This project serves two purposes:
1. familiarize myself with [Tone.js](https://tonejs.github.io/)
2. familiarize myself with [Redux Toolkit](https://redux-toolkit.js.org/)

## Set Up Redux Toolkit

In the root dir:
`npm i @reduxjs/toolkit`

In index.js:
1. Change `import ReactDOM from 'react-dom/client'` to `import { createRoot } from 'react-dom/client'`
2. Add 
```javaScript
import { Provider } from 'react-redux';
import { store } from './app/store';
```

