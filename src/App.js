import "./css/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Photos from "./components/photos/Photos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/photo-gallery">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
