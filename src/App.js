import React from "react";
import './App.css';
import Header from './components/Headers/Header';
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
        </div>
    );
}

export default App;
