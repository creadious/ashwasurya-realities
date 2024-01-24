import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { admin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingAnimation />;
  }

  if (admin) {
    return children;
  } else {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
