import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../Main/Main";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
{
    path:'/',
    element:<Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
           path:'register',
           element:<Register/>
        },
        {
            path:'login',
            element:<Login/>
        }
    ]
}
])

export default router