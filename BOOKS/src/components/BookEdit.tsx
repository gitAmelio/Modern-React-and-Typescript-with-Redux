import './BookEdit.css';
import React from 'react';
import { Book, BooksState } from './BookCreate';
import axios from 'axios';

export type EditState = {
  states: [
    { title: string; setTitle: React.Dispatch<React.SetStateAction<string>>; }, 
    { edit: boolean; setEdit: React.Dispatch<React.SetStateAction<boolean>>; }, 

  ]
}

interface BookEditProps {
  id: string;
  appState: BooksState;
  editState: EditState
}

const BookEdit: React.FC<BookEditProps> = ({id, appState, editState}) => {

  const {books, setBooks} = appState.states[1];
  // const [ title, setTitle ] = useState(book?.title || '');
  const {title, setTitle } = editState.states[0];
  const {setEdit } = editState.states[1];

  
  const updateBooks = async () => {
    const index = books.findIndex(book => book.id === id);
    const updatedBook: Book = {id, title};

    const response = await axios.put(`http://localhost:3001/books/${id}`,updatedBook)

    const newBooks = [
      ...books.slice(0,index), 
      // updatedBook,
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
    // <div className="book-edit">
      <form className="book-form-edit" onSubmit={handleOnSubmit} >
        {/* <label>Title</label> */}
        <input className='book-edit-input' value={title} onChange={handleOnChange} placeholder="Enter Title"></input>
        <button className='save-button'>Save</button>
      </form>
    // </div>
  )
}

export default BookEdit;