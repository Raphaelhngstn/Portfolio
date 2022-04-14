import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import About from '../About/About';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (  
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
