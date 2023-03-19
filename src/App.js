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
import {connect} from "react-redux";
import { initApp} from "./redux/auth-reducer";

import Preloader from "./components/Common/Preloader/Preloader";
import NavbarContainer from "./components/Navbar/NavbarContainer";


class App extends React.Component {
    componentDidMount() {
        this.props.initApp()
    }

    render() {
        if(!this.props.initSuccess){
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/friends' element={<Friends/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/login' element={<LoginPage/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

let mapsStateToProps =(state)=>{
    return {
    initSuccess: state.auth.initSuccess
}}
export default connect(mapsStateToProps, {initApp})(App);
