import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

      const [books, setBooks] = useState([]);

      useEffect(() => {
            fetch('books.json')
                  .then(res => res.json())
                  .then(data => setBooks(data))
      }, []);

      return (
            <div className="my-10 lg:my-20">
                  <h1 className="text-center text-4xl font-bold font-playfair mb-7">Books</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                              books?.map(book => <Book
                                    key={book?.id}
                                    book={book}
                              ></Book>)
                        }
                  </div>
            </div>
      );
};

export default Books;