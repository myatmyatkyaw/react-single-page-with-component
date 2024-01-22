//
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Service';
import Footer from './Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//import Topnav from './Topnav';


function App() {
  return (
    <>
    <Router>
    
      <Header/>

      {/* <Home/>
    <About/>
    <Service/> */}

     <Routes>
     <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Service />} />
      
      </Routes> 
      <Footer/>
      
    </Router>
   
    </>
  );
}

export default App;
