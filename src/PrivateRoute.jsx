import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from './redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedin && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
