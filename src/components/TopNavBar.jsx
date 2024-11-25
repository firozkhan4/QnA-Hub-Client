import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Avatar, Button } from './index';
import Controllers from '../apis';
import { QuestionContext } from '../contexts/QuestionContext';
import SearchIcon from '../assets/svg/search.svg';

export default function TopNavBar() {
  const { isAuthenticated } = useContext(AuthContext);
  const { setQuestions } = useContext(QuestionContext);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  const questionController = new Controllers.QuestionController();

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    const input = search.trim() || 'all';
    const response = await questionController.searchQuestions(input);
    setQuestions(response);
    setSearch('');
    searchRef.current.focus();
  };

  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Search */}
        <div className="flex items-center space-x-4">
          <Link to={'/'}>
            <p className="text-2xl font-serif font-bold">QnA Hub</p>
          </Link>
          <section className="flex items-center border-2 rounded-lg overflow-hidden space-x-2 pl-2">
            <img
              src={SearchIcon}
              className="w-6 cursor-pointer"
              alt="Search"
              onClick={handleSearch}
            />
            <input
              type="text"
              placeholder="Search..."
              className="px-2 text-lg outline-none py-2 w-80"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              ref={searchRef}
              onKeyDown={handleEnter}
            />
          </section>
        </div>

        {/* Authentication Links */}
        <section>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to={'/profile'}>
                <Avatar />
              </Link>
              <Link
                to={'/logout'}
                className="text-gray-600 hover:text-gray-800 transition duration-200"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex gap-x-3">
              <Button link={'/login'} text={'Sign in'} />
              <Button link={'/register'} text={'Sign up'} />
            </div>
          )}
        </section>
      </div>
    </header>
  );
}
