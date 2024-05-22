import toast from "react-hot-toast";
import { getBookFromLocalStorage } from "./localstorageForRead";

const getWishBookFromLocalStorage = () => {
      const storedBook = localStorage.getItem('wishBook');
      if (storedBook) {
            return JSON.parse(storedBook)
      }
      return [];
}

const saveWishBookToLocalStorage = (id) => {
      localStorage.setItem('wishBook', JSON.stringify(id));
      toast.success('You successfully added the book!!')
}

const addWishBookToLocalStorage = (id) => {
      const storedBook = getWishBookFromLocalStorage();
      // book from read list
      const storedReadBook = getBookFromLocalStorage();

      const isExist = storedBook?.find(book => book == id);
      const isReadExist = storedReadBook?.find(book => book == id);

      if (isExist || isReadExist) {
            return toast.error('This book is already in the list!!')
      }
      storedBook.push(id);

      saveWishBookToLocalStorage(storedBook);
}

export { addWishBookToLocalStorage, getWishBookFromLocalStorage };