import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import WishListBook from "./WishListBook";
import { getWishBookFromLocalStorage } from "../../Utils/localStorageForWishList";

const WishList = () => {

      const [books, setBooks] = useState([]);
      const loadedBooks = useLoaderData();

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

      return (
            <div>
                  {
                        books?.map((book, idx) => <WishListBook key={idx} book={book}></WishListBook>)
                  }
            </div>
      );
};

export default WishList;