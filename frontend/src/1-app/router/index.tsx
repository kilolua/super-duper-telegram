import {createHashRouter, createRoutesFromElements, Route} from "react-router-dom";
import {MainPage} from "@/2-pages/mainPage";
import {CurrentChat} from "@/3-widgets/CurrentChat";

export const router = createHashRouter(createRoutesFromElements(
    <>
       <Route path='/' element={<MainPage/>}>
           <Route path='chat' element={<CurrentChat/>}></Route>
       </Route>
    </>
))