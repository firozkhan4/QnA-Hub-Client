import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function useAuth({ username, password }) {
  const [data, setData] = useState(null);
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

      const data = response.data;

      if (response.status === 200 && data) {
        setData(response.data);
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

  return { data, loading, error };
}
