import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderRoot = (state)=> {
    root.render(
        <React.StrictMode>
            <App store={state}/>
        </React.StrictMode>
    );
}
rerenderRoot(store); //(state.getState()) to try

/*subscribe(rerenderRoot);*/
store.subscribe(()=>rerenderRoot(store));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
