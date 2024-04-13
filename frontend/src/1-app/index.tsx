import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css';
import './styles/destyle.css';
import {MainPage} from "@/2-pages/mainPage";
import {Provider} from "react-redux";
import {store} from "@/1-app/store";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <MainPage/>
        </Provider>
    </React.StrictMode>,
)
