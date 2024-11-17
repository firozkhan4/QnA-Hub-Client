import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setIsAuthenticated } = useContext(AuthContext);
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
      const response = await fetch(`${API_URI}${api}`, {
        method: 'POST',
        body: JSON.stringify({ username, password, email, role }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.json();

      console.log(data);

      if (response.status === 200 && response.data) {
        setData(data);
        setIsAuthenticated(true);
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
      console.error('Auth Error');
      setIsAuthenticated(() => false);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchUserData };
}
