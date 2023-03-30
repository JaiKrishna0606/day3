import logo from './logo.svg';
import './App.css';
import pic from "../src/images/starbucks logo.png"
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Contact from './Components/contact';

function App() {
  return (
    <div className="App">
      <header>
      
      <nav className='nav-bar'>
        {/* <video className='vedio' src={vid} loop muted autoPlay={true}/> */}
      <div className='nav-links'>
      <ul>
        <li><a href=''>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#menu'>Menu</a> </li>
        <li><a href='#header4'>Contact</a></li>
      </ul>
      <img src={pic} alt=""/><p>Starbucks</p>
      </div>
      </nav>
      </header>

     <Home/>
     <About/>
     <Menu/>
     <Contact/>

    </div>
  );
}

export default App;
