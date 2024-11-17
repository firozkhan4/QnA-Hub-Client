import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TopNavBar } from '../components/index';

export default function Layout() {
  const [user, setUser] = useState('');

  return (
    <div className="bg-gray-100 min-h-screen">
      <TopNavBar user={user} />
      <Outlet />
    </div>
  );
}
