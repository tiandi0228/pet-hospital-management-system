import {useRoutes} from "react-router-dom";
import Home from '@/views/Home';
import Login from '@/views/Login';
import Setting from '@/views/Setting';

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/setting",
            element: <Setting/>,
        }
    ]);
}