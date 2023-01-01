
import './App.css';
import {  Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
        <nav className="navbar navbar-expand-md">
            <div className="container-md">
        
              <div className="center-part-content d-flex align-items-center">
              <div className="live-btn">
                   <Link to="/"><button className="btn btn-wallet">
                      Home
                    </button></Link> 
                </div>
              <div className="live-btn">
                   <Link to="/about"><button className="btn btn-wallet">
                      About
                    </button></Link> 
                </div>
                <div className="live-btn">
                   <Link to="/head"><button className="btn btn-live">Head And Tail</button></Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
 
  );
}

export default Header;
