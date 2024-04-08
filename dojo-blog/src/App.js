// import logo from './logo.svg';
import './App.css';
// import Step from '@mui/material/Step'
// import StepLabel from '@mui/material/StepLabel'
// import StepContent from '@mui/material/StepContent'
//Swicth ->Routes
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import BlogDetails from './BlogDetails';



 function App() {
//   const title='Welcome to my new blog';//Boolean & objects connot be made to output
//   const likes=50;
//   const link="http://www.google.com";
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        {/* <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{[1,2,3]}</p>
        <a href={link}>Google site</a> */}

        <Routes>
          <Route exact path="/" element={<Home/>}>
            {/* {<Home/>} */}
          </Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/blogs/:id" element={<BlogDetails/>}></Route>

        </Routes>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
