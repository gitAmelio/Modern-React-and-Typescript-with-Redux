import React from "react";
import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  [key: string]: any; // ...rest
}

const Link: React.FC<LinkProps> = ({to, children, ...rest}) => {

  const navContext  = useNavigation();

  const { className, onChange } = rest;

  const classes = classNames('text-blue-500', className);

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navContext?.navigate(to)
    onChange();
  }

  return (
    <a className={classes} href={to} {...rest} onClick={handleClick}>{children}</a>
  )
}

export default Link;