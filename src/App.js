
import './App.css';
import About from './About';
import Home from './Home';
import HeadAndTail  from './HeadAndTail';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

//Hint:Wrapping All components in same layout
const Layout =({ children }) =>{
  return (
    <div className={"classes.Layout"}>
      <Header /> 
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
      <Route exact path="/" element={<Home/>}>About</Route>
      <Route path="/about" element={<About/>} >About</Route>
      <Route path="/head" element={<HeadAndTail/>} >HeadAndTail</Route>
      </Routes>
        </Layout>
    </div>
  );
}

export default App;
