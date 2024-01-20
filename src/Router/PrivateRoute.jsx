import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { admin, loading } = useAuth();

    if (loading) {
        return <LoadingAnimation />
    }

    if (admin) {
        return children;
    }
    else {
        return <Navigate to='/admin/login' replace />
    }



};

export default PrivateRoute;