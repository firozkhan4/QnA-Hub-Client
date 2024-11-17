import { Link } from 'react-router-dom';

export default function Button({ text, link }) {
  return (
    <Link
      to={`${link}`}
      className={`py-2 px-3 rounded align-middle font-semibold bg-blue-400 text-white`}
    >
      {text}
    </Link>
  );
}
