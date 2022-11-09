import Main from "../layouts/Main";
import AddService from "../pages/AddService";
import Blog from "../pages/Blog";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyReviews from "../pages/MyReviews";
import Registration from "../pages/Registration";
import ReviewsUpdate from "../pages/ReviewsUpdate";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";
import PrivateRoute from "./PrivateRoute";

const {createBrowserRouter} = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch("http://localhost:5000/services3"),
                element: <Home></Home>
            },
            {
                path: "/services",
                loader: () => fetch("http://localhost:5000/services"),
                element: <Services></Services>
            },
            {
                path: "/services/:id",
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/add-service",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/my-reviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: "/reviews-update",
                element: <ReviewsUpdate></ReviewsUpdate>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;