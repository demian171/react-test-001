import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import state from './redux/state';
import {addPost, updateNewPostText} from "./redux/state";

//addPost('SelfTest')
let root = ReactDOM.createRoot(document.getElementById('root'));

export let renderMainTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );

}
// renderMainTree();
