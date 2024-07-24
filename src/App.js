import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import Dashboard from './components/Dashboard/DashBoard';


import Taskboard from './components/TaskBoard/TaskBoard.jsx';
import User2 from './components/userpage/User2.jsx';
import Report from './components/Report/Report.jsx';
import Login1 from './components/login/Login1.jsx';



function App() {
  return (
   
      <div>
        <BrowserRouter>
    
     
        <Routes>
          <Route  path='/' element={<Login1/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/login' element={<Login1/>}></Route>
          <Route  path='/taskboard' element={<Taskboard/>}></Route>
          <Route path='/userpage'element={<User2/>}></Route>
          <Route path='/report' element={<Report/>}></Route>
        </Routes>
       
        </BrowserRouter>
      </div>
    
  );
}

export default App;
