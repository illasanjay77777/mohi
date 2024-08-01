// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/about"element={<About/>} />
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>

    </>

  );
}

export default App;
