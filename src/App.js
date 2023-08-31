import { Navbar } from "./Components/HeaderComp/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { AllRoutes } from "./Route/AllRoutes";




function App() {
  return (
    <div className="App">
<div className=" overflow-auto h-screen scroll-smooth z-10">
<Router>
      <Navbar/>
      <AllRoutes/>
    </Router>
</div>
    </div>
  );
}

export default App;