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

const {createBrowserRouter} = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/service-details",
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/add-service",
                element: <AddService></AddService>
            },
            {
                path: "/my-reviews",
                element: <MyReviews></MyReviews>
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