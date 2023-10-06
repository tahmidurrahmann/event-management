import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
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
                path : '/services/:id',
                element : <Service></Service>,
                loader : ()=> fetch('/event.json')
            }
        ]
    }
])

export default router;