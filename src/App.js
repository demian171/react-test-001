// import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Headers/Header';
import Sidebar from "./components/Sidebar/Sidebar"
import Profile from "./components/Profile/Profile"
// import Dialogs from "./components/Dialogs/Dialogs"
import Home from "./components/Home/Home";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

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

                        <Route path='/profile/*' element={<Profile store={props.store}/> }/>
                        <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />}/>
                    </Routes>
                </div>
            </div>

        </div>
    );
}

export default App;
