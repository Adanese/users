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
import EditUsers from './components/users/EditUser';
import User from "./components/users/User";

//import dependencies
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact} />
          <Route path="/users/add" component={AddUsers} />
          <Route path="/users/edit/:id" component={EditUsers} />
          <Route path="/users/:id" component={User} />
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
