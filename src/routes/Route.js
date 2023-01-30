import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Services from "../pages/services/Services";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

export const route = createBrowserRouter([
    {
        path: '/', 
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    }
])