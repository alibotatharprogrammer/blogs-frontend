  import Register from './Components/Register';
  import Login from './Components/Login';
  import "react-toastify/dist/ReactToastify.css"
  import Publicnav from './Components/Publicnav';
  import Home from './Components/Home';
  import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  function App() {
    return (
      <>
        <Router>
        <Routes> 
          <Route path="/" element={<Publicnav />} /> 
        </Routes>  
        <Routes> 
          <Route path="/signup" element={<Register />} /> 
        </Routes>
        <Routes> 
          <Route path="/login" element={<Login />} /> 
        </Routes>
        <Routes> 
          <Route path="/home" element={<Home />} /> 
        </Routes>
      </Router>
      </>
    );
  }

  export default App;
