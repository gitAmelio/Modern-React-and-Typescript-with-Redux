## Ideas to Reset Both List

1. Have the somethingSlice's 'reset' function update the list otherThings.

```js
    reset( state, action ){
      state.otherThings = [] // BAD!!
      // In somethingSlice reducer, state = somethings.
      // somethings and otherThings are slices of the 
      // global state.
      // otherThings can not be access from here. 
      return [];
    }
  }
})
```

2. Dispatch two seperate actions.

```js
  // this will work but the idea is to limit the 
  // number of dispatch calls
  const handleAddSomething = (something) => {
    dispatch(resetSomethings());
    dispatch(resetOtherThings());
  }

```
3. Get the somethingSlice to watch for the existing reset action.

```js
const somethingSlice = createSlice({
  name: "something",
  initialState: [],
  reducers: {  
    addSomething(state, action){
      state.push( action.payload);
    },
    removeSomething(state, action) {
      const index = state.indexOf(action.payload);
      amountToRemove = 1;
      state.splice(index, amountToRemove);
    }
    // This will create a dependency from somethingSlice on anotherThingSlice therefore not preferred 
    extraReducers(builder) { // <<==  
      builder.addCase(
        // to prevent typos
        otherThingSlice.actions.reset.toSting(),  // instead of 'otherthing/reset'
        // otherThingSlice.actions.reset,  // will do the trick
        (state, action) => {
        return [];
      })
    }
  }
})
```


4. Create a new, standalone reset action and get both slices to watch for it.

`store/index.js`
```js
import { configureStore, createSlice, createAction } from "@reduxjs/toolkit"; 

export const reset = createAction('app/rest'); // <<==  this argument can be any string;

const somethingSlice = createSlice({
  name: "something",
  ...
    extraReducers(builder) { 
      builder.addCase(reset, (state, action) => {
        return [];
      })
    }
  }
})

const anotherThingSlice = createSlice({
  name: "anotherthing",
  ...
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      })
    }
  }
})

...

```
`App.js`
```js
import { reset } from 'pathToStore';
```
