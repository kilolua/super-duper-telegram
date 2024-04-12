import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css';
import './styles/destyle.css';
import {MainPage} from "@/2-pages/mainPage";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainPage/>
    </React.StrictMode>,
)
