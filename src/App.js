import { Route, Routes,Navigate } from "react-router-dom";
import React,{useState} from "react"
import Home from "./View/client/home/Home";
import Layout from "./View/client/layout/Layout";
import LayoutAdmin from "./View/admin/Layout/LayoutAdmin";
import HomeAdmin from "./View/admin/Home/HomeAdmin";
import Login from "./View/auth/Login";
import Register from "./View/auth/Register";
import Error from "./components/Error/Error";
import About from "./View/client/about/About";
import Contact from "./View/client/contact/Contact";


function App() {
  const [admin, setAdmin] = useState(true);
  return (
    <>
    <Routes>
      <Route path="/:local" element={<Layout/>}>
          <Route index  element={<Home/>} />
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
      </Route>
      <Route path='*' element={<Navigate to='/en/'/>}/>
      <Route path='/' element={<Navigate to='/en/'/>}/>
      <Route path='/:local'>
            <Route path="auth/login" element={<Login/>}/>
            <Route path="auth/register" element={<Register/>}/>
      </Route>
      {admin && 
      <Route path="/admin" element={<LayoutAdmin/>}>
          <Route path="/admin/" element={<HomeAdmin/>}/>
      </Route>
      }
    </Routes>
    </>
  );
}

export default App;
