import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// hooks
import { selectAuthData } from '../app/redux/auth/authSlice'
// ----------------------------------------------------------------------

/**
 * This guard will direct to dashboad 
 * if this account has been authendicated
 * @param {} Components 
 * @returns 
 */
export default function GuestGuard({ children, redirectTo = `/`, ...props }) {
  // Select auth data from the store
  const authData = useSelector(state => selectAuthData(state));
  //  navigate to root dashboad
  const { isAuthenticated } = authData;
  if (isAuthenticated) {
    return <Navigate to={redirectTo} {...props} />;
  }
  // navigate to children components
  return <>{children}</>;
}
