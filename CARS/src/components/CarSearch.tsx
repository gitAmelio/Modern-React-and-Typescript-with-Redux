import { useDispatch, useSelector } from "react-redux";
import { RootState, searchChange } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state: RootState)=>{
    return state.cars
  })

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(searchChange(event.target.value));
  }

 return (
  <div className="list-header">
    <h3 className="title is-3"></h3>
    <div className="search field is-horizontal">
      <label className="label">Search</label>
      <input 
        value={searchTerm} 
        onChange={handleChange} 
        className="input"  
      />
    </div>
  </div>
 ) 
}

export default CarSearch;