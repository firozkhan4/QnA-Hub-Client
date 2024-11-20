import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Avatar, Button } from './index';

export default function TopNavBar() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to={'/'}>
            <p className="text-2xl font-serif">QnA Hub</p>
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-4 py-2 w-80"
          />
        </div>
        <section>
          {isAuthenticated ? (
            <section>
              <Avatar />
              <Link to={'/logout'}>Logout</Link>
            </section>
          ) : (
            <section className="flex gap-x-3">
              <Button link={'/login'} text={'Sign in'} />
              <Button link={'/register'} text={'Sign up'} />
            </section>
          )}
        </section>
      </div>
    </header>
  );
}
