import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Components/Products';
import About_us from './Components/About_us';
import Home from './Components/Home';
import Contact_us from './Components/Contact_us';
import Contact_us2 from './Components/Contact_us2';
import { BrowserRouter, Route } from 'react-router-dom';



function App() {



 
  return (
    <BrowserRouter>
    
    <div>
      <Navbar />
      
    <div className="d0">


    <Route exact path='/' component={Home} />
    <Route  path='/Products' component={Products} />
    <Route  path='/About' component={About_us} />
    <Route  path='/Contact' component={Contact_us} />
    <Route  path='/Contact2' component={Contact_us2} />

      </div>
  
      <Footer />
    </div>

    </BrowserRouter>

  );
}


export default App;
