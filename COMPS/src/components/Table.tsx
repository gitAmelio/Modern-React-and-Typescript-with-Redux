import React from "react";

export type configData = {
  label: string;
  render: (info: any) => JSX.Element
}

interface TableProps {
  data: {
    name: string
    color: string, 
    score: number 
  }[];
  config: configData[];
}

const Table: React.FC<TableProps> = ({data, config}) => {

  const renderHeaders = config.map(({label}) => {
    return <th key={label}>{label}</th>
  });

  const randomId = () => {
    // return Math.random().toString(36).substr(2,5)
    return Math.random().toString(36).substring(2, 2+5);
  }

  const renderData = () => {

    const renderColumns = (item:any, config: configData[]) => {
      return config.map(({label, render}) => {
        return <td key={label} className="p-3">{render(item)}</td>
      }) 
    }

    return data.map(entry => {
      return <tr key={randomId()} className="border-b">
        {renderColumns(entry, config)}
      </tr> 
    })
  }

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {renderHeaders}
        </tr>
      </thead>
      <tbody>
      {renderData()}
      </tbody>
    </table>
  )
}

export default Table;