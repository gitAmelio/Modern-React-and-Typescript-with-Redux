import React, { useState } from "react";
import { PiCaretDownFill, PiCaretLeftFill } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

export type AccordionItems = { id: string, label: string, content: string }[];

interface AccordionProps {
  items: AccordionItems;
  [key: string]: any;
}

const Accordion: React.FC<AccordionProps> = ({items, ...rest}) => {

  const [ expandedId, setExpandedId ] = useState<string|null>(null);

  const handleOnClick = (id: string) => {
    if(id === expandedId) {
      setExpandedId(null)
    } else {
      setExpandedId(id)
    }
  } 

  const renderItems = () => {
  return items.map((item)=> {

    const isExpanded = expandedId === item.id;

    const icon = <span className="text-2xl">
      {isExpanded ? <PiCaretDownFill /> : <PiCaretLeftFill /> }
    </span>

      return (
        <div key={item.id}>
          <div onClick={()=>{handleOnClick(item.id)}} className="flex flex-row border-b p-3 items-center cursor-pointer justify-between bg-gray-50">{item.label}{icon}</div>
          {isExpanded && <div className="border-b p-5" >{item.content}</div>}
        </div>
      )

    })
  }

  const {className} = rest;

  return <div {...rest} className={twMerge("border-x border-t rounded flex-1",className)}>
    {renderItems()}
  </div>
}

export default Accordion;