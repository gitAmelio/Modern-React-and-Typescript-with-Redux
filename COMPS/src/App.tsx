import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import ButtonPage from "./pages/ButtonPage";
import Route from "./componenets/Route";
import Sidebar from "./componenets/Sidebar";

const App = () => {
  return (
    <div className="app container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
      </div>
    </div>
  )
}

export default App;