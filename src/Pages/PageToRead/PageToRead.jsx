import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getBookFromLocalStorage } from "../../Utils/localstorageForRead";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import CustomBarShape from "./CustomBarShape";

const PageToRead = () => {

      const [books, setBooks] = useState([]);
      const loadedBooks = useLoaderData();

      useEffect(() => {

            const storedId = getBookFromLocalStorage();

            const newBooks = [];
            for (let id of storedId) {
                  const isMatched = loadedBooks?.find(book => book?.bookId == id);
                  newBooks.push(isMatched)
            }
            setBooks(newBooks);

      }, [loadedBooks]);

      const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

      return (
            <div className="px-20 py-16 w-full h-[700px] bg-[#13131308] flex justify-center rounded-2xl">
                  <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={books} >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="bookName" />
                              <YAxis />
                              <Tooltip />
                              <Bar dataKey="totalPages" fill="#8884d8" shape={<CustomBarShape />} label={{ position: 'top' }}>
                                    {books.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                    ))}
                              </Bar>
                        </BarChart>
                  </ResponsiveContainer>
            </div>
      );
};

export default PageToRead;

<svg xmlns="http://www.w3.org/2000/svg" width="150" height="313" viewBox="0 0 150 313" fill="none">
      <path d="M77 0C64.6 248.799 20.5 312.333 0 313H150C92.4 288.024 77.3333 93.9267 77 0Z" fill="#0085F6" />
</svg>