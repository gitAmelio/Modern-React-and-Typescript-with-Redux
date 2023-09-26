import React, { useCallback, useEffect } from 'react';
import BookShow from './BookShow';
import { BooksState } from './BookCreate';
import axios from 'axios';

interface BookListProps {
  appState: BooksState;
}

const BookList: React.FC<BookListProps> = ({appState}) => {

  const { books, setBooks } = appState.states[1];
  const { booksListRef } = appState.refs;
  
  // useCallback ensure that fetchData reference does not change
  const fetchData = useCallback( async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  const renderBooks: () => any = () => {
    return books.map(book => {
      return <BookShow key={book.id} id={book.id} appState={appState} />;
    })
  }

  return (
    <div ref={booksListRef} className="book-list">
      {renderBooks()}      
    </div>
  )
}

export default BookList;