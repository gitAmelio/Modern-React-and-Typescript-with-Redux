import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState, addCar, changeCost, changeName } from "../store";
import { Car } from "../store/slices/carsSlice";


const CarForm = () => {

  const dispatch = useDispatch();

  const {name, cost } = useSelector((state: RootState)=>{
    return state.form;
  })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
     dispatch(addCar({name, cost, id:''} as Car));
  }

  const handleNameChange:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(changeName(event.target.value));
  }

  const handleCostChange:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const valueAsNumber = parseInt(event.target.value) || 0;
    dispatch(changeCost(valueAsNumber));
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input value={name} className="input is-expanded" onChange={handleNameChange} />
          </div>
        </div>
        <div className="field-group">
          <div className="field">
            <label className="label">Car Value</label>
            <input value={cost || ''} type="number" className="input is-expanded"  onChange={handleCostChange} />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm;