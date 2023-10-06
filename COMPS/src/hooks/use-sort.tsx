import { useState } from "react";
import { TableProps, configData } from "../components/Table";

const useSort = ({data, config}: TableProps) => {
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const setSort = (label: string) => {
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

  return {
    sortedData,
    setSort,
    sortBy,
    sortOrder
  }

}

export default useSort;