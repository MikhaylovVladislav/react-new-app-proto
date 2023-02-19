import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderRoot = (store)=> {
    root.render(
        <React.StrictMode>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}
rerenderRoot(state); //(state.getState()) to try

/*subscribe(rerenderRoot);*/
state.subscribe(rerenderRoot);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
