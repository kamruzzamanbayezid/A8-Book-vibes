import { useEffect, useState } from "react";
import { getBookFromLocalStorage } from "../../Utils/localstorageForRead";
import { useLoaderData } from "react-router-dom";
import ReadBook from "./ReadBook";

const ReadBooks = () => {

      const [books, setBooks] = useState([]);
      const loadedBooks = useLoaderData();

      useEffect(() => {

            const storedId = getBookFromLocalStorage();

            const newBooks = [];
            for (let id of storedId) {
                  const isMatched = loadedBooks?.find(book => book?.bookId == parseInt(id));
                  newBooks.push(isMatched)
            }
            setBooks(newBooks);

      }, [loadedBooks]);

      return (
            <div>
                  {
                        books?.map(book => <ReadBook key={book?.bookId} book={book}></ReadBook>)
                  }
            </div>
      );
};

export default ReadBooks;