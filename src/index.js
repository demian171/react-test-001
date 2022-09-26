//import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {BrowserRouter} from "react-router-dom";
// import './index.css';
import reportWebVitals from './reportWebVitals';
 // import store from './redux/store';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import StoreContext from "./StoreContext";

//addPost('SelfTest')
const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderMainTree = (state) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                <App/>
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );

}

renderMainTree(store.getState());
store.subscribe( () => {
    let state = store.getState();
    renderMainTree(state);
} );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
