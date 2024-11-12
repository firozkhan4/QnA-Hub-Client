import { NavList } from './index';
import { bottomNavList, topNavList } from '../assets/data/index';

export default function NavBar() {
  return (
    <div className="w-1/4">
      <section className="space-y-4">
        <NavList navList={topNavList} />
        <NavList navList={bottomNavList} />
      </section>
      <div className="mt-6">
        <h3 className="text-gray-700 font-bold">COLLECTIVES</h3>
        <a href="#" className="text-blue-600">
          Explore all Collectives
        </a>
      </div>

      <div className="mt-6">
        <h3 className="text-gray-700 font-bold">TEAMS</h3>
        <a href="#" className="text-blue-600">
          Looking for your Teams?
        </a>
      </div>
    </div>
  );
}
