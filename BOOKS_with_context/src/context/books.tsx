import { createContext, PropsWithChildren, useState, useRef } from 'react';

export interface Book {
  id: string;
  title: string;
}

export type BooksState = {
  states: [
    { books: Book[]; setBooks: React.Dispatch<React.SetStateAction<Book[]>>; }
  ],
  refs: {
    booksListRef:  React.RefObject<HTMLHeadingElement>
  }  
}

const BooksContext = createContext<BooksState | null>(null);

export const BooksProvider = ({children}: PropsWithChildren<{}>) => {
  const [books, setBooks] = useState<Book[]>([]);
  const booksListRef = useRef<HTMLHeadingElement>(null);
  
  const appState: BooksState = {
    states: [
      {books, setBooks}
    ],
    refs: {
      booksListRef
    }
  }

  return (
    <BooksContext.Provider value={appState}> 
     {children}
    </BooksContext.Provider>
  )
}

export default BooksContext;


