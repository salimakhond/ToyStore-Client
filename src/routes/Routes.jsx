import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddAToy from "../pages/AddAToy/AddAToy";
import ToysDetails from "../pages/ToysDetails/ToysDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToys from "../pages/UpdateToys/UpdateToys";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'addAToy',
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>

            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'updateToys/:id',
                element: <UpdateToys></UpdateToys>,
                loader: ({ params }) => fetch(`http://localhost:5000/product-by-id/${params.id}`)
            },
            {
                path: 'toysDetails/:id',
                element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/product-by-id/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>,
            }

        ]
    },
]);

export default router;