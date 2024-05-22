import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
      const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

      return (
            <div className="p-6 rounded-2xl border border-[#13131326]">
                  <figure className="bg-[#F3F3F3] py-10 px-10 rounded-2xl flex justify-center items-center mb-5">
                        <img src={image} alt="" />
                  </figure>
                  <div>
                        <div className="flex gap-3">
                              {
                                    tags?.map(tag => <p key={tag} className="text-[#23BE0A] text-base font-medium bg-[#23be0a0d] px-4 py-2 rounded-full">{tag}</p>)
                              }
                        </div>
                        <h1 className="my-4 text-[#131313] font-playfair text-2xl font-bold">{bookName}</h1>
                        <p className="text-[#131313cc] text-base font-medium mb-5 pb-5 border-dashed border-b">By : {author}</p>
                        <div className="flex justify-between items-center">
                              <p className="text-[#131313cc] text-base font-medium">{category}</p>
                              <div className="flex items-center gap-1">
                                    <span className="text-[#131313cc] text-base font-medium">{rating}</span>
                                    <CiStar className="text-[#131313cc] text-base font-medium" size={24} />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

Book.propTypes = {
      book: PropTypes.object,
};

export default Book;