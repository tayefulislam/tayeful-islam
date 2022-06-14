import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';
import Navbar from './Pages/Navbar/Navbar';
import Blogs from './Pages/Blogs/Blogs';
import AboutMe from './Pages/AboutMe/AboutMe';
import MyProjects from './Pages/Home/MyProjects';
import ContactMe from './Pages/Home/ContactMe';
import Footer from './Pages/Footer/Footer';




function App() {


  return (
    <div>

      <Navbar></Navbar>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projectDetail/:id' element={<ProjectDetail></ProjectDetail>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/projects' element={<MyProjects></MyProjects>}></Route>
        <Route path='/contact-me' element={<ContactMe></ContactMe>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
      </Routes>


      <Footer></Footer>

    </div>
  );
}

export default App;
