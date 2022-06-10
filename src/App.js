import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';
import Navbar from './Pages/Navbar/Navbar';
import Blogs from './Pages/Blogs/Blogs';
import AboutMe from './Pages/AboutMe/AboutMe';




function App() {


  return (
    <div>

      <Navbar></Navbar>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projectDetail/:id' element={<ProjectDetail></ProjectDetail>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
      </Routes>




    </div>
  );
}

export default App;
