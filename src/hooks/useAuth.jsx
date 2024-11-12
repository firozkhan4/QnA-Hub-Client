import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function useAuth({ username, password }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setIsAuthenticated } = useContext(AuthContext);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:8080/api/auth/login',
        { username, password },
        { withCredentials: true }
      );

      if (response.status === 200 && response.data) {
        setUser(response.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      setError(error.message);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  fetchUserData();

  return { user, loading, error };
}
