import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export default function useAuth() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setIsAuthenticated } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext);
  const API_URI = 'http://localhost:8080/api/auth';
  const navigate = useNavigate();

  const fetchUserData = async (
    username,
    password,
    email = '',
    endpoint,
    role = 'USER'
  ) => {
    const api = endpoint === 'login' ? '/login' : '/register';

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_URI}${api}`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ username, password, email, role }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data);
        setIsAuthenticated(true);
        navigate('/');
      } else {
        setError(data.message || 'Authentication failed');
        setIsAuthenticated(false);
      }
    } catch (error) {
      setError(error.message || 'Something went wrong');
      console.error('Auth Error:', error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchUserData };
}
