import StdFilledButtons from "../components/StdFilledButtons";
import PillClearButtons from "../components/PillClearButtons";
import PillFIlledButtons from "../components/PillFilledButtons";
import StdClearButtons from "../components/StdClearButtons";

const ButtonPage = () => {
  return (
    <div className="buttton-page flex flex-row flex-auto gap-1 items-center justify-between">
      <StdFilledButtons />
      <StdClearButtons />
      <PillFIlledButtons />
      <PillClearButtons />
    </div>
  )
}

export default ButtonPage;