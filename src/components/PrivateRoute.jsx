// PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  console.log("isLoggedIn:", isLoggedIn); // Додано для перевірки стану

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
