import { useContext, useEffect, useState } from "react";
import { getBookFromLocalStorage } from "../../Utils/localstorageForRead";
import { useLoaderData } from "react-router-dom";
import ReadBook from "./ReadBook";
import { SortingContext } from "../SortingProvider/SortingProvider";

const ReadBooks = () => {

      const [books, setBooks] = useState([]);
      const [sortedBooks, setSortedBooks] = useState([]);
      const loadedBooks = useLoaderData();
      const { sortingCriteria } = useContext(SortingContext);

      useEffect(() => {
            const storedId = getBookFromLocalStorage();

            const newBooks = [];
            for (let id of storedId) {
                  const isMatched = loadedBooks?.find(book => book?.bookId == parseInt(id));
                  newBooks.push(isMatched)
            }
            setBooks(newBooks);

      }, [loadedBooks]);

      useEffect(() => {

            let sorted = [...books];
            if (sortingCriteria === 'rating') {
                  sorted.sort((a, b) => b.rating - a.rating);
            } else if (sortingCriteria === 'totalPages') {
                  sorted.sort((a, b) => b.totalPages - a.totalPages);
            } else if (sortingCriteria === 'yearOfPublishing') {
                  sorted.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            }
            setSortedBooks(sorted);
            // let sorted = [...books];
            // if (sortingCriteria === 'all') {
            //       setSortedBooks(books)
            // }
            // else if (sortingCriteria === 'rating') {
            //       const sortedBookByRating = books?.sort((a, b) => b.rating - a.rating);
            //       setSortedBooks(sortedBookByRating);
            //       console.log(sortedBookByRating);
            // }
            // else if (sortingCriteria === 'totalPages') {
            //       const sortedBookByPages = books?.sort((a, b) => b.totalPages - a.totalPages);
            //       setSortedBooks(sortedBookByPages)
            //       console.log(sortedBookByPages);
            // }
            // else if (sortingCriteria === 'yearOfPublishing') {
            //       const sortedBookByYear = books?.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            //       setSortedBooks(sortedBookByYear)
            //       console.log(sortedBookByYear);
            // }

      }, [sortingCriteria, books]);

      return (
            <div>
                  {
                        sortedBooks?.map(book => <ReadBook
                              key={book?.bookId}
                              book={book}
                        ></ReadBook>)
                  }
            </div>
      );
};

export default ReadBooks;