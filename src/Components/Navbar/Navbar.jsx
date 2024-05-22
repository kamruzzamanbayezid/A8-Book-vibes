import { Link, NavLink } from "react-router-dom";
import CommonBtn from "../../Shared/CommonBtn";
import CommonBtn2 from "../../Shared/CommonBtn2";

const Navbar = () => {

      const navLinks = <>
            <li>
                  <NavLink
                        to='/'
                        className={({ isActive }) =>
                              isActive ? 'text-[#23BE0A] text-lg font-semibold px-4 py-2 border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white'
                                    :
                                    'text-[#131313cc] text-lg bg-transparent'}
                  >
                        Home
                  </NavLink>
            </li>
            <li>
                  <NavLink
                        to='/listedBook'
                        className={({ isActive }) =>
                              isActive ? 'text-[#23BE0A] text-lg font-semibold px-4 py-2 border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white'
                                    :
                                    'text-[#131313cc] text-lg font-normal'}
                  >
                        Listed Books
                  </NavLink>
            </li>
            <li>
                  <NavLink
                        to='/pageToRead'
                        className={({ isActive }) =>
                              isActive ? 'text-[#23BE0A] text-lg font-semibold px-4 py-2 border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white'
                                    :
                                    'text-[#131313cc] text-lg font-normal'}
                  >
                        Pages to Read
                  </NavLink>
            </li>

      </>

      return (
            <div className="navbar my-4">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </div>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {navLinks}
                              </ul>
                        </div>
                        <Link to='/' className="text-[#131313] text-3xl font-bold">Book Vibe</Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="flex items-center gap-6">
                              {navLinks}
                        </ul>
                  </div>
                  <div className="navbar-end">
                        <CommonBtn title='Sign In' />
                        <CommonBtn2 title='Sign Up'/>
                  </div>
            </div>
      );
};

export default Navbar;