import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Service from "../pages/Service/Service";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=> fetch('/event.json')
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            },
            {
                path : '/services/:id',
                element : <PrivateRoute><Service></Service></PrivateRoute>,
                loader : ()=> fetch('/event.json')
            }
        ]
    }
])

export default router;