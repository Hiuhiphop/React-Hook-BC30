import { Outlet } from "react-router-dom";
import HeaderHome from "./component/HeaderHome/HeaderHome";

function App() {
  return (
    <div className="App">
      <HeaderHome/>
      <Outlet />
    </div>
  );
}

export default App;