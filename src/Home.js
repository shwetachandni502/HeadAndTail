
import './App.css';
import {  Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> HOME</h1>
        <Link to="/about"> About</Link>
        <Link to="/head"> Head & Tail</Link>
      
      </header>
    </div>
  );
}

export default Home;
