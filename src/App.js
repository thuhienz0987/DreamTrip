import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './page/HomePage';
import RegisterPage from './page/RegisterPage';
import LoginPage from './page/LoginPage';
import CreateListing from './page/CreateListing';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/create-listing" element={<CreateListing/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
