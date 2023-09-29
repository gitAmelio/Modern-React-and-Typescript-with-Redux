import StdFilledButtons from './StdFilledButtons';
import PillClearButtons from "./PillClearButtons";
import PillFIlledButtons from "./PillFilledButtons";
import StdClearButtons from "./StdClearButtons";

const App = () => {
  return (
    <div className="app flex flex-row items-center">
      <StdFilledButtons />
      <StdClearButtons />
      <PillFIlledButtons />
      <PillClearButtons />
    </div>
  )
}

export default App;