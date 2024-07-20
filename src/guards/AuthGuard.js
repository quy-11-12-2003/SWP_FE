import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// hooks
import { selectAuthData } from "../app/redux/auth/authSlice";
import { PATH_AUTH } from "../routes/paths";
// ----------------------------------------------------------------------

export default function AuthGuard({ children, redirectTo = `/`, ...props }) {
  // Select auth data from the store
  const authData = useSelector((state) => selectAuthData(state));
  //  navigate to root dashboad
  const { isAuthenticated } = authData;
  if (isAuthenticated) {
    return children;
  }
  // navigate to children components
  return <Navigate to={PATH_AUTH.login} />;
}
