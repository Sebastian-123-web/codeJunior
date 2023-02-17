import { useState } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom"

const PrivateRoute = ({ children }) => {
  const { state } = useLocation();

  const [ user, setUser ] = useState(state?.logged)

  return user ? children ? children : <Outlet/> : <Navigate to="/login" />
}

export default PrivateRoute
