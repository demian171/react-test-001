import React from "react";
import './App.css';
import Header from './components/Headers/Header';
import Sidebar from "./components/Sidebar/Sidebar"
import Profile from "./components/Profile/Profile"

function App() {
    return (
        <div className="">
            <Header/>
            <div className="main-wrapper">
                <Sidebar/>
                <div className="main-content">
                    <Profile/>
                </div>
            </div>

        </div>
    );
}

export default App;
