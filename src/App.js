import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import Header from './components/Headers/Header';
import Sidebar from "./components/Sidebar/Sidebar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"

function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <div className="app-wrapper">
                    <Sidebar/>
                    <div className="app-content">
                        <Routes>
                            <Route path='/profile/*' element={<Profile state={props.state.profilePage}/>}/>
                            <Route path='/dialogs/*' element={<Dialogs state={props.state.messagesPage}/>}/>
                        </Routes>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
