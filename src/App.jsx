import { useContext, useEffect } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Router from './Router';
import { loadUser } from './apis/loadUser';
import { Navigate } from 'react-router-dom';

export default function App() {
  const { setIsAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    const data = loadUser();
    if (data) {
      setIsAuthenticated(true);
    } else {
      <Navigate to={'/auth'} />;
    }
  });
  return (
    <div>
      <Router />
    </div>
  );
}
