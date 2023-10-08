import { useReducer } from "react";
import { produce } from "immer";
import Button from "../components/Button";
import Panel from "../components/Panel";

enum CountActionType {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  ADD = 'ADD',
  VALUECHANGE = 'VALUECHANGE'
}

interface CountAction {
  type: CountActionType;
  payload?: number;
}

interface CountState {
  count: number;
  valueToAdd: number;
}

const reducer = (state: CountState, action: CountAction): CountState => {
  switch(action.type){
    case CountActionType.INCREASE:
      // return {...state, count: state.count + 1};
      state.count = state.count + 1;
      return state;
    case CountActionType.DECREASE:
      // return {...state, count: state.count - 1};
      state.count = state.count - 1;
      return state;
    case CountActionType.ADD:
      // return {...state, valueToAdd:0 , count: state.count + state.valueToAdd};
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return state;
    case CountActionType.VALUECHANGE:
      if (action.payload === undefined) return state; 
      // return {...state, valueToAdd: action.payload}
      state.valueToAdd = action.payload;  
      return state;
    default:
      return state;      
  }
}

interface CounterPageProps {
  initialCount: number;
}

const CounterPage: React.FC<CounterPageProps> = ({initialCount}) => {

  const [state, dispatch] = useReducer(
    produce(reducer), 
    {
      count: initialCount,
      valueToAdd: 0
    }
  );

  const handleIncrement = () => {
    dispatch({type: CountActionType.INCREASE});
  }
  const handleDecrement = () => {
    dispatch({type: CountActionType.DECREASE});
  }

  const handleValueChange: React.ChangeEventHandler<HTMLInputElement>  = (event) => {
    dispatch({
      type: CountActionType.VALUECHANGE,
      payload: (parseInt(event.target.value) || 0),
    })
  }

  const handleAddClick: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch({type: CountActionType.ADD})
  }

  return (
    <Panel className="m-3">
      <h1>Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button primary onClick={handleIncrement}>
          Increment
        </Button>
        <Button primary onClick={handleDecrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleAddClick} className="flex flex-col">
        <label>Add a lot</label>
        <input value={state.valueToAdd || ''} onChange={handleValueChange} type="number" className="p-1 m-3 bg-gray-100 border-gray-300"/>
        <Button >Add it!</Button> 
      </form>
    </Panel>
  )
}
 
export default CounterPage;