import React, { useState } from "react";
import Table, { TableProps, configData, randomId } from "./Table";
import { PiCaretUpDownBold, PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";


interface SortableTableProps extends TableProps {
  // [key: string]: any;
}

const SortableTable: React.FC<SortableTableProps> = ({...props}) => {
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const { config, data } = props;

  const handleClick = (label: string) => {
    if (sortBy && label !== sortBy) {
      console.log('a jump')
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(label);
    }
  }

  const getIcons = (label: string, sortBy: string | null , sortOrder: string | null ) => {
    if (label !== sortBy) {
      return <PiCaretUpDownBold className="mr-2" />;
    }

    if (sortOrder === null) {
      return <PiCaretUpDownBold className="mr-2" />;
    } else if (sortOrder === 'asc') {
      return <PiCaretUpBold className="mr-2" />;
    } else if (sortOrder === 'desc') {
      return <PiCaretDownBold className="mr-2" />;
    }
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => <th className="flex flex-row cursor-pointer hover:bg-gray-100 items-center" key={randomId()} onClick={() => handleClick(column.label)}>
        {getIcons(column.label, sortBy, sortOrder)}
        {column.label}
        </th>
    }
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const {sortValue} = config.find(column => column.label === sortBy) as configData;

    if (sortValue ){
      sortedData = [...data].sort((a,b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);

        const order = sortOrder === 'asc' ? 1 : -1;

        if (typeof valueA === 'string') {
          return valueA.localeCompare(valueB) * order;
        } else {
          return (valueA - valueB) * order;
        }
      })
    }
  }

  const updatedProps = {...props, config: updatedConfig, data: sortedData }
  
  return <Table {...updatedProps} />
  
} 

export default SortableTable;
