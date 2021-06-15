import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Aboutme from "./components/pages/Aboutme";
import Particles from "react-particles-js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/Aboutme";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Particles
          className="particles-canvas"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
            },
          }}
        />
        <Aboutme />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutme" component={Aboutme} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
