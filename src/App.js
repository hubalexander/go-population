import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import City from "./components/City";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Country from "./components/Country";

//Containing the router of the application. Routes with paths are defined here.
function App() {
  
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route path="/" component={Home} exact />
          <Route path="/city" component={City} />
          <Route path="/country" component={Country} />
        </div>
      </BrowserRouter>
    );
  }


export default App;
