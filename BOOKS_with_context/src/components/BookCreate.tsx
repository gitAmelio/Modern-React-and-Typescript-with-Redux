import axios from 'axios';
import React, { useState } from 'react';
import { useBookContext } from '../hooks/use-hooks-context';

const BookCreate: React.FC = () => {

  const [ title, setTitle ] = useState<string>('')

  const bookState = useBookContext();

  const { books, setBooks } = bookState!.states[0];
  const { booksListRef } = bookState!.refs;
  
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
        <input className='input' value={title} onChange={handleOnChange} placeholder="Enter Title"></input>
        <button className='button'>Create</button>
      </form>
    </div>
  )
}

export default BookCreate;