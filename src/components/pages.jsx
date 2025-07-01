
import {Navigate} from "react-router-dom";
import LogIn from "./logIn/LogIn.jsx";
import Home from "./home/Home.jsx";

export  const loginPage = "/login"
export  const homePage ="/"


export const publicPages = [
    {
        path:loginPage,
        element: <LogIn/>
    },
    {
        path:"*",
        element: <Navigate to={loginPage}/>
    }
]


export const privatePages = [
    {
        path:homePage,
        element: <Home/>
    },
    {
        path:"*",
        element: <Navigate to={homePage}/>
    }
]



