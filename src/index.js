import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id: 0, postText: 'Excuse me bro', countLike: '27'},
    {id: 0, postText: 'Excuse ... i am not you bro', countLike: '19'}
];

let messagesData = [
    {id: 0, messageText: 'Когда 100 рублей вернешь'},
    {id: 1, messageText: 'Пошли за вискасом'},
    {id: 2, messageText: 'Кабель'}
];

let dialogsData = [{id: 0, name: 'Rijik'},
    {id: 1, name: 'Belosnejka'},
    {id: 2, name: 'Marusya'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dD={dialogsData} mD={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
