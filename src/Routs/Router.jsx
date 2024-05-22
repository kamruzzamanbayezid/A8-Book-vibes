import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBook from "../Components/ListedBook/ListedBook";
import ReadBooks from "../Components/ReadBooks/ReadBooks";
import WishList from "../Components/WishList/WishList";

const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/bookDetails/:id',
                        element: <BookDetails />,
                        loader: () => fetch('books.json')
                  },
                  {
                        path: '/listedBooks',
                        element: <ListedBook />,
                        children: [
                              {
                                    index: true,
                                    element: <ReadBooks />,
                                    loader: () => fetch('/books.json')
                              },
                              {
                                    path: 'wishList',
                                    element: <WishList />,
                                    loader: () => fetch('/books.json')
                              }
                        ],
                  }
            ],
      }
]);

export default router;