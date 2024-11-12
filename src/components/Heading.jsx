import { Link } from 'react-router-dom';

export default function Heading({ title }) {
  return (
    <div className="flex justify-between px-5  py-5">
      <section className="text-2xl font-semibold">
        <h2>{title}</h2>
      </section>
      <section>
        <Link
          to={'/ask'}
          className="bg-blue-500 text-white text-sm font-normal py-2 px-2 rounded-md"
        >
          Ask Question
        </Link>
      </section>
    </div>
  );
}
