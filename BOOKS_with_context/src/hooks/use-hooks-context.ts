import { useContext } from "react"
import BooksContext from "../context/books"

export function useBookContext() {
  return useContext(BooksContext)
}