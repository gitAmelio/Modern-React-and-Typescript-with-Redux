import { useState } from "react";
import Dropdown from "../componenets/Dropdown";

const options = [
  {
    label: 'one',
    value: 'one'
  },
  {
    label: 'two',
    value: 'two'
  },
  {
    label: 'three',
    value: 'three'
  },
  {
    label: 'four',
    value: 'four'
  },
]

const DropDownPage = () => {

  const [selection, setSelection] = useState<string|null>(null)

  return (
    // <div className="flex flex-row">
    <>
      <Dropdown value={selection!} onChange={setSelection} options={options}/>
      {/* <Dropdown value={selection!} onChange={setSelection} options={options}/> */}
    </>
  )
}

export default DropDownPage;