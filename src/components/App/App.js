import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import About from '../About/About';
import { Route, Routes } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Formation from '../Formation/Formation';

function App() {
  return (  
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/formation" element={<Formation/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
