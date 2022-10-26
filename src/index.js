import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderMainTree = () => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );

}

renderMainTree();
store.subscribe( () => {
    renderMainTree();
} );

