import { Link } from "react-router-dom";

const Footer = () => {
      return (
            <div>
                  <footer className="bg-[#1313130d] dark:bg-gray-900">
                        <div className="w-full max-w-[1170px] mx-auto p-4 lg:px-0 md:py-8">
                              <div className="sm:flex sm:items-center sm:justify-between">
                                    <Link to='/' className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                          <span className="self-center text-3xl font-playfair font-bold whitespace-nowrap dark:text-white">Book Vibe</span>
                                    </Link>
                                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                          <li>
                                                <Link to='/' className="hover:underline me-4 md:me-6">Home</Link>
                                          </li>
                                          <li>
                                                <Link to='/about' className="hover:underline me-4 md:me-6">About</Link>
                                          </li>
                                          <li>
                                                <Link to='/contact' className="hover:underline me-4 md:me-6">Contact</Link>
                                          </li>
                                    </ul>
                              </div>
                              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to='/' className="hover:underline">BookVibe™</Link>. All Rights Reserved.</span>
                        </div>
                  </footer>


            </div>
      );
};

export default Footer;