import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <ul>
        <li className="mb-4">
          <Link to="/admin" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/questions" className="hover:text-blue-400">
            Manage Questions
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/answers" className="hover:text-blue-400">
            Manage Answers
          </Link>
        </li>
        <li>
          <Link to="/admin/users" className="hover:text-blue-400">
            Manage Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
