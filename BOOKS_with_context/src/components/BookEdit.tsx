import './BookEdit.css';
import React from 'react';
import { Book } from '../context/books';
import axios from 'axios';
import { useBookContext } from '../hooks/use-hooks-context';

export type EditState = {
  states: [
    { title: string; setTitle: React.Dispatch<React.SetStateAction<string>>; }, 
    { edit: boolean; setEdit: React.Dispatch<React.SetStateAction<boolean>>; }, 
  ]
}

interface BookEditProps {
  id: string;
  editState: EditState
}

const BookEdit: React.FC<BookEditProps> = ({id, editState}) => {

  const bookState = useBookContext();

  const { books, setBooks } = bookState!.states[0];

  const {title, setTitle } = editState.states[0];
  const {setEdit } = editState.states[1];

  
  const updateBooks = async () => {
    const index = books.findIndex(book => book.id === id);
    const updatedBook: Book = {id, title};

    const response = await axios.put(`http://localhost:3001/books/${id}`, updatedBook)

    const newBooks = [
      ...books.slice(0,index),
      // the updated entry from the db.json 
      response.data, 
      ...books.slice(index+1)
    ] 
    setBooks(newBooks);
    setEdit(false);
  }

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value)
  }

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    updateBooks();
  }
    
  return (
    <form className="book-form-edit" onSubmit={handleOnSubmit} >
      <input className='book-edit-input' value={title} onChange={handleOnChange} placeholder="Enter Title"></input>
      <button className='save-button'>Save</button>
    </form>
  )
}

export default BookEdit;