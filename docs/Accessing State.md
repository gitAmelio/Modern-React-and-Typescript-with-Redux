## Accessing State

 

1. Find the component that needs to access some state.

2. Import the 'useSelector' hook from 'react-redux'.

```js
import { 
  useDispatch, 
  useSelector // <<== 
  } from 'react-redux';
import { addSomething, removeSomething } from 'somePath';

function Something() {
  const dispatch = useDispatch();

  const somethings = useSelector(state => {
    return state.somethings;
  }) 

  ...

}


```

3. Call the hook, passing in a selector function.

```js
const renderedSomethings = somethings.map(something => {
  return (
    <li key={something.id}>
      {something}
      ...
    </li>  
  )
})
```

4. Use the state! Anytime state changes, the component will automatically rerender.