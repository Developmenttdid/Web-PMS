import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // Check for token

  if (!token) {
    return <Navigate to="/" replace />; // Redirect to login if no token
  }

  return <Outlet />; // Allow access if token exists
};

export default ProtectedRoute;
