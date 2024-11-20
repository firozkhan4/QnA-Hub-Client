import { useContext, useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import useAuth from '../hooks/useAuth';
import { TopNavBar } from '../components';

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
  const [email, setEmail] = useState('');
  const { loading, error, data, fetchUserData } = useAuth();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const path = useLocation().pathname;

  //   try {
  //     setLoading(true);
  //     const response = await axios.post(
  //       'http://localhost:8080/api/auth/login',
  //       { username, password },
  //       { withCredentials: true }
  //     );

  //     console.log('Auth', response.data);
  //     if (response.status === 200 && response.data) {
  //       setUser(response.data);
  //       setIsAuthenticated(true);
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //     console.error('Auth Error');
  //     setIsAuthenticated(() => false);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLogin = () => {
    fetchUserData(username, password, email, 'login');
  };
  const handleRegister = () => {
    fetchUserData(username, password, email, 'register');
  };

  return (
    <div>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      {/* <div className="flex justify-between px-10 py-3 border-b-2 items-center">
        <Link to="/" className="font-medium text-2xl font-serif">
          QnA Hub
        </Link>
        <input
          type="text"
          placeholder="Search.."
          className="border w-2/4 px-3 rounded-md h-11"
        />
        {isAuthenticated && <Avatar />}
      </div> */}
      <TopNavBar />
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
          {path === '/register' && (
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border px-2 py-2 font-medium"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="border px-2 py-2 font-medium"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {path === '/login' ? (
            <button
              onClick={handleLogin}
              className="bg-blue-400 text-white font-semibold py-2 px-3 rounded-md"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleRegister}
              className="bg-blue-400 text-white font-semibold py-2 px-3 rounded-md"
            >
              Register
            </button>
          )}
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
