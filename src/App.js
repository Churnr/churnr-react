import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/global/Navbar.js";
import Home from "./pages/Home";
import Footer from "./components/global/Footer.js";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from "./components/global/ScrollToTop.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
        <ScrollToTop/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;