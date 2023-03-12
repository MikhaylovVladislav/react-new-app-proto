import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import LoginPage from './components/Login/Login'
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer />}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/friends' element={<Friends />}/>
                        <Route path='/users' element={<UsersContainer />}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<LoginPage />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
