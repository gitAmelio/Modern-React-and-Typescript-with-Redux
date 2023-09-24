import React from 'react';
import BookShow from './BookShow';
import { BooksState } from './BookCreate';

interface BookListProps {
  appState: BooksState;
}

const BookList: React.FC<BookListProps> = ({appState}) => {

  const { books } = appState.states[1];
  const { booksListRef } = appState.refs;

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