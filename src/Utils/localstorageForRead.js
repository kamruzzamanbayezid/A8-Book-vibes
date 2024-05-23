import toast from "react-hot-toast";

const getBookFromLocalStorage = () => {
      const storedBook = localStorage.getItem('readBook');
      if (storedBook) {
            return JSON.parse(storedBook)
      }
      return [];
}

const saveBookToLocalStorage = (id) => {
      localStorage.setItem('readBook', JSON.stringify(id));
      toast.success('You successfully added book to the reading list!!')

}

const addBookToLocalStorage = (id) => {
      const storedBook = getBookFromLocalStorage();
      const isExist = storedBook?.find(book => book == id);
      if (isExist) {
            return toast.error('You already read this book!!')
      }
      storedBook.push(id);

      saveBookToLocalStorage(storedBook);
}

export { addBookToLocalStorage, getBookFromLocalStorage };