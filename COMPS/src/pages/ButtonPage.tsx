import StdFilledButtons from "../componenets/StdFilledButtons";
import PillClearButtons from "../componenets/PillClearButtons";
import PillFIlledButtons from "../componenets/PillFilledButtons";
import StdClearButtons from "../componenets/StdClearButtons";

const ButtonPage = () => {
  return (
    <div className="buttton-page flex flex-row items-center">
      <StdFilledButtons />
      <StdClearButtons />
      <PillFIlledButtons />
      <PillClearButtons />
    </div>
  )
}

export default ButtonPage;