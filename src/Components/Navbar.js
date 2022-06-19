import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul class=" absolute right-12 top-5 flex">

      <li class="mr-3">
        <Link
          className="bg-sky-400 inline-block border border-slate-500 rounded py-1 px-3  hover:bg-sky-700 hover:text-white"
          to="/"
        >
          Home
        </Link>
      </li>
      <li class="mr-3">
        <Link
          className="bg-sky-400 inline-block border border-slate-500 rounded py-1 px-3  hover:bg-sky-700 hover:text-white"
          to="/Projects"
        >
          Projects
        </Link>
      </li>
      <li class="mr-3">
        <Link
          className="bg-sky-400 inline-block border border-slate-500 rounded py-1 px-3  hover:bg-sky-700 hover:text-white"
          to="/Contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};
export default Navbar;
