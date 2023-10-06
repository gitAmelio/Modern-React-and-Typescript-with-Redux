import React from "react";
import Table, { TableProps,  randomId } from "./Table";
import { PiCaretUpDownBold, PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";
import useSort from "../hooks/use-sort";

interface SortableTableProps extends TableProps {
  // [key: string]: any;
}

const SortableTable: React.FC<SortableTableProps> = ({...props}) => {

  const { config, data } = props;

  const { sortedData, sortOrder, sortBy, setSort } = useSort({data, config})


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
      header: () => <th className="flex flex-row cursor-pointer hover:bg-gray-100 items-center" key={randomId()} onClick={() => setSort(column.label)}>
        {getIcons(column.label, sortBy, sortOrder)}
        {column.label}
        </th>
    }
  });

  const updatedProps = {...props, config: updatedConfig, data: sortedData }
  
  return <Table {...updatedProps} />
  
} 

export default SortableTable;
