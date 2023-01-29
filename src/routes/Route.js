import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Services from "../pages/Services";

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

        ]
    }
])