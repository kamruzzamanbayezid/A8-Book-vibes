import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { SortingContext } from "../SortingProvider/SortingProvider";

const ListedBook = () => {

      const [index, setIndex] = useState(0);
      const { setSortingCriteria } = useContext(SortingContext);

      const handleSortClick = (criteria) => {
            setSortingCriteria(criteria);
      };

      return (
            <div>
                  <div className="my-7 bg-[#1313130d] py-7 rounded-2xl">
                        <h1 className="text-[#131313] text-3xl font-bold text-center">Books</h1>
                  </div>
                  <div className="flex justify-center">
                        <div className="dropdown dropdown-end">
                              <div tabIndex={0} role="button" className="px-7 text-white font-semibold text-lg rounded-lg py-3 bg-[#23BE0A] flex items-center gap-2">Sort By <SlArrowDown />
                              </div>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#1313130d] text-black font-normal rounded-box w-52">
                                    <li onClick={() => handleSortClick('rating')}><a>Rating</a></li>
                                    <li onClick={() => handleSortClick('totalPages')}><a>Number of pages</a></li>
                                    <li onClick={() => handleSortClick('yearOfPublishing')}><a>Publisher year</a></li>
                              </ul>
                        </div>
                  </div>
                  <div className="flex mt-10 mb-5 -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                        <Link to='' onClick={() => setIndex(0)} className={`${index == 0 ? 'border border-b-0 rounded-t-lg' : 'border-b'} flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600`}>
                              <span>Read Books</span>
                        </Link>

                        <Link to='wishList' onClick={() => setIndex(1)} className={`${index == 1 ? 'border border-b-0 rounded-t-lg' : 'border-b'} flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600`}>
                              <span>Wishlist Books</span>
                        </Link>
                  </div>

                  <Outlet />
            </div>
      );
};

export default ListedBook;