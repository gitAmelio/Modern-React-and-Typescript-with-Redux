import { createRoot } from 'react-dom/client';
import App from './App'
import { BooksProvider } from './context/books';

const element = document.getElementById('root');

const root = createRoot(element!);

root.render(
    <BooksProvider>
      <App/>
    </BooksProvider>
) 