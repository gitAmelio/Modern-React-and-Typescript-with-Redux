import './style.css';
import { useState, useRef } from 'react';
import BookCreate, { Book, BooksState } from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [title, setTitle] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);

  const booksListRef = useRef<HTMLHeadingElement>(null);

  const appState: BooksState = {
    states: [
        {title, setTitle},
        {books, setBooks},
    ],
    refs: {
      booksListRef
    }
  }

  console.log(books)

  return (
    <>
      <h1 className='reading-list'> Reading List</h1>
      <BookList appState={appState} />
      <BookCreate appState={appState} />  
    </>
  )
}

export default App;