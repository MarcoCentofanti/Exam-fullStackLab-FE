import { createContext, useState, useContext } from "react";

const SavedBooksContext = createContext();

function useSavedBooks() {
  return useContext(SavedBooksContext);
}

function SavedBooksProvider({ children }) {
  const [savedBooks, setSavedBooks] = useState([]);

  function addSavedBook(book) {
    setSavedBooks((previousBooks) => {
      const alreadySaved = previousBooks.find(
        (currentBook) => currentBook.id === book.id,
      );

      if (alreadySaved) {
        return previousBooks;
      }
      return [...previousBooks, book];
    });
  }

  return (
    <SavedBooksContext.Provider value={{ savedBooks, addSavedBook }}>
      {children}
    </SavedBooksContext.Provider>
  );
}

export { useSavedBooks };
export default SavedBooksProvider;
