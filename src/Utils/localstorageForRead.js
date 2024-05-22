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
      toast.success('You successfully added the book!!')

}

const addBookToLocalStorage = (id) => {
      const storedBook = getBookFromLocalStorage();
      const isExist = storedBook?.find(book => book == id);
      if(isExist){ 
            return toast.error('This book is already in the list!!')
      }
      storedBook.push(id);

      saveBookToLocalStorage(storedBook);
}

export { addBookToLocalStorage, getBookFromLocalStorage };