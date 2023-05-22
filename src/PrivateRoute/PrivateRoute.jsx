import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { HashLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation()
  if (loader) {
    return (
      <HashLoader
        color="#FF3811"
        className="min-h-screen min-w-full"
        cssOverride={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        speedMultiplier={1}
      />
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;
