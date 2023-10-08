import { useSelector } from "react-redux";
import { RootState } from "../store";

const CarValue = () => {

  const totalValue = useSelector((state: RootState)=>{
    const { data, searchTerm} = state.cars;
    return data
      .filter(car=>car.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc, currentCar)=>{
        return currentCar.cost + acc;
      }, 0)
  })

  return (
    <div className="car-value">
      Total Cost: ${totalValue} 

    </div>
  )
}

export default CarValue;

