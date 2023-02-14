import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
    /*let messagesData = [
        {id: 0, messageText: 'Когда 100 рублей вернешь'},
        {id: 1, messageText: 'Пошли за вискасом'},
        {id: 2, messageText: 'Кабель'}
    ];

    let dialogsData = [{id: 0, name: 'Rijik'},
        {id: 1, name: 'Belosnejka'},
        {id: 2, name: 'Marusya'}
    ];*/
   /* let postData = [
        {id: 0, postText: 'Excuse me bro', countLike: '27'},
        {id: 0, postText: 'Excuse ... i am not you bro', countLike: '19'}
    ];*/
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile postData={props.postData}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dD={props.dD} mD={props.mD}/>}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
