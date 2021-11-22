import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Main from './routes';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Manage from './pages/Manage';
import Bookmark from './pages/Bookmark';
import Insure from './pages/Insure';
import Fylo from './pages/Fylo';
import Contact from './pages/Contact';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/manage" element={<Manage />} />
      <Route path="/portfolio/bookmark" element={<Bookmark />} />
      <Route path="/portfolio/insure" element={<Insure />} />
      <Route path="/portfolio/fylo" element={<Fylo />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);