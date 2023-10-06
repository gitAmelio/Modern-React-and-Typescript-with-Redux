import {useState, useEffect } from 'react';

export const useCounter = (initialCount: number) => {
  const [count, setCount] = useState(initialCount);

  useEffect(()=>{
    console.log(count)

  }, [count])

  const increment = () => {
    setCount(count+1)
  }

  return {
    count,
    increment
  }
}