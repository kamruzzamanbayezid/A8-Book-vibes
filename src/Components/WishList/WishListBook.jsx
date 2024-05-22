import PropTypes from 'prop-types';
import { SiTildapublishing } from "react-icons/si";
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from 'react-router-dom';


const WishListBook = ({ book }) => {


      const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

      return (
            <div className="flex flex-col lg:flex-row justify-between my-10 border p-4 rounded-2xl">
                  {/* book image */}
                  <div className="lg:w-[28%] flex items-center justify-center bg-[#F3F3F3] rounded-2xl py-6 mb-6 lg:mb-0">
                        <img className='lg:h-[200px]' src={image} alt="" />
                  </div>

                  {/* book content */}
                  <div className="lg:w-[70%]">
                        <h1 className="text-[#131313] text-2xl font-bold font-playfair mb-4">{bookName}</h1>

                        <p className="text-[#131313cc] text-base font-medium mb-5">By : {author}</p>

                        <div className='flex flex-col md:flex-row items-start lg:items-center gap-2 md:gap-4 mb-5'>
                              <div className="flex gap-3 items-center"><span className="text-[#131313] font-bold">Tag:</span>
                                    {
                                          tags?.map(tag => <p key={tag} className="text-[#23BE0A] text-base font-medium bg-[#23be0a0d] px-4 py-1 rounded-full">#{tag}</p>)
                                    }
                              </div>
                              <span className="text-[#131313b3] text-base flex items-center gap-1 font-medium"><SiTildapublishing className='text-xl' />
                                    Year of Publishing: {yearOfPublishing}</span>
                        </div>
                        <div className='flex flex-col md:flex-row items-start lg:items-center gap-2 md:gap-6 mb-4 pb-4 border-b'>
                              <span className="text-[#131313b3] font-normal text-base flex items-center gap-1"><GoPeople />
                                    Publisher: {publisher}</span>
                              <span className="text-[#131313b3] font-normal text-base flex items-center gap-1"><MdOutlineContactPage />
                                    Pages: {totalPages}</span>

                        </div>

                        <div className='flex flex-wrap items-center gap-2.5'>
                              <span className="text-[#328EFF] text-base font-normal bg-[#328eff26] px-5 py-2 rounded-full">Category: {category}</span>
                              <span className="text-[#FFAC33] text-base font-normal bg-[#ffac3326] px-5 py-2 rounded-full">Rating: {rating}</span>
                              <Link to={`/bookDetails/${bookId}`} className="text-[#FFF] text-base font-normal bg-[#23BE0A] px-5 py-2 rounded-full">View Details</Link>

                        </div>

                  </div>
            </div>
      );
};

WishListBook.propTypes = {
      book: PropTypes.object
};

export default WishListBook;