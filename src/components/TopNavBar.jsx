import { Link } from 'react-router-dom';

export default function TopNavBar() {
  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to={'/'}>
            <p className="text-2xl font-mono">
              stack<span className="font-bold">overflow</span>
            </p>
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-4 py-2 w-80"
          />
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://placehold.co/100x100"
            alt="profile"
            className="w-9 h-9 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
