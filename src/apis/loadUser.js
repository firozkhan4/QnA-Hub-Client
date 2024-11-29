import axios from 'axios';

export const loadUser = async () => {
  axios.defaults.withCredentials = true;
  let data = null;

  const res = await axios
    .post('http://13.201.7.212:8000/api/users', {
      withCredentials: true,
    })
    .then((res) => {
      data = res;
    })
    .catch((error) => {
      console.error(
        'Error loading user:',
        error.response?.data || error.message
      );
      throw new Error('Failed to load user');
    });
  return res.data || null;
};
