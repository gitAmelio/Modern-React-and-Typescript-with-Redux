import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Car, removeCar } from "../store/slices/carsSlice";
// import { Car } from "../store/slices/carsSlice";


const CarList = () => {

  const dispatch = useDispatch();

  const { data, searchTerm } = useSelector((state: RootState) => {
    return state.cars;
  })
  const { name } = useSelector((state: RootState) => {
    return state.form
  })

  
  const handleDelete = (id: string) => {
    dispatch(removeCar(id));
  }

  const renderCars = () => {
    const searchData = data.filter(car=>car.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return searchData.map((car: Car) => {

      const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

      return (
        <div key={car.id} className="panel">
          <p className={`${bold && 'has-text-weight-bold'}`} >
            {car.name} - ${car.cost}
          </p>
          <button 
            className="button is-danger" 
            onClick={()=>handleDelete(car.id)}
          >Delete</button>
        </div>
      )
    })
  }
  return (
    <div className="car-list">
      {renderCars()}
      <hr />
    </div>
  )
}

export default CarList;