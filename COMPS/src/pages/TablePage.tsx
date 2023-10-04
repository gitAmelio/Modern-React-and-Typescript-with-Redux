import Table from '../components/Table'
import { configData } from '../components/Table'

const TablePage = () => {

  const data = [
    {name: 'Orange', color: 'bg-orange-500', score: 5, more: 'Lots of vitamin C' },
    {name: 'Apple', color: 'bg-red-500', score: 3 , more: 'Good for inflammation'},
    {name: 'Banana', color: 'bg-yellow-500', score: 1, more: 'Good for the heart' },
    {name: 'Lime', color: 'bg-green-500', score: 4, more: 'Also packed with vitamin C' },
  ]

  const config: configData[] = [
    {
      label: 'Name',
      render: ({name}) => name,
    },
    {
      label: 'Color',
      render: ({color}) => <div className={`p-2 m-3 ${color}`}></div>
    },
    {
      label: 'Score',
      render: ({score}) => score
    },
    {
      label: 'More',
      render: ({more}) => more 
    }
  ]

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  )

}

export default TablePage;