//import components
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/pages/layout/Navbar";
import NotFound from "./components/pages/NotFound";

import AddUsers from "./components/users/AddUsers";

//import dependencies
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound}></Route>
          <Route path="/users/add" component={AddUsers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
