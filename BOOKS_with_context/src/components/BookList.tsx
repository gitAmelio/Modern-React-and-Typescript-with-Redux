import React, { useEffect, useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';
import axios from 'axios';

const BookList: React.FC = () => {

  const bookState = useContext(BooksContext);

  const { books, setBooks } = bookState!.states[0];
  const { booksListRef } = bookState!.refs;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/books')
      setBooks(response.data)
    }
    fetchData();
  }, [])

  const renderBooks: () => any = () => {
    return books.map(book => {
      return <BookShow key={book.id} id={book.id} />;
    })
  }

  return (
    <div ref={booksListRef} className="book-list">
      {renderBooks()}      
    </div>
  )
}

export default BookList;