//
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Service';
import Footer from './Footer';
//import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
//import Topnav from './Topnav';


function App() {
  return (
    <>
    {/* <Router>
    <div>
      <Header/>
      <Switch>
      <Routes>
      <Route path="/home">
      <Home/>
      </Route></Routes>

      <Route path='/about'>
      <About/>
      </Route>

      <Route path='/service'>
      <Service/>
      </Route>

      <Footer/>
      </Switch>
      </div>
    </Router> */}

    <Header/>
    <Home/>
    <About/>
    <Service/>
    <Footer/>
    </>
  );
}

export default App;
