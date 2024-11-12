import { TopNavBar } from '../components/index';
import { Axios as axios } from 'axios';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [user, setUser] = useState({});

  const getUserAccount = async () => {
    const token = localStorage.getItem('token');
    await axios
      .get('http://localhost:8080/api/auth/login', {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <TopNavBar />
      <Outlet />
    </div>
  );
}
