import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import { FaFacebook } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Avatar } from '../components/index';
import { AuthContext } from '../contexts/AuthContext';
import { Link, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// Social login options
const loginOptions = [
  {
    name: 'Google',
    icon: <FcGoogle />,
  },
  {
    name: 'Github',
    icon: <ImGithub />,
  },
  {
    name: 'Facebook',
    icon: <FaFacebook className="fill-blue-400" />,
  },
];

export function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const fetchUserData = async (username, password) => {
    try {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:8080/api/auth/login',
        { username, password },
        { withCredentials: true }
      );

      if (response.status === 200 && response.data) {
        setUser(response.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      setError(error.message);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
      setIsAuthenticated(true);
    }
  };

  const handleLogin = () => {
    fetchUserData(username, password);
    console.log(user);
  };

  return (
    <div>
      <div className="flex justify-between px-10 py-3 border-b-2 items-center">
        <Link to="/" className="font-medium text-2xl font-serif">
          QnA Hub
        </Link>
        <input
          type="text"
          placeholder="Search.."
          className="border w-2/4 px-3 rounded-md h-11"
        />
        {isAuthenticated && <Avatar />}
      </div>
      <div className="flex flex-col items-center gap-y-7 py-10 w-2/3 m-auto">
        <SocialLogin loginOptions={loginOptions} />
        <div className="flex flex-col border px-4 py-5 gap-y-4 w-1/3 rounded-md">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="border px-2 py-2 font-medium"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="border px-2 py-2 font-medium"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-blue-400 text-white font-semibold py-2 px-3 rounded-md"
          >
            Login
          </button>
          <Link to="/register" className="text-center">
            Register?
          </Link>
        </div>
      </div>
    </div>
  );
}

const SocialLogin = ({ loginOptions }) => {
  return (
    <div className="flex flex-col gap-y-5 w-1/3">
      {loginOptions.map((opt, index) => (
        <div
          key={index}
          className="flex items-center gap-x-3 border px-3 py-3 shadow-lg rounded-sm cursor-pointer"
        >
          <section className="text-2xl">{opt.icon}</section>
          <p className="font-medium">Login with {opt.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Auth;
