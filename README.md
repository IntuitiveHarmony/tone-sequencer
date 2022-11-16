# Tone-Sequencer

This project serves two purposes:
1. familiarize myself with [Tone.js](https://tonejs.github.io/)
2. familiarize myself with [Redux Toolkit](https://redux-toolkit.js.org/)

## Set Up Redux Toolkit


### Install redux and redux toolkit
In the root dir:
`npm i @reduxjs/toolkit react-redux`


### Set up the store
>This stores the state of the entire app

In the src directory add a folder called app

In the app directory create a file called store.js


Inside store.js
1. Add
```javaScript
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:
              {
       // This is where we will put our reducers later
    }
```

In index.js:
1. Import the store that we just created
2. Import Provider from react-redux
```javaScript
import { store } from './app/store';
import { Provider } from 'react-redux';
```
3. Wrap the App with the Provider and pass in the store
```javaScript
<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>
```
### Creating a slice
> This is where we define we will 'slice' the state objects into multiple slices of state and define reducer logic 

In the src directory add a folder called features

In the features folder add a folder that will contain your slice.  Name it someting that makes sense semanticly (what does it do?)

Add a file that is this folder name plus slice.js

Examples:
-[] /counter/counterSlice.js
-[x] /sequencer/sequencerSlice.js

In sequencerSlice.js
1. Import createSlice from @reduxjs/toolkit
```javaScript
import { createSlice } from '@reduxjs/toolkit'
```
2. Set an intitial state
```javaScript
const initialState = {
  row1: [null, null, null, null, null, null, null, null],
  row2: [null, null, null, null, null, null, null, null],
  row3: [null, null, null, null, null, null, null, null],
  row4: [null, null, null, null, null, null, null, null],
  row5: [null, null, null, null, null, null, null, null],
  row6: [null, null, null, null, null, null, null, null],
  row7: [null, null, null, null, null, null, null, null]
}
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



1. Change 
```javaScript
import ReactDOM from 'react-dom/client'`
```
> to 
```javaScript
import { createRoot } from 'react-dom/client'`
```









