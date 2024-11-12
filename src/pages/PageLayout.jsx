import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/index';

export default function PageLayout() {
  return (
    <main className="max-w-7xl mx-auto flex mt-6">
      {/* Sidebar */}
      <NavBar />
      {/* Main Content */}
      <div className="w-3/4">
        <Outlet />
      </div>
    </main>
  );
}
