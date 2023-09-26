import React, { useContext, useState } from 'react';
import { BiSolidEditAlt } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md'

import BookEdit, { EditState } from './BookEdit';
import BooksContext from '../context/books';
import './BookShow.css';
import axios from 'axios';

interface BookShowProps {
  id: string;
}

const BookShow: React.FC<BookShowProps> = ({id}) => {
  
  const bookState = useContext(BooksContext);

  const { books, setBooks } = bookState!.states[0];
 
  const book = books.find(book => book.id === id);
 
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(book?.title || '');

  const editState: EditState = {
    states: [
      {title, setTitle},
      {edit, setEdit}
    ]
  }

  const handleDelete = async () => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    console.log(response)
    const newBooks = books.filter(book=> book.id !== id) ;
    setBooks(newBooks);
  }

  const handleEditClicked: React.MouseEventHandler<HTMLDivElement> = () => {
    if (edit) {
      setEdit(false);
      // restore the unmodified text
      const book = books.find(book => book.id === id);
      setTitle(book!.title);
    } else {
      setEdit(true);
    }
  } 

  const ifEditClass = () => {
    return edit ? "book-edit-icon" : "book-no-edit-icon";  
  }

  const viewBook = () => {
    if (edit) {
      return  <BookEdit id={id} editState={editState}/>
    }
    return <>
      <div className='book-show-title'>{title}</div>
    </>
  }
  
  return (
    <div key={id} className='book-show-details'> 
        <img className='book-show-img'
          alt="books"
          src={`https://picsum.photos/seed/${id}/200/300`}
        />

      {viewBook()}
      <div className='book-controls'>
        <div className={ifEditClass()} onClick={handleEditClicked}><BiSolidEditAlt/></div>
        <div className="book-delete-icon" onClick={handleDelete}><MdDeleteForever /></div>
      </div>
 
    </div>
  )
}

export default BookShow;