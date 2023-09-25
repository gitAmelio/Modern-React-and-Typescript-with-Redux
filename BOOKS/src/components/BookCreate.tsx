import axios from 'axios';
import React, { Dispatch, SetStateAction } from 'react';

export interface Book {
  id: string;
  title: string;
}

export type BooksState = {
  states: [
    { title: string; setTitle: Dispatch<SetStateAction<string>>; }, 
    { books: Book[]; setBooks: Dispatch<SetStateAction<Book[]>>; }
  ],
  refs: {
    booksListRef:  React.RefObject<HTMLHeadingElement>
  }  
}

interface BookCreateProps {
  appState: BooksState;
}

const BookCreate: React.FC<BookCreateProps> = ({appState}) => {

  const { title, setTitle } = appState.states[0];
  const { books, setBooks } = appState.states[1];
  const { booksListRef } = appState.refs;

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:3001/books', {
      title
    });

    if (!title) return;
    setBooks([...books, response.data]);
    setTitle('')
    if(booksListRef.current){
      booksListRef.current.scrollTop = booksListRef.current.scrollHeight;
    }
  }

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  }

  return (
    <div className='book-create' >
      <h3>Add a Book</h3>
      <form onSubmit={handleOnSubmit} >
        {/* <label>Title</label> */}
        <input className='input' value={title} onChange={handleOnChange} placeholder="Enter Title"></input>
        <button className='button'>Create</button>
      </form>
    </div>
  )
}

export default BookCreate;