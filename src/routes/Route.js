const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

export const route = createBrowserRouter([
    {
        path: '/', 
        element:<Main></Main>
    }
])