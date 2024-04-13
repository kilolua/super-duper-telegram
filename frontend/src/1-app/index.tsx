import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css';
import './styles/destyle.css';
import {Provider} from "react-redux";
import {store} from "@/1-app/store";
import {RouterProvider} from "react-router-dom";
import {router} from "@/1-app/router";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
    </React.StrictMode>,
)
