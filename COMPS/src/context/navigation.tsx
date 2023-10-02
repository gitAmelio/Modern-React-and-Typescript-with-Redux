import { PropsWithChildren, createContext, useEffect, useState } from "react";


interface NavigationContextProps {
  currentPath: string;
  navigate: (to: string) => void;
}

const NavigationContext = createContext<NavigationContextProps | null>(null);

const NavigationProvider = ({children}: PropsWithChildren) => {
  const [ currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {

    const handler = () => {
      // when user click forward or back
      setCurrentPath(window.location.pathname)
    };

    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    }

  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationProvider };
export default NavigationContext;