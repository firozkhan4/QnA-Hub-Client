import { Link, Outlet } from 'react-router-dom';

export default function NavList({ navList }) {
  return (
    <ul className="space-y-2">
      {navList.map((item, index) => {
        return (
          <Link to={item.link} key={index}>
            <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">
              <section className="flex items-center gap-1">
                <img src={item.icon} className="w-4" />
                <p>{item.name}</p>
              </section>
            </li>
          </Link>
        );
      })}
      {/* <li className="bg-gray-200 p-2 rounded">Home</li>
      <li>Questions</li>
      <li>Tags</li>
      <li>Saves</li>
      <li>Users</li>
      <li>Companies</li> */}
    </ul>
  );
}