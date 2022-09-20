import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Headers/Header';
import Sidebar from "./components/Sidebar/Sidebar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"

function App(props) {

    return (
        <div className="app">
            <Header/>
            <div className="app-wrapper">
                <Sidebar/>
                <div className="app-content">
                    <Routes>
                        <Route path='/profile/*'
                               element={<Profile profilePage={props.state.profilePage}
                                                 dispatch={props.dispatch}
                               />
                               }/>
                        <Route path='/dialogs/*'
                               element={<Dialogs state={props.state.messagesPage}
                                                 dispatch={props.dispatch}
                               />}/>
                    </Routes>
                </div>
            </div>

        </div>
    );
}

export default App;
