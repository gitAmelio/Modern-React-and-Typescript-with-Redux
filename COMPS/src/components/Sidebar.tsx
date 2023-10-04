import { useState } from "react";
import Link from "./Link";

const Sidebar = () => {

  const links:{label: string, path: string, activeClassName: boolean}[] = [
    {label: 'Dropdown', path: '/', activeClassName: false},
    {label: 'Accordion', path: '/accordion', activeClassName: false},
    {label: 'Buttons', path: '/button', activeClassName: false},
    {label: 'Modal', path: '/modal', activeClassName: false},
    {label: 'Tabel', path: '/table', activeClassName: false},
  ]

  const [activePage, setActivePage] = useState<string>('');

  const handleOnChange = (linkLable: string) => {
    setActivePage(linkLable);    
  }

  const renderLinks = () => {
    return links.map(link => { 
      const className = (link.label === activePage) ? 'font-bold border-l-4 border-blue-500 pl-2' : '' ;
      return <Link 
      className={`mb-3 ${className}`}
      key={link.label} to={link.path} 
      onChange={()=>handleOnChange(link.label)}>{link.label}
      </Link>
    })
  }

  return (
    <div className="sticky top-0 flex flex-col items-start min-w-[20%]">
      {renderLinks()}
    </div>
  )
}

export default Sidebar;