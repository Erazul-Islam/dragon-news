import { useContext } from "react";
import { AuthContext } from "../firebase/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(location)

    if (loading) {
        <span className="loading loading-dots loading-lg"></span>
    }


    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;