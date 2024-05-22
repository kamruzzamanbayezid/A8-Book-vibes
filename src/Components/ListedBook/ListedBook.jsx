import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBook = () => {

      const [index, setIndex] = useState(0);

      return (
            <div>
                  <div className="my-7 bg-[#1313130d] py-7 rounded-2xl">
                        <h1 className="text-[#131313] text-3xl font-bold text-center">Books</h1>
                  </div>
                  <div className="flex justify-center">
                        <select className="select select-ghost bg-[#23BE0A] text-white">
                              <option disabled selected className="text-white">Sort By</option>
                              <option className="text-white">Svelte</option>
                              <option className="text-white">Vue</option>
                              <option className="text-white">React</option>
                        </select>
                  </div>
                  <div className="flex mt-10 mb-5 -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                        <Link to='' onClick={() => setIndex(0)} className={`${index == 0 ? 'border border-b-0 rounded-t-lg' : 'border-b'} flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600`}>
                              <span>Read Books</span>
                        </Link>
                        
                        <Link to='wishList' onClick={() => setIndex(1)} className={`${index == 1 ? 'border border-b-0 rounded-t-lg' : 'border-b'} flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600`}>
                              <span>Wishlist Books</span>
                        </Link>
                  </div>

                  <Outlet/>
            </div>
      );
};

export default ListedBook;