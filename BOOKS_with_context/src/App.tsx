import './style.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


const App = () => {
  return (
    <>
      <h1 className='reading-list'> Reading List</h1>
      <BookList  />
      <BookCreate />  
    </>
  )
}

export default App;