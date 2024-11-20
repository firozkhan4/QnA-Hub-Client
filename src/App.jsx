import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Router from './Router';
import { UserContext } from './contexts/UserContext';

export default function App() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState(null);

  const loadUser = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/users/me', {
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
      console.log('User Information:', userData);

      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error:', error.message);
      setIsAuthenticated(false);
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
