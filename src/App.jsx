import { useContext, useEffect } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { UserContext } from './contexts/UserContext';
import Router from './Router';

export default function App() {
  const { setIsAuthenticated, setIsAdmin } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  const loadUser = async () => {
    try {
      const response = await fetch('http://13.233.86.88:8000/api/users/me', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user information');
      }

      const userData = await response.json();

      setUser(userData);
      console.log(userData);
      if (userData.role === 'ADMIN') setIsAdmin(() => true);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error:', error.message);
      setIsAuthenticated(false);
      setIsAdmin(() => false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <Router />
    </div>
  );
}
