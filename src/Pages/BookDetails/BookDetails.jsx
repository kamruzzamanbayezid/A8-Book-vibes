import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CommonBtn2 from "../../Shared/CommonBtn2";

const BookDetails = () => {

      const [book, setBook] = useState({});

      const books = useLoaderData();
      const { id } = useParams();

      useEffect(() => {
            const matchedBook = books?.find(book => book?.bookId == id);
            setBook(matchedBook);
      }, [books, id])

      const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

      return (
            <div className="flex flex-col lg:flex-row justify-between my-10">
                  {/* book image */}
                  <div className="lg:w-[49%] flex items-center justify-center bg-[#F3F3F3] rounded-2xl py-10 lg:py-0 mb-6 lg:mb-0">
                        <img src={image} alt="" />
                  </div>

                  {/* book content */}
                  <div className="lg:w-[49%]">
                        <h1 className="text-[#131313] text-4xl font-bold font-playfair mb-4">{bookName}</h1>

                        <p className="text-[#131313cc] text-xl font-medium mb-5">By : {author}</p>

                        <p className="text-[#131313cc] text-xl font-medium py-4 border-t border-b mb-5">{category}</p>

                        <p className="text-[#131313b3] font-normal text-base mb-7"><span className="text-[#131313] font-bold">Review : </span> {review}</p>
                        <div className="flex gap-3 items-center border-b pb-5 mb-5"><span className="text-[#131313] font-bold">Tag:</span>
                              {
                                    tags?.map(tag => <p key={tag} className="text-[#23BE0A] text-base font-medium bg-[#23be0a0d] px-4 py-2 rounded-full">#{tag}</p>)
                              }
                        </div>

                        <div className="flex items-center gap-12">
                              <div className="flex flex-col gap-3">
                                    <span className="text-[#131313b3] font-normal text-base">Number of Pages:</span>
                                    <span className="text-[#131313b3] font-normal text-base">Publisher:</span>
                                    <span className="text-[#131313b3] font-normal text-base">Year of Publishing:</span>
                                    <span className="text-[#131313b3] font-normal text-base">Rating:</span>
                              </div>
                              <div className="flex flex-col gap-3">
                                    <span className="text-[#131313] font-bold">{totalPages}</span>
                                    <span className="text-[#131313] font-bold">{publisher}</span>
                                    <span className="text-[#131313] font-bold">{yearOfPublishing}</span>
                                    <span className="text-[#131313] font-bold">{rating}</span>
                              </div>
                        </div>
                        <div className="mt-8">
                              <button className="hover:text-white text-[#59C6D2] hover:bg-[#59C6D2] bg-transparent px-6 py-3 border border-[#59C6D2] font-semibold text-lg rounded-lg transition mr-4">Read</button>
                              <CommonBtn2 title='Wishlist' />
                        </div>
                  </div>
            </div>
      );
};

export default BookDetails;