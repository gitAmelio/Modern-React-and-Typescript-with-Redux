import { useCallback, useState } from "react";
import { useAppDispatch } from ".";

export const useThunk: (thunk: any) => [any, boolean, string | null] = (thunk: any) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);

  const runThunk = useCallback( (arg: any) =>{
    setIsLoading(true);
    dispatch(thunk(arg))
      .unwrap()
      .then(() => {           // not needed
        setIsLoading(false);   
      })
      .catch((err:any) => {
        setError(err);
        setIsLoading(false);   // not needed
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [dispatch, thunk])

  return [runThunk, isLoading, error]
}