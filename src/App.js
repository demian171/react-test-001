// import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Headers/Header';
import Sidebar from "./components/Sidebar/Sidebar"
import Profile from "./components/Profile/Profile"
import Home from "./components/Home/Home";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    // debugger
    return (
        <div className="app">
            <Header/>
            <div className="app-wrapper">
                <Sidebar/>
                <div className="app-content">
                    <Routes>
                        <Route path='/' element={<Home/>}/>

                        <Route path='/profile/*' element={<Profile /> }/>
                        <Route path='/dialogs/*' element={<DialogsContainer />}/>
                        <Route path='/users/*' element={<UsersContainer />}/>
                    </Routes>
                </div>
            </div>

        </div>
    );
}

export default App;
