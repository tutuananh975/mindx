import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Products from './components/Products';
import Invoices from './components/Invoices';
import Cart from './components/Cart';
import Profile from './components/Profile';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import { useState } from 'react';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header></Header>}>
          <Route index element={<Home></Home>} />
          <Route path='products' element = {<Products />}/>
          <Route path='invoices' element = {<Invoices />}/>
          <Route path='cart' element = {<Cart />}/>
          <Route path='profile' element = {<Profile />}/>
          <Route path='about' element = {<About />}/>
        </Route>
        <Route path='/Auth' element={<Auth></Auth>}>
          <Route path='register' element={<Register></Register>} />
          <Route index element={<Login></Login>} />
        </Route>
        <Route path='*' element = {<h1>Page not found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
