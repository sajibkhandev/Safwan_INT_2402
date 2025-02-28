import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Blog from './pages/Blog';
import Contant from './pages/Contant';

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
     <Route path="/" element={<Home />}></Route>
     <Route path="/service" element={<Service />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/blog" element={<Blog />}></Route>
     <Route path="/contact" element={<Contant />}></Route>

   </>
  )
);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App