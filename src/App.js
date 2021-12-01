import logo from './logo.svg';
import './App.css';
import Navagation from './Components/Home/Navagation/Navagation';
import Hero from './Components/Home/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
