import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import { FaFacebook } from 'react-icons/fa';
import { useState } from 'react';

const login_options = [
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <div className="flex justify-between px-10 py-3 border border-b-2 items-center">
        <h1 className="font-medium text-2xl">StackOverflow</h1>
        <input
          type="text"
          placeholder="Search.."
          className="border w-2/4 px-3 rounded-md h-11"
        />
        <div>
          <img
            src="https://placehold.co/50x50"
            alt="profile"
            className="rounded-full"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center gap-y-7 py-10 w-2/3 m-auto">
          <Loging login_options={login_options} />
          <div className="flex flex-col border px-4 py-5 gap-y-4 w-1/3 rounded-md">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border px-2 py-2 font-medium"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <button className="bg-blue-400 text-white font-semibold py-2 px-3 rounded-md">
              Login
            </button>
            <a href="#" className="text-center">
              Registor?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const Loging = ({ login_options }) => {
  return (
    <div className="flex flex-col gap-y-5 w-1/3">
      {
        // eslint-disable-next-line react/prop-types
        login_options.map((opt, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-x-3 border px-3 py-3 shadow-lg rounded-sm cursor-pointer"
            >
              <section className="text-2xl">{opt.icon}</section>
              <p className="font-medium">Login with {opt.name}</p>
            </div>
          );
        })
      }
    </div>
  );
};
export default Auth;
