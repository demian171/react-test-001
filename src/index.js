//import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {BrowserRouter} from "react-router-dom";
// import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";

//addPost('SelfTest')
const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderMainTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );

}

subscribe(renderMainTree);

renderMainTree(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
