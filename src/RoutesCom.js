import { Navigate, NavigationType, useRoutes } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/NavItems/About";
import Signup from "./component/NavItems/Signup";

import ProtectedLayout from "./component/Layout/ProtectedLayout";
import UnprotectedLayout from "./component/Layout/UnprotectedLayout";
import Contact from "./component/NavItems/Contact";
import Login from './component/NavItems/Login';


export function RoutesComp () {

 const isLoggedin = true;

    return useRoutes([
 
        {   
            path: "/",element: isLoggedin ? ( <Navigate to="/login"  replace/>) :  (<ProtectedLayout/>),


            
            children:[
                { path: "/about", element: <About /> },
                { path: "/", element: <Login/> },
                    ]
        },

        {   
            path: "/",element: isLoggedin ?  ( <Navigate to="/"  replace/>) : (<UnprotectedLayout/>) ,


            children:[
                { path: "/about", element: <About /> },
                
                { path: "/conatct", element: <Contact /> },
               
                { path: "/signup", element: <Signup/> },
                    ]
        }
     
    ])
        
}