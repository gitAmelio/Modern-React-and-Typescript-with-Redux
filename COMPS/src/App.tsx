import Button from "./Button";

const App = () => {
  return (
    <div className='app'>
      <div>
        <Button outlined purpose={"primary"}>Click here!!!</Button>
      </div>
      <div>
        <Button rounded>Buy Now!</Button>
      </div>
      <div>
        <Button>See Deal!</Button>
      </div>
      <div>
        <Button>Hide Ads</Button>
      </div>
      <div>
        <Button>Something!</Button>
      </div>
    </div>
  )
}

export default App;