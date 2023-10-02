import StdFilledButtons from "../componenets/StdFilledButtons";
import PillClearButtons from "../componenets/PillClearButtons";
import PillFIlledButtons from "../componenets/PillFilledButtons";
import StdClearButtons from "../componenets/StdClearButtons";

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