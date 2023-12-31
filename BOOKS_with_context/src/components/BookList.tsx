import React, { useCallback, useEffect } from 'react';
import { useBookContext } from '../hooks/use-hooks-context';
import BookShow from './BookShow';
import axios from 'axios';

const BookList: React.FC = () => {

  const bookState = useBookContext();

  const { books, setBooks } = bookState!.states[0];
  const { booksListRef } = bookState!.refs;
  
  // useCallback ensure that fetchData reference does not change
  const fetchData = useCallback(  async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }, [])
  
  useEffect(() => {
    fetchData();
    console.log('hey')
  }, [fetchData])

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