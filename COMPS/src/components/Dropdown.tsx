import React, { useEffect, useRef, useState } from 'react';
import { PiCaretDownFill, PiCaretLeftFill } from "react-icons/pi";
import Panel from './Panel';

interface DropdownProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string | null>>
  options: { 
    label: string,
    value: string
  }[];
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  onChange, 
  options
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handler = ({target}: MouseEvent): void => {
      if(!divEl.current) return;

      if (!divEl.current?.contains(target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    }

  },[])
  

  const selectItemClick = (selected: string) => {
    onChange(selected)
    setIsOpen(false)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={()=>selectItemClick(option.value)}>
        {option.label}
      </div>
    )
  })

  const handleOnClick:React.MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen( currentIsOpen => !currentIsOpen ) 
  } 

  return(
    <div ref={divEl} className="w-48 relative flex-1">
      <Panel className="flex justify-between items-center cursor-pointer border" onClick={handleOnClick}>
        {value ? value : 'Select...'}
        {isOpen ? <PiCaretDownFill className="text-lg" /> : <PiCaretLeftFill className="text-lg" /> }
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  ) 
} 

export default Dropdown;