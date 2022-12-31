import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home';
import HeadAndTail  from './HeadAndTail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
      <Route exact path="/" element={<Home/>}>About</Route>
      <Route path="/about" element={<About/>} >About</Route>
      <Route path="/head" element={<HeadAndTail/>} >HeadAndTail</Route>
      </Routes>
        
      </header>
    </div>
  );
}

export default App;
