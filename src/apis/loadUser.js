import axios from 'axios';

export const loadUser = async () => {
  const API_URI = 'http://localhost:8080/api/auth';
  const res = await axios.post(`$(API_URI)/login`, { withCredentials: true });
  return res.data;
};
