import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../Main/Main";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import ChefsDetails from "../components/ChefsDetails/ChefsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../components/Blog/Blog";
import Chefs from "../components/Chefs/Chefs";

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
        },
        {
            path:'chef',
            element:<Chefs/>
        },
        {
            path:':chefs/:id',
            element: <PrivateRoute><ChefsDetails/></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/chefs/${params.id}`)
        },
        {
            path:'/blog',
            element:<Blog/>
        }
    ]
}

])

export default router