import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../pages/provider/AuthProvider";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(!user){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to log in first to view details!',
          })
    }

    const location = useLocation();
    if (loading) {
        return (
            <progress className="progress w-56"></progress>
        );
    }
    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;