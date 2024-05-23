import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import WishListBook from "./WishListBook";
import { getWishBookFromLocalStorage } from "../../Utils/localStorageForWishList";
import { SortingContext } from "../SortingProvider/SortingProvider";

const WishList = () => {

      const [books, setBooks] = useState([]);
      const [sortedBooks, setSortedBooks] = useState([]);
      const loadedBooks = useLoaderData();
      const { sortingCriteria } = useContext(SortingContext);

      useEffect(() => {
            if (loadedBooks.length > 0) {
                  const storedId = getWishBookFromLocalStorage();

                  const newBooks = [];
                  for (let id of storedId) {
                        const isMatched = loadedBooks?.find(book => book?.bookId == parseInt(id));
                        newBooks.push(isMatched)
                  }
                  setBooks(newBooks);
            }
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

      }, [sortingCriteria, books]);

      return (
            <div>
                  {

                        sortedBooks?.map((book, idx) => <WishListBook key={idx} book={book}></WishListBook>)
                  }
            </div>
      );
};

export default WishList;