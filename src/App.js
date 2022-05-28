import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/global/Navbar.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/global/Footer.js";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;