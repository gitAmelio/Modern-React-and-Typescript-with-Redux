import React from "react";
import useNavigation from "../hooks/use-navigation";

interface RouteProps {
  path: string;
  children: React.ReactNode;
}

const Route: React.FC<RouteProps> = ({path, children}) => {
  const navContext = useNavigation();

  const currentPath = navContext?.currentPath;

  if ( path === currentPath ) {
    return children;
  }

  return null;
}

export default Route;