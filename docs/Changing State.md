## Changing State


*the following code assumes Immer is being used* 

1. Add a reducer to one of your slices that changes state in some particular way.

```js
import { configureStore, createSlice } from "@reduxjs/toolkit"; 

const somethingSlice = createSlice({
  name: "something",
  initialState: [],
  reducers: { // <<==   
    addSomething(state, action){
      state.push( action.payload);
    },
    removeSomething(state, action) {
      const index = state.indexOf(action.payload);
      amountToRemove = 1;
      state.splice(index, amountToRemove);
    }
    reset( state, action ){
      // state = [] will not work with Immer
      return [];
    }
  }
})
```

2. Export the action creator that the slice automatically creates.


```js
const store = configureStore({
  reducer: {
    somethings: somethingSlice.reduce,
    ... 
  }
})

export { store };
export const {
  addSome, // <<==
  removeSome, // <<==
  reset // <<==
} from somethingSlice.actions;
```

3. Find the component that you want to dispatch from.

```js
function Something() { // <<==
  ...
} 
```

4. Import the action creator function and 'useDispatch' from react-redux.

```js
import { useDispatch } from 'react-redux'; // <<==
import { addSomething, removeSomething } from 'somePath';

// import to component file
...

```


5. Call the 'useDispatch' hook to get access to the dispatch function.

```js
// in component function
function Something() {
  const dispatch = useDispatch(); // <<==
  ...
} 
```

6. When the user does something, call the action creator to get an action, then dispatch it.

```js
  const handleAddSomething = (something) => {
    const action = addSomething(something);
    dispatch(action);
    // or just "dispatch(addSomething(something));"
  }

  const handleRemoveSomething = (something) => {
    const action = removeSomething(something.id);
    dispatch(action);
  }

```

The action creator take a single argument that represent the `action.payload`.

```js
  console.log(something) // needs to match the payload type
                         // action creator expects  
  const handleAddSomething = (something) => {
    const action = addSomething(something);
    dispatch(action);
  }
```