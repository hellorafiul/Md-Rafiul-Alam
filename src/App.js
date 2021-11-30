import logo from './logo.svg';
import './App.css';
import Navagation from './Components/Home/Navagation/Navagation';
import Hero from './Components/Home/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
